import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

import {connect} from 'react-redux';
import {mapStateToProps, mapDispatchToProps} from '../redux/reduxMapping';

const HomeScreen = props => {
    let car = {type:"Fiat", model:"500", color:"white"}

    const switchScreenHandler = () => {
        console.log("click");
        props.navigation.navigate('About', {
            data: 'some data',
        })
    }

    return <View style={{...styles.homeScreen, ...props.style}}>
        <Text style={styles.textRegular}>SFProDisplay-Regular</Text>
        <Text style={styles.textMedium}>SFProDisplay-Medium</Text>
        <Text style={styles.textBold}>SFProDisplay-Bold</Text>
        <Text>IsLogin : {props.isLogin.toString()}</Text>
        <Text>IsLogin2 : {props.isLogin2.toString()}</Text>
        <Text>{car.model}</Text>

        <Button
            title="Go to Details"
            onPress={switchScreenHandler}
        />
    </View>
};

const styles = StyleSheet.create({
    homeScreen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textRegular: {
        fontFamily: 'SFProDisplay-Regular',
    },
    textMedium: {
        fontFamily: 'SFProDisplay-Medium',
    },
    textBold: {
        fontFamily: 'SFProDisplay-Bold',
    },

});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
