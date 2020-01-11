import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default class HomeScreen extends Component {

    handleLogout = async () => {
        const { navigate } = this.props.navigation;

        try {
            await AsyncStorage.removeItem("user");
            navigate('Login');
        }
        catch (exception) {
            return false;
        }
    }

    render() {
        return (
            <View style={styles.loginView}>
                <Text>Home Screen</Text>
                <Button
                    title="Logout"
                    color="#ff0000"
                    onPress={this.handleLogout}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    loginView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})