import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const ReviewDetailScreen = props => {
    return <View style={{...styles.reviewDetailScreen, ...props.style}}>
        <Text>Review Detail</Text>
    </View>
};

const styles = StyleSheet.create({
    reviewDetailScreen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
});

export default ReviewDetailScreen;
