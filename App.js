import React from 'react';
import MySample from './src/components/MySample';
import TabNavigator from './src/components/TabNavigator';
import { 
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
  PanResponder,
  ScrollView,
  Image,
  Slider
} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

export default class App extends React.Component {
  componentWillMount() {
    this.animation = new Animated.ValueXY({x: 0, y:SCREEN_HEIGHT-90})

    this.panResponder = PanResponder.create({
      onMoveShouldSetPanResponder:() => true,
      onPanResponderGrant:(evt, gestureState)=> {
        this.animation.extractOffset()
      },
      onPanResponderMove:(evt, gestureState) => {
        this.animation.setValue({x:0 , y: gestureState.dy})
      },
      onPanResponderRelease:(evt, gestureState) => {
        if(gestureState.moveY > SCREEN_HEIGHT-120) {
          Animated.spring(this.animation.y, {
            toValue: 0,
            tension: 1
          }).start()
        }else if(gestureState.moveY < 120) {
          Animated.spring(this.animation.y, {
            toValue: 0,
            tension: 1
          }).start()
        }
        else if(gestureState.dy < 0) {
          Animated.spring(this.animation.y, {
            toValue: -SCREEN_HEIGHT+120,
            tension: 1
          }).start()
        }else if(gestureState.dy > 0) {
          Animated.spring(this.animation.y, {
            toValue: SCREEN_HEIGHT-120,
            tension: 1
          }).start()
        }
      }
    })
  }
  render() {
    const animatedHeight = {
      transform: this.animation.getTranslateTransform()
    }
    animatedImageHeight = this.animation.y.interpolate({
      inputRange: [0, SCREEN_HEIGHT-90],
      outputRange: [200, 40],
      extrapolate: 'clamp'
    })
    animatedTitleSongOpacity = this.animation.y.interpolate({
      inputRange: [0, SCREEN_HEIGHT-500, SCREEN_HEIGHT-90],
      outputRange: [0,0,1],
      extrapolate: 'clamp'
    })
    animatedImageMarginLeft = this.animation.y.interpolate({
      inputRange: [0, SCREEN_HEIGHT-90],
      outputRange: [SCREEN_WIDTH/2-100, 10],
      extrapolate: 'clamp'
    })
    animatedheaderHeight = this.animation.y.interpolate({
      inputRange: [0, SCREEN_HEIGHT-90],
      outputRange: [SCREEN_HEIGHT/2, 90],
      extrapolate: 'clamp'
    })
    animatedSongDetailOpacity = this.animation.y.interpolate({
      inputRange: [0, SCREEN_HEIGHT-500, SCREEN_HEIGHT-90],
      outputRange: [1,0,0],
      extrapolate: 'clamp'
    })
    animatedBackGroundColor = this.animation.y.interpolate({
      inputRange: [0, SCREEN_HEIGHT-90],
      outputRange: ['rgba(0,0,0,0.5)','white'],
      extrapolate:'clamp'
    })
    return (
        <Animated.View style={{flex: 1,justifyContent: 'center', backgroundColor: animatedBackGroundColor}}>
          <TabNavigator/>
        </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
