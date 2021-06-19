import React, {useEffect, useRef} from 'react';
import {View, Text, StyleSheet, Animated} from 'react-native';
import {Circle, Defs, Ellipse, G, RadialGradient, Stop, Svg} from 'react-native-svg';



const CircularProgress = (props) => {
    const {percent,
        fontSize,
        radius,
        padding,
        strokeWidth,
        color,
        remainingStrokeColor, trigger} = props

  const circumference = Math.round(2 * Math.PI * radius);
  const center = radius + padding;

    const slideRightAnimation = useRef(new Animated.Value(0)).current;

    const AnimatedCircle = Animated.createAnimatedComponent(Circle)

    useEffect(() => {
        //slide right when enter screen
        trigger.addListener('focus', () => {
            slideRightAnimation.setValue(0);
            Animated.timing(slideRightAnimation, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
            }).start();
        })
    },[trigger]);

    const progress = slideRightAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [circumference, circumference * (1 - percent)],
    });


  return (
      <View style={styles.container}>
            <Svg width={radius * 2 + 2 * padding} height={radius * 2 + 2 * padding}>
              <G rotation="180" origin={`${center}, ${center}`}>
                <Circle
                  r={radius}
                  cx={center}
                  cy={center}
                  fill="none"
                  stroke={remainingStrokeColor || '#eeeede'}
                  strokeWidth={strokeWidth}
                  strokeDasharray={circumference}
                />
                <AnimatedCircle
                  r={radius}
                  cx={center}
                  strokeDasharray={circumference}
                  strokeDashoffset={progress}
                  strokeLinecap="round"
                  cy={center}
                  fill="none"
                  stroke={color}
                  strokeWidth={strokeWidth}
                />
              </G>
            </Svg>

            <Text style={[styles.percentText, {color: color, fontSize: fontSize}]}>
                75%
            </Text>

      </View>
  );
}

export default CircularProgress

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    percentText : {
        position: "absolute",
        alignSelf: 'center',
    }
})
