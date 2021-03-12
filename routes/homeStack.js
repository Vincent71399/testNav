import {NavigationContainer } from '@react-navigation/native';
import {createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home'
import About from '../screens/about'

const screens = {
    Home : {
        screen: Home
    },
    About: {
        screen: About
    },
}

const Stack = createStackNavigator();

export default createAppContainer(HomeStack);
