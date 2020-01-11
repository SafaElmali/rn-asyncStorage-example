
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './screens/Login/index';
import HomeScreen from './screens/Home/index';

const AppNavigator = createStackNavigator(
  {
    Login: { screen: LoginScreen },
    Home: { screen: HomeScreen },
  },
  {
    initialRouteName: 'Login'
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />
  }
}