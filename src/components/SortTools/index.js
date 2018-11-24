import React, { PureComponent } from 'react';
import { Text, View } from 'react-native';
import { CheckBox } from 'react-native-elements';
import styles from './styles';

class SortTools extends PureComponent {
    state = {
        stars: false,
        fork: false,
    };

    changeActiveState = (checkbox) => {
        return () => {
            const inSelected = Object.keys(this.state).filter((key) => key !== checkbox);

            this.setState({ [checkbox]: true, [inSelected]: false });
            this.props.onSortHandler(checkbox);
        }
    };

    render() {
        const { stars, fork } = this.state;

        return (
            <View style={styles.container}>
                <Text style={styles.text}>Sort by:</Text>
                <CheckBox
                    title='stars'
                    containerStyle={styles.checkBox}
                    checked={stars}
                    onPress={this.changeActiveState('stars')}
                />
                <CheckBox
                    title='fork'
                    containerStyle={styles.checkBox}
                    checked={fork}
                    onPress={this.changeActiveState('fork')}
                />
            </View>
        );
    }
}

export default SortTools;