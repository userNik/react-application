import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { ActivityIndicator, Text, View } from 'react-native';
import RepoList from '../RepoList';
import styles from './styles';

class OfflineNotice extends PureComponent {
    render() {
        const { isLoading, networkConnection, repos } = this.props;

        if (isLoading) {
            return (
                <View style={styles.container}>
                    <ActivityIndicator size="large" color="#ffffff" />
                </View>
            )
        }

        if (!networkConnection) {
            return (
                <View style={styles.container}>
                    <Text style={styles.text}>Offline</Text>
                </View>
            )
        }

        return (
            <View style={styles.repos}>
                <Text style={styles.title}>Your last found repos:</Text>
                <RepoList items={repos} />
            </View>
        )

    }
}

const mapStateToProps = ({ repo: { isLoading, networkConnection, repos } }) => ({
    isLoading,
    networkConnection,
    repos,
});

export default connect(mapStateToProps)(OfflineNotice);