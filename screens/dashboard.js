import React from 'react';
//third party libs
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//screen
import Home from './home'
import About from './about'
import Screen3 from './screen3';


const Tab = createBottomTabNavigator();


const DashboardScreen = (props) => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#16A950',
                inactiveTintColor: '#21293A',
                adaptive: false,

            }}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    title: 'Home',
                }}
            />
            <Tab.Screen
                name="Screen3"
                component={Screen3}
                options={{
                    title: 'Screen3',
                }}
            />
            <Tab.Screen
                name="About"
                component={About}
                options={{
                    title: 'About',
                }}
            />
        </Tab.Navigator>
    )
}

export default DashboardScreen
