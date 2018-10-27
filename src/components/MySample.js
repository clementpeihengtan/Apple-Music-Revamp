import * as React from 'react';
import { Text, Alert, View, StyleSheet, Animated, Image, TouchableWithoutFeedback, Dimensions, PanResponder } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo';

const SCREEN_WIDTH = Dimensions.get('window').width
const SCREEN_HEIGHT = Dimensions.get('window').height

export default class MySample extends React.Component {
  constructor(props) {
    super(props);
    this.spinnin = this.spinnin.bind(this);
    this.DoNothing = this.DoNothing.bind(this);
  }
  componentWillMount() {
    this.value = 0;
    this.animation = new Animated.Value(0);
    this.animation2 = new Animated.Value(0);
    this.expand = new Animated.Value(0);
    this.bottomIndicator = new Animated.Value(0);
    this.moveUpDown = new Animated.ValueXY({ x: 0, y: 0 });
    this.moveUpDown.addListener(v => (this.value = v.value));

    this.panResponder = PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        this.moveUpDown.extractOffset();
      },
      onPanResponderMove: (evt, gestureState) => {
        if (gestureState.dy < 150 && gestureState.dy > -150) {
          this.moveUpDown.setValue({ x: 0, y: gestureState.dy });
          if(gestureState.dy > 0) {
            Animated.spring(this.bottomIndicator, {
              toValue: 1,
              tension: 1
            }).start()
          }else if(gestureState.dy < 0) {
            Animated.spring(this.bottomIndicator, {
              toValue: 0,
              tension: 1
            }).start()
          }
        }
      },
      onPanResponderRelease: (evt, gestureState) => {
        this.props.parentReference(true);
        this.DoNothing();
      },
      onShouldBlockNativeResponder: (evt, gestureState) => {
        return true;
      }
    });
  }

  spinnin() {
    this.props.parentReference(false, this.value);
    this.animation.setValue(0);
    this.animation2.setValue(0);
    Animated.parallel([
      Animated.timing(this.animation, {
        toValue: 1,
        duration: 5000,
      }),
      Animated.timing(this.animation2, {
        toValue: 1,
        duration: 5000,
      }),
      Animated.spring(this.expand, {
        toValue: 1,
        tension: 1,
      }),
    ]).start(() => {
      // this.animation.setValue(0)
      // this.animation2.setValue(0)
    });
  }

  DoNothing() {
    Animated.parallel([
      Animated.timing(this.animation, {
        toValue: 1,
        duration: 100,
      }),
      Animated.timing(this.animation2, {
        toValue: 1,
        duration: 100,
      }),
      Animated.spring(this.expand, {
        toValue: 0,
        tension: 1,
      }),Animated.spring(this.moveUpDown.y, {
          toValue: 0,
          tension: 1,
      }),
      Animated.spring(this.bottomIndicator, {
          toValue: 0,
          tension: 1
      })
    ]).start(() => {
      // this.animation.setValue(0)
      // this.animation2.setValue(0)
    });
  }

  render() {
    const {data, data:{src, name, song}} = this.props
    const animatedHeight = {
      transform: this.moveUpDown.getTranslateTransform(),
    };
    const bottomViewHeight = this.bottomIndicator.interpolate({
      inputRange:[0,1],
      outputRange: [SCREEN_HEIGHT, SCREEN_HEIGHT-200],
      extrapolate:'clamp'
    })
    const artistNameTop = this.bottomIndicator.interpolate({
      inputRange:[0,1],
      outputRange: [100, 130],
      extrapolate: 'clamp'
    })
    const artistNameOpacity = this.bottomIndicator.interpolate({
      inputRange: [0,0.5,1],
      outputRange: [1, 1, 0],
      extrapolate: 'clamp'
    })
    const spin = this.animation.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: ['-135deg', '45deg', '45deg'],
    });
    const spin2 = this.animation2.interpolate({
      inputRange: [0, 1],
      outputRange: ['-135deg', '225deg'],
    });
    const animatedOpacity = this.animation.interpolate({
      inputRange: [0.5, 0.500001],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });
    const animatedZIndex = this.animation.interpolate({
      inputRange: [0.5, 0.500001],
      outputRange: [5, 2],
      extrapolate: 'clamp',
    });
    const animatedSize = this.expand.interpolate({
      inputRange: [0, 1],
      outputRange: [200, 220],
      extrapolate: 'clamp',
    });
    const animatedRadiusSize = this.expand.interpolate({
      inputRange: [0, 1],
      outputRange: [100, 110],
      extrapolate: 'clamp',
    });
    const animatedPositionLeft = this.expand.interpolate({
      inputRange: [0, 1],
      outputRange: [100, 110],
      extrapolate: 'clamp',
    });
    const animatedImagePosition = this.expand.interpolate({
      inputRange: [0, 1],
      outputRange: [-100, -110],
      extrapolate: 'clamp',
    });
    const animatedIconOpacity = this.expand.interpolate({
      inputRange: [0, 0.7, 1],
      outputRange: [0, 0, 1],
      extrapolate: 'clamp',
    });
    const animatedCrossIconPosition = this.expand.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -250],
      extrapolate: 'clamp',
    });
    const animatedAddIconPosition = this.expand.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -250],
      extrapolate: 'clamp',
    });
    return (
      <View style={{justifyContent: 'center', flex: 1}}>
        <View style={{alignItems: 'center',justifyContent: 'center'}}>
          <Animated.View
            style={{
              position: 'absolute',
              opacity: animatedIconOpacity,
              top: animatedCrossIconPosition,
              height: 100,
              width: 100,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Ionicons name="md-close" size={50} />
          </Animated.View>
          <Animated.View
            style={{
              position: 'absolute',
              opacity: animatedIconOpacity,
              bottom: animatedAddIconPosition,
              height: 100,
              width: 100,
              alignItems: 'center',
              justifyContent: 'center'
            }}>
            <Ionicons name="md-add" size={50} color={'#e3002d'}/>
          </Animated.View>
          <Animated.View
            {...this.panResponder.panHandlers}
            style={[
              animatedHeight,
              {
                height: animatedSize,
                width: animatedSize,
                borderRadius: animatedRadiusSize,
                position: 'absolute',
                margin: 'auto',
                // top: 100,
                backgroundColor: 'black',
              },
            ]}>
            <TouchableWithoutFeedback 
            onPressIn={this.spinnin}
            onPress={() => {}}>
              <Animated.View
                style={{
                  height: animatedSize,
                  width: animatedSize,
                  borderRadius: animatedRadiusSize,
                }}>
                <Animated.View
                  style={{
                    width: animatedSize,
                    height: animatedSize,
                    borderRadius: animatedRadiusSize,
                    borderWidth: animatedRadiusSize,
                    position: 'absolute',
                    opacity: 0.6,
                    zIndex: 5,
                    borderLeftColor: 'transparent',
                    borderBottomColor: 'transparent',
                    borderTopColor: '#e3002d',
                    borderRightColor: '#e3002d',
                    transform: [{ rotate: spin }],
                  }}
                />
                <Animated.View
                  style={{
                    width: animatedSize,
                    height: animatedSize,
                    borderRadius: animatedRadiusSize,
                    borderWidth: animatedRadiusSize,
                    opacity: 0.6,
                    zIndex: 3,
                    position: 'absolute',
                    borderLeftColor: 'transparent',
                    borderBottomColor: 'transparent',
                    borderTopColor: '#e3002d',
                    borderRightColor: '#e3002d',
                    transform: [{ rotate: spin2 }],
                  }}
                />
                <Animated.View
                  style={{
                    position: 'absolute',
                    left: 0,
                    width: animatedRadiusSize,
                    height: animatedSize,
                    borderTopLeftRadius: animatedRadiusSize,
                    borderBottomLeftRadius: animatedRadiusSize,
                    zIndex: animatedZIndex,
                    overflow: 'hidden',
                    backgroundColor: 'red',
                  }}>
                  <Animated.View
                    style={{
                      width: animatedSize,
                      height: animatedSize,
                      left: 0,
                      flex: 1,
                    }}>
                    <Image
                      style={{ width: null, height: null, flex: 1 }}
                      source={src}
                    />
                  </Animated.View>
                </Animated.View>
                <Animated.View
                  style={{
                    position: 'absolute',
                    left: animatedPositionLeft,
                    width: animatedRadiusSize,
                    height: animatedSize,
                    borderTopRightRadius: animatedRadiusSize,
                    borderBottomRightRadius: animatedRadiusSize,
                    overflow: 'hidden',
                    backgroundColor: 'blue',
                    zIndex: 3,
                  }}>
                  <Animated.View
                    style={{
                      width: animatedSize,
                      height: animatedSize,
                      flex: 1,
                      left: animatedImagePosition
                    }}>
                    <Image
                      style={{ width: null, height: null, flex: 1 }}
                      source={src}
                    />
                  </Animated.View>
                </Animated.View>
              </Animated.View>
            </TouchableWithoutFeedback>
          </Animated.View>
           <Animated.View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              position: 'absolute',
              height: 100,
              // marginTop: artistNameHeight,
              top: artistNameTop,
              zIndex: -1,
              opacity: artistNameOpacity
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 20,
                fontFamily: 'System',
              }}>
              {song}
            </Text>
            <Text
              style={{ color: '#ff2d55', fontSize: 20, fontFamily: 'System' }}>
              {name}
            </Text>
          </Animated.View>
        </View>
      </View>
    );
  }
}
