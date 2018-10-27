import React from 'react';
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

export default class MusicPlayer extends React.Component {
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
          <Animated.View
          {...this.panResponder.panHandlers}
            style={[animatedHeight, {position: 'absolute',left: 0, right: 0, zIndex: 1, backgroundColor: 'white', top: -80, height:SCREEN_HEIGHT}]}
          >
            <Animated.View
              style={{height:animatedheaderHeight, borderTopWidth: 1, borderTopColor: '#ebe5e5', flexDirection: 'row', alignItems: 'center'}}
            >
              <View style={{flex: 4, flexDirection: 'row', alignItems: 'center'}}>
                  <Animated.View style={{height: animatedImageHeight, width: animatedImageHeight, marginLeft: animatedImageMarginLeft}}>
                    <Image style={{flex: 1, width: null, height: null}} source={require('../../assets/bts2.jpg')}></Image>
                  </Animated.View>
                  <Animated.Text style={{opacity: animatedTitleSongOpacity, fontSize: 18, paddingLeft: 10}}>Love Yourself 'Tear/Fake Love'</Animated.Text>
              </View>
              <Animated.View style={{flex: 1, opacity:animatedTitleSongOpacity, flexDirection: 'row', justifyContent: 'space-around'}}>
                  <Ionicons name="md-pause" size={32}/>
                  <Ionicons name="md-play" size={32}/>
              </Animated.View>
            </Animated.View>

            <Animated.View
            style={{height:animatedheaderHeight, opacity:animatedSongDetailOpacity}}>
              <View style={{flex: 1,alignItems:'center',justifyContent:'flex-end'}}>
                <Text style={{fontWeight:'bold',fontSize:22}}>Fake Love</Text>
                <Text style={{color:'#fa95ed',fontSize:18}}>Love Yourself 'Tear/Fake Love'</Text>
              </View>
              <View style={{height:40,width:SCREEN_WIDTH,alignItems:'center'}}>
                <Slider
                  style={{width:350}}
                  step={1}
                  minimumValue={18}
                  maximumValue={71}
                  value={18}
                />
              </View>
              <View style={{flex:2,flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
                <Ionicons name="md-rewind" size={40}/>
                <Ionicons name="md-play" size={50}/>
                <Ionicons name="md-fastforward" size={40}/>
              </View>
              <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:20,paddingBottom:20}}>
                <Ionicons name="md-add" size={32} style={{color: '#fa95ed'}}/>
                <Ionicons name="md-more" size={32} style={{color: '#fa95ed'}}/>
              </View>
            </Animated.View>
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
