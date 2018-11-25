import React, { Component } from 'react';
import { View, ActivityIndicator, Text, NetInfo } from 'react-native';
import { connect } from 'react-redux';
import { getUserToken } from '../../services/asyncStorage';
import { addAuthHeader } from '../../services/apiService';
import { loadLastFoundRepos } from '../../actions/repo';
import styles from './styles';

class Initializer extends Component {
    handleConnectivityChange = async (networkConnection) => {
        const { navigation } = this.props;

        if (networkConnection) {
            const userToken = await getUserToken();

            if (!userToken) {
                return navigation.push('SighIn');
            }

            addAuthHeader(userToken);
            navigation.push('Search');
        } else {
            this.props.dispatch(loadLastFoundRepos());
            navigation.push('OfflineNotice');
        }
    };

    componentDidMount() {
        NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);
    }

    componentWillUnmount() {
        NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectivityChange);
    }

    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#ffffff"/>
                <Text style={styles.text}>Loading...</Text>
            </View>
        )
    }
}

export default connect()(Initializer);