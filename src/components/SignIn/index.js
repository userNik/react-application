import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
import { fetchUser } from '../../actions/user';

type State = {
  username: string,
  password: string,
};

class SighIn extends Component<State> {
    state = {
        username: null,
        password: null,
    };

    onChange(inputName, event) {
        const text = event.nativeEvent.text;

        this.setState({ [inputName]: text });
    };

    componentDidUpdate() {
        const { user, navigation } = this.props;

        if (user) {
           navigation.push('Search');
        }
    }

    submitForm = () => {
        const { fetchUser } = this.props;
        const { username, password } = this.state;

        fetchUser({ username, password });
    };

    render() {
        const { errorAuth } = this.props;
        const { username, password } = this.state;
        const isDisabled = !username || !password;

        return (
            <View style={styles.container}>
                <View style={styles.innerBox}>
                    <Text style={styles.title}>Sign in</Text>
                    {errorAuth && (<Text style={styles.error}>{errorAuth}</Text>)}
                    <TextInput
                        onChange={this.onChange.bind(this, 'username')}
                        value={username}
                        placeholder='Enter your username'
                        autoCapitalize='none'
                        style={styles.inputName}
                    />
                    <TextInput
                        value={password}
                        secureTextEntry={true}
                        placeholder='Enter your password'
                        autoCapitalize='none'
                        onChange={this.onChange.bind(this, 'password')}
                        style={styles.inputName}
                    />
                    <TouchableOpacity
                        onPress={this.submitForm}
                        disabled={isDisabled}
                    >
                        <Text style={isDisabled ? styles.disabled : styles.button}>Send</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    errorAuth: state.user.errorAuth,
    user: state.user.userData,
});
const mapDispatchToProps = (dispatch) => {
    return {
        fetchUser: (userData) => {
            dispatch(fetchUser(userData));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SighIn);