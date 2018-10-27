import React, {Component} from 'react';
import {Easing, Animated} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import ForYou from './ForYou';
import MySampler from './MySampler';

const transitionConfig = () => {
  return {
    transitionSpec: {
      duration: 750,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: sceneProps => {      
      const { layout, position, scene } = sceneProps

      const thisSceneIndex = scene.index
      const width = layout.initWidth

      const translateX = position.interpolate({
        inputRange: [thisSceneIndex - 1, thisSceneIndex],
        outputRange: [width, 0],
      })

      return { transform: [ { translateX } ] }
    },
  }
}

export default(ForYouStack = createStackNavigator(
    {
        MySampler:{screen: MySampler},
        ForYou: {screen: ForYou}
    },{
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
            gesturesEnabled: false,
        },
        transitionConfig
    }));