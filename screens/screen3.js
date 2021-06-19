import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {adjustSize} from '../common/autoResizeFuncs';


const Screen3 = props => {
    return <View style={styles.screen}>
        <Text>Screen 3</Text>
    </View>
}

export default Screen3

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: adjustSize(24),
        alignItems: 'center',
        justifyContent: 'center'
    },
})
