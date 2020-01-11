import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default class LoginScreen extends Component {
    constructor() {
        super();
        this.state = {
            user: {
                username: '',
                password: ''
            }
        }
    }

    componentDidMount() {
        this.readStore();
    }

    readStore = async () => {
        try {
            const value = await AsyncStorage.getItem('user');
            const parsedValue = JSON.parse(value);
            console.log(parsedValue);
            if (parsedValue !== null) {
                this.setState({
                    user: {
                        username: parsedValue.username,
                        password: parsedValue.password
                    }
                }, () => {
                    this.handleLogin()
                })
            }
        } catch (e) {
            // error reading value
        }
    }

    onChangeUsername = (username) => {
        const { user } = this.state;

        this.setState({
            user: {
                ...user,
                username: username
            }
        })
    }

    onChangePassword = (password) => {
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                password: password
            }
        });
    }

    handleLogin = () => {
        if (this.state.user.username === 'Admin' && this.state.user.password === 'Admin') {
            this.storeData();
            this.props.navigation.navigate('Home');
        }
    }

    storeData = async () => {
        const { user } = this.state;
        try {
            await AsyncStorage.setItem('user', JSON.stringify(user));
        } catch (e) {
            // saving error
        }
    }

    render() {
        return (
            <View style={styles.loginView}>
                <Text style={{ alignSelf: 'center' }}>Login Screen</Text>
                <TextInput
                    style={{ marginHorizontal: 20, marginVertical: 20, height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 10, paddingHorizontal: 10 }}
                    placeholder="username"
                    onChangeText={text => this.onChangeUsername(text)}
                />
                <TextInput
                    style={{ marginHorizontal: 20, height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 10, paddingHorizontal: 10 }}
                    placeholder="password"
                    onChangeText={text => this.onChangePassword(text)}
                />
                <Button
                    title="Login"
                    color="#318321"
                    onPress={this.handleLogin}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    loginView: {
        flex: 1,
        justifyContent: 'center',
    }
})