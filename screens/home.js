import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

import {connect} from 'react-redux';
import {mapStateToProps, mapDispatchToProps} from '../redux/reduxMapping';


const HomeScreen = props => {
    let car = {type:"Fiat", model:"500", color:"white"}

    const switchScreenHandler = () => {
        console.log("click");
        props.navigation.navigate('Review', {
            data: 'some data',
        })
    }

    return <View style={{...styles.homeScreen, ...props.style}}>
        <View style={{width:'100%', height: 300}} >

            <View style={[styles.overLay, {backgroundColor: 'white'}]}>
                <View style={{width: '100%', height:40, backgroundColor: 'red'}}/>
            </View>
            <Text>something</Text>
            <Text>something</Text>
            <Text>something</Text>
        </View>

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
    text2Regular: {
        fontFamily: 'SFProText-Regular',
        fontSize: 30
    },
    text2Medium: {
        fontFamily: 'SFProText-Medium',
        fontSize: 30
    },
    text2Bold: {
        fontFamily: 'SFProText-Bold',
        fontSize: 30
    },
    textRegular: {
        fontFamily: 'SFProDisplay-Regular',
        fontSize: 30
    },
    textMedium: {
        fontFamily: 'SFProDisplay-Medium',
        fontSize: 30
    },
    textBold: {
        fontFamily: 'SFProDisplay-Bold',
        fontSize: 30
    },
    textRegularItalic: {
        fontFamily: 'SFProDisplay-RegularItalic',
        fontSize: 30
    },
    overLay: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
