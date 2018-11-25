import React, { PureComponent } from 'react';
import { View, Text, ActivityIndicator, TouchableOpacity, FlatList } from 'react-native';
import { AVAILABLE_LENGTH_CHARACTERS_TO_ITEM_TEXT } from '../../constants/common';
import { sliceText } from '../../helper';
import styles from './styles';

type Props = {
    isLoading: Boolean,
    items: {},
    networkConnection: boolean,
    onRepoPress: () => void,
    loadMoreRepos: () => void,
};

class RepoItem extends PureComponent<Props> {
    isScrollExecuted = false;

    selectItem = (item) => () => {
        const { networkConnection, onRepoPress } = this.props;
        if (!networkConnection) {
            return;
        }
        onRepoPress(item);
    };

    onEndReached = () => {
        const { networkConnection, loadMoreRepos } = this.props;

        if (!networkConnection) {
            return;
        }

        if (this.isScrollExecuted) {
            loadMoreRepos();
            this.isScrollExecuted = false;
        }
    };

    renderItem = ({ item }) => {
        const { fullName, stars, forks } = item;
        return (
            <View style={styles.item}>
                <TouchableOpacity onPress={this.selectItem(item)}>
                    <Text style={styles.label}>Star: {stars}</Text>
                    <Text style={styles.label}>Fork: {forks}</Text>
                    <Text style={styles.text}>
                        {sliceText(fullName, AVAILABLE_LENGTH_CHARACTERS_TO_ITEM_TEXT)}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    };

    render() {
        const { isLoading, items } = this.props;

        if (isLoading) {
            return (
                <View style={styles.loading}>
                    <ActivityIndicator size="large" color="white"/>
                </View>
            )
        }

        return (
            <View style={styles.container}>
                <FlatList
                    data={items}
                    renderItem={this.renderItem}
                    onEndReachedThreshold={0.5}
                    onScrollBeginDrag={() => this.isScrollExecuted = true}
                    onEndReached={this.onEndReached}
                />
            </View>
        );
    }
}

export default RepoItem;