import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import {mapStateToProps, mapDispatchToProps} from '../redux/reduxMapping';

const AboutScreen = props => {
    const switchScreenHandler = () => {
        console.log("click");
        props.navigation.goBack();
    }

    return <View style={{...styles.aboutScreen, ...props.style}}>
        <Text>IsLogin : {props.isLogin.toString()}</Text>
        <Text>IsLogin2 : {props.isLogin2.toString()}</Text>

        <Button
            title="login"
            onPress={() => {props.login()}}
        />

        <Button
            title="logout"
            onPress={() => {props.logout()}}
        />

        <Button
            title="Back"
            onPress={switchScreenHandler}
        />
    </View>
};

const styles = StyleSheet.create({
    aboutScreen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(AboutScreen);

