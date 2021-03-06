import React, {Component} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import Home from './screens/home'
import About from './screens/about'

import {Provider} from 'react-redux';
import {store} from './redux/helpers/store';
import DashboardScreen from './screens/dashboard';
import ReviewDetailScreen from './screens/reviewDetails';

const Stack = createStackNavigator();

export default class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: "default",
            changeUsername: this.changeUsername,
        }
    }

    changeUsername(){
        this.setState({username: 'changed'});
    }

    componentDidMount() {
        this.init();
    }

    init = async() => {
        const value = await this.getData();

        if(value === null){
            console.log("value is null");
        }else if(value === ''){
            console.log("value is empty");
        }else{
            console.log("value is " + value);
        }

        let item = {
            id: 1,
            value: 'xxx',
        }

        await this.storeData(item);
    }

    storeData = async (item) => {
        try {
            await AsyncStorage.setItem('token', item)
            console.log('save data : ' + item.value);
        } catch (e) {
            // saving error
            console.log('error1 : ' + e);
        }
    }

    getData = async () => {
        try {
            const item = await AsyncStorage.getItem('token')
            if(item !== null) {
                // value previously stored
                // this.setState({token: value});
                console.log('load data : ' + item.value);
                return item;
            }
        } catch(e) {
            // error reading value
            console.log('error2 : ' + e);
        }
        return '';
    }

    configAnimation = {
        animation: 'clamp',
        config: {
            stiffness: 1000,
            damping: 500,
            mass: 3,
            overshootClamping: true,
            restDisplacementThreshold: 0.01,
            restSpeedThreshold: 0.01,
        },
    };

    render() {
        return (
            <Provider store={store}>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen name="DashboardScreen" component={DashboardScreen} options={{
                            title: 'Dashboard',
                            headerStyle: {
                                backgroundColor: '#f4511e',
                            },
                            headerTintColor: '#fff',
                            headerTitleStyle: {
                                fontWeight: 'bold',
                                alignSelf: 'center',
                            },
                            headerShown: false,
                        }}/>
                        <Stack.Screen name="Review" component={ReviewDetailScreen} options={{
                            transitionSpec: {
                                open: this.configAnimation,
                                close: this.configAnimation,
                            },
                        }}/>
                    </Stack.Navigator>
                </NavigationContainer>
            </Provider>
        );
    }
}
