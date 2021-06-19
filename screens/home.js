import React from 'react';
import {View, StyleSheet, Text, Button, Image, Animated} from 'react-native';
import { Pages } from 'react-native-pages'

import {connect} from 'react-redux';
import {mapStateToProps, mapDispatchToProps} from '../redux/reduxMapping';
import CircularProgress from '../components/CircularProgress';
import CircularProgress3 from '../components/CircularProgress3';
import {adjustSize} from '../common/autoResizeFuncs';


let Label = ({ color, backgroundColor, text, effect, index, pages, progress }) => {
    let style = { color };

    switch (effect) {
        case 'skew':
            style.transform = [{
                skewX: progress.interpolate({
                    inputRange: [-0.75, 0, 0.75],
                    outputRange: ['45deg', '0deg', '-45deg'],
                }),
            }];
            break;

        case 'rise':
            style.transform = [{
                translateY: progress.interpolate({
                    inputRange: [-0.5, 0, 0.5],
                    outputRange: [50, 0, -50],
                }),
            }];

            style.opacity = progress.interpolate({
                inputRange: [-0.5, 0, 0.5],
                outputRange: [0, 1, 0],
            });
            break;

        case 'zoom':
            style.transform = [{
                scale: progress.interpolate({
                    inputRange: [-1, 0, 1],
                    outputRange: [4, 1, 0],
                }),
            }];

            style.opacity = progress.interpolate({
                inputRange: [-0.25, 0, 1],
                outputRange: [0, 1, 1],
            });
            break;

        case 'flip':
            style.transform = [{
                rotate: progress.interpolate({
                    inputRange: [-1, 0, 1],
                    outputRange: ['360deg', '0deg', '-360deg'],
                }),
            }];
            break;

        case 'slide':
            style.transform = [{
                translateX: progress.interpolate({
                    inputRange: [-1, 0, 1],
                    outputRange: [-100, 0, 100],
                }),
            }];
            break;
    }

    return (
        <View style={[styles.textContainer, { backgroundColor }]}>
            <Animated.Text style={[styles.text, style]}>
                {text}
                {'\n'}
                <Animated.Text style={styles.index}>{`[${index + 1} / ${pages}]`}</Animated.Text>
            </Animated.Text>
        </View>
    );
};

const HomeScreen = props => {

    const switchScreenHandler = () => {
        console.log("click");
        props.navigation.navigate('Review', {
            data: 'some data',
        })
    }

    return <View style={{...styles.homeScreen, ...props.style}}>
        <View style={styles.container}>
            <Pages>
                <Label color='#FFF59D' backgroundColor='#607D8B' text='move' effect='skew' />
                <Label color='#B2FF59' backgroundColor='#546E7A' text='fast' effect='rise' />
                <Label color='#81D4FA' backgroundColor='#455A64' text='and'  effect='zoom' />
                <Label color='#F44336' backgroundColor='#37474F' text='break' effect='flip' />
                <Label color='#FF9100' backgroundColor='#263238' text='things' effect='slide' />
            </Pages>

            <Pages
                horizontal={false}
                indicatorPosition='left'
                indicatorColor='#FF9100'
                indicatorOpacity={0.54}>
                <Image source={require('../assets/b-1.png')} style={styles.image} />
                <Image source={require('../assets/b-2.png')} style={styles.image} />
                <Image source={require('../assets/b-3.png')} style={styles.image} />
            </Pages>
        </View>
    </View>
};

const styles = StyleSheet.create({
    homeScreen: {
        flex: 1,
        padding: adjustSize(24),
        // alignItems: 'center',
        // justifyContent: 'center'
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
    },
    image: {
        width: null,
        height: null,
        resizeMode: 'cover',
        flex: 1,
    },

    container: {
        flex: 1,
        backgroundColor: '#263238',
    },

    textContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },

    text: {
        backgroundColor: 'transparent',
        textAlign: 'center',
        fontSize: 52,
    },

    index: {
        fontSize: 10,
        color: 'rgba(255, 255, 255, .63)',
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
