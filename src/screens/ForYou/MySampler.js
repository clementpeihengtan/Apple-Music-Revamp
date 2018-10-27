import React from 'react';
import {
    Text,
    StyleSheet,
    View,
    Animated,
    Image,
    Dimensions,
    ScrollView,
    Button,
    Alert
} from 'react-native';
import { BlurView, Constants } from 'expo';
import MySample from '../../components/MySample';
import { LinearGradient } from 'expo';

const SCREEN_WIDTH = Dimensions.get('window').width 
const SCREEN_HEIGHT = Dimensions.get('window').height 

const AnimatedBlurView = Animated.createAnimatedComponent(BlurView);

const artistInfo = [
  {
    name: 'Kendrick Lamar',
    song: 'HUMBLE',
    src: require('./images/og.jpeg')
  },
  {
    name: 'Dua Lipa',
    song: 'NEW RULES',
    src: require('./images/dualipa.png')
  },
  {
    name: 'Shawn Mendes',
    song: 'IN MY BLOOD',
    src: require('./images/shawnmendes.png')
  }
]

export default class MySampler extends React.Component {
    constructor(props) {
    super(props);
    this.animation = new Animated.Value(0);
    this.fading = new Animated.Value(0);
    this.state = {
      enableHorizontalScroll: true
    };
  }
  componentWillMount() {
    this.setScrollEnabled = this.setScrollEnabled.bind(this);
    this.FadeIn = this.FadeIn.bind(this);
    this.FadeOut = this.FadeOut.bind(this);
    this.FadeIn();
    setTimeout(() => {
      this.scrollView.scrollTo({ x: -75 });
    }, 1); // scroll view position fix
  }

  FadeIn() {
    Animated.timing(this.fading, {
      toValue: 1,
      duration: 1000
    }).start()
  }

  FadeOut() {
    Animated.timing(this.fading, {
      toValue: 0,
      duration: 1000
    }).start(() => {
      this.props.navigation.navigate('ForYou')
    })
  }

  setScrollEnabled(enable, moveupDown) {
    this.setState({ enableHorizontalScroll: enable });
    let { enableHorizontalScroll } = this.state;
    if (enableHorizontalScroll) {
      Animated.timing(this.animation, {
        toValue: 1,
        timing: 1000,
      }).start();
    } else {
      Animated.timing(this.animation, {
        toValue: 0,
        timing: 1000,
      }).start();
    }
  }
  render() {
    const scrollEnabled = this.state.enableHorizontalScroll;
    // const transform = this.state.transformation.interpolate({
    //   inputRange: [0, 1],
    //   outputRange: [SCREEN_HEIGHT, SCREEN_HEIGHT*0.6],
    //   extrapolate: 'clamp'
    // });
    const blurintensity = this.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 80],
      extrapolate: 'clamp',
    });
    const blurViewZindex = this.animation.interpolate({
      inputRange: [0, 0.1],
      outputRange: [-1, 0],
      extrapolate: 'clamp'
    })
    const transX = this.fading.interpolate({
      inputRange: [0, 1],
      outputRange: [-SCREEN_WIDTH, 0],
      extrapolate: 'clamp'
    })
    const FadingOpacity = this.fading.interpolate({
      inputRange: [0, 0.8, 1],
      outputRange: [0, 0, 1],
      extrapolate: 'clamp'
    })
    const transition = this.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [SCREEN_HEIGHT, SCREEN_HEIGHT*0.6],
      extrapolate: 'clamp'
    });
    const { navigate } = this.props.navigation;
    return (
      <Animated.View style={{ flex: 1, opacity: FadingOpacity, transform: [{translateX: transX}] }}>
        <View style={{ flex: 0, paddingBottom: 20 }}>
          <View style={{ paddingTop: 40, paddingLeft: 20, paddingBottom: 10 }}>
            <Text
              style={{ fontSize: 25, color: '#e3002d', fontFamily: 'System' }}>
              For You
            </Text>
          </View>
          <View style={{ paddingLeft: 20 }}>
            <Text
              style={{
                fontSize: 30,
                fontFamily: 'System',
                paddingBottom: 20,
                fontWeight: 'bold',
              }}>
              My Sampler
            </Text>
            <Text style={{ fontSize: 15, fontFamily: 'System' }}>
              We've curated some artist we think you'll like.
            </Text>
            <Text style={{ fontSize: 15, fontFamily: 'System' }}>
              Press and hold to preview their music, and if you like what you
              hear, drag down to add it to your library
            </Text>
          </View>
        </View>
        <View
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            width: SCREEN_WIDTH,
            bottom: 0,
            height: SCREEN_HEIGHT/12-150,
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}>
            <View style={{ paddingLeft: 20 }}>
              <Button onPress={() => navigate('ForYou')} title="Reset" color="#e3002d" />
            </View>
            <View style={{ paddingRight: 20 }}>
              <Button onPress={this.FadeOut} title="Done" color="#e3002d" />
            </View>
          </View>
        </View>
          <Animated.View style={{height: SCREEN_HEIGHT-SCREEN_HEIGHT/2, width: SCREEN_WIDTH, position:'absolute', top:SCREEN_HEIGHT}}>
            <LinearGradient
                        colors={['white', '#e3002d']}
                        style={{flex: 1}}
            />
        </Animated.View>
        <AnimatedBlurView
          tint="light"
          intensity={blurintensity}
          style={[StyleSheet.absoluteFill,{ zIndex: blurViewZindex }]}
        />
        <ScrollView
          ref={scrollView => {
            this.scrollView = scrollView;
          }}
          scrollEventThrottle={60}
          horizontal
          // pagingEnabled
          scrollEnabled={scrollEnabled}
          showsHorizontalScrollIndicator={false}
          decelerationRate={0}
          snapToInterval={SCREEN_WIDTH - 150}
          snapToAlignment={'center'}
          contentInset={{
            top: 0,
            left: 100,
            bottom: 0,
            right: 100,
          }}
          style={{
            position: 'absolute',
            top: SCREEN_HEIGHT / 8
          }}>
          >
          {artistInfo.map((data, index) => (
            <View
              key={index}
              style={{
                width: SCREEN_WIDTH - 150,
                justifyContent: 'center',
                alignItems: 'center',
                height: (SCREEN_HEIGHT / 3) * 2.2,
                overflow: 'visible',
              }}>
              <MySample
                onRef={ref => (this.setScrollEnabled = ref)}
                parentReference={this.setScrollEnabled.bind(this)}
                data={data}
                key={index}
              />
            </View>
          ))}
          <View
            style={{
              width: SCREEN_WIDTH - 150,
              justifyContent: 'center',
              alignItems: 'center',
              height: (SCREEN_HEIGHT / 3) * 2.2,
              overflow: 'visible',
            }}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                padding: 20,
              }}>
              <Text
                style={{
                  fontSize: 21,
                  color: '#e3002d',
                  fontFamily: 'System',
                  fontWeight: 'bold',
                  marginBottom: 10,
                }}>
                That's all for now
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '100',
                  fontFamily: 'System',
                  textAlign: 'center',
                }}>
                Come back next week for more curated sample
              </Text>
            </View>
          </View>
        </ScrollView>
      </Animated.View>
    );
  }
}
