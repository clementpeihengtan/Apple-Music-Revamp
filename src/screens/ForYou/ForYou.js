import * as React from 'react';
import {View, Text, ScrollView, Animated, Dimensions, Image} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width

const albums = [
    {
        albumName: 'God is a Woman',
        artist: 'Ariana Grande',
        imageurl: require('./images/ariana-grande.jpg')
    },
    {
        albumName: 'Goosebumps',
        artist: 'Travis Scott',
        imageurl: require('./images/travis_scott.jpg')
    },
    {
        albumName: 'Phoenix',
        artist: 'Fall Out Boy',
        imageurl: require('./images/fall-out-boy.jpeg')
    },
    {
        albumName: 'In My Blood',
        artist: 'Shawn Mendes',
        imageurl: require('./images/shawn-mendes-in-myblood.jpg')
    },
    {
        albumName: 'Stay The Night',
        artist: 'Zedd',
        imageurl: require('./images/zedd-stn.png')
    }
]

const artistSpotLights = [
    {
        albumName: 'Dua Lipa Essentials',
        artist: 'Apple Music Alternative',
        imageurl: require('./images/artistSpotlight5.jpg')
    },
    {
        albumName: 'Taylor Swift Remixed',
        artist: 'Apple music pop',
        imageurl: require('./images/artistSpotlight1.jpg')
    },
    {
        albumName: 'Shawn Mendes Inspiration',
        artist: 'Apple Music Inspired',
        imageurl: require('./images/artistSpotlight3.jpg')
    },
    {
        albumName: 'Charlie Puth Influences',
        artist: 'Best of Charlie Puth',
        imageurl: require('./images/artistSpotlight2.jpg')
    }
]

const genres = [
    {
        genre: 'Jazz',
        imageurl: require('./images/artistSpotlight5.jpg')
    },
    {
        genre: 'Dance',
        imageurl: require('./images/artistSpotlight1.jpg')
    },
    {
        genre: 'Pop',
        imageurl: require('./images/artistSpotlight3.jpg')
    },
    {
        genre: 'Classical',
        imageurl: require('./images/artistSpotlight2.jpg')
    },
    {
        genre: 'Hip-Hop/Rap',
        imageurl: require('./images/artistSpotlight2.jpg')
    },
    {
        genre: 'Alternative',
        imageurl: require('./images/artistSpotlight2.jpg')
    }
]

export default class ForYou extends React.Component {
    constructor(props) {
        super(props);
        this.animation = new Animated.Value(0);
        this.FadeIn = this.FadeIn.bind(this);
    }

    FadeIn() {
        Animated.timing(this.animation, {
            toValue: 1,
            duration: 1000
        }).start()
    }
    componentWillMount() {
        this.FadeIn();
    }
  render() {
      const transX = this.animation.interpolate({
        inputRange: [0, 1],
        outputRange: [-SCREEN_WIDTH, 0],
        extrapolate: 'clamp'
    })
    const FadingOpacity = this.animation.interpolate({
        inputRange: [0, 0.8, 1],
        outputRange: [0, 0, 1],
        extrapolate: 'clamp'
    })
    return (
      <Animated.View style={{flex: 1, marginLeft: 5, paddingTop: 5, opacity: FadingOpacity, transform: [{translateX: transX}]}}>
        <ScrollView
            showsVerticalScrollIndicator = {false}
        >
            <View style={{paddingTop: 25, paddingLeft: 10, marginTop: 20}}>
                <Text style={{fontSize: 30, fontWeight: 'bold', fontFamily: 'System'}}>For You</Text>
                </View>
                <View
                style={{
                    paddingTop: 5,
                    paddingBottom: 5,
                    borderBottomColor: '#C3C3C3',
                    borderBottomWidth: 1,
                }}
                />
                <View style={{paddingTop: 10, paddingLeft: 10}}>
                    <Text style={{fontSize: 20, fontWeight: 'bold', fontFamily: 'System',paddingBottom: 10}}>My Sampler</Text>
                    <View style={{flex: 1, width: SCREEN_WIDTH-27, height: 200, justifyContent: 'center', alignItems: 'center'}}>
                        <Image style={{width: SCREEN_WIDTH-27, height: 200, resizeMode: 'stretch', borderRadius: 10}}source={require('./images/hp-banner.jpg')}/>
                    </View>
                    <Text style={{fontSize: 15, fontWeight: 'normal', fontFamily: 'System', paddingTop: 10, paddingBottom: 10}}>Discover new music from artist we think you'll like.</Text>
                </View>
                <View
                    style={{
                        paddingTop: 5,
                        paddingBottom: 5,
                        borderBottomColor: '#C3C3C3',
                        borderBottomWidth: 1,
                    }}
                />
                <View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={{paddingTop: 20, paddingBottom: 20, paddingLeft: 10, fontSize: 20, color: 'black', fontWeight: 'bold', fontFamily: 'System'}}>Recently Played</Text>
                        <Text style={{paddingTop: 20, paddingBottom: 20, paddingRight: 10, fontSize: 18, color: '#e3002d', fontFamily: 'System'}}>See all</Text>
                    </View>
                    <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={{height: 220}}
                    >
                    {
                        albums.map((album, index) => 
                            <View 
                            key={index}
                            style={{
                            marginLeft: 10,
                            marginBottom: 10,
                            height: 200,
                            width: SCREEN_WIDTH/2.4
                            }}>
                                <View
                                style={{height: SCREEN_WIDTH/2.4, width: SCREEN_WIDTH/2.4}}
                                >
                                    <Image style={{borderRadius: 10, resizeMode: 'cover', height: SCREEN_WIDTH/2.4, width: SCREEN_WIDTH/2.4}} source={album.imageurl}/>
                                </View>
                                <Text style={{fontSize: 14, marginTop: 4, fontWeight: 'bold'}} numberOfLines={1}>{album.albumName}</Text>
                                <Text style={{color: '#BBBBBB',fontSize: 12,lineHeight: 14,}} numberOfLines={1}>{album.artist}</Text>
                            </View>   
                        )
                    }
                    </ScrollView>
                </View>
                <View
                    style={{
                        paddingBottom: 5,
                        borderBottomColor: '#C3C3C3',
                        borderBottomWidth: 1,
                    }}
                />
                <View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={{paddingTop: 20, paddingBottom: 20, paddingLeft: 10, fontSize: 20, color: 'black', fontWeight: 'bold', fontFamily: 'System'}}>Artist Spotlights</Text>
                        <Text style={{paddingTop: 20, paddingBottom: 20, paddingRight: 10, fontSize: 18, color: '#e3002d', fontFamily: 'System'}}>See all</Text>
                    </View>
                    <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={{height: 240}}
                    >
                    {
                        artistSpotLights.map((album, index) => 
                            <View 
                            key={index}
                            style={{
                            marginLeft: 10,
                            marginBottom: 10,
                            height: 250,
                            width: SCREEN_WIDTH/2.4
                            }}>
                                <View
                                style={{height: SCREEN_WIDTH/2.4, width: SCREEN_WIDTH/2.4}}
                                >
                                    <Image style={{borderRadius: 10, resizeMode: 'cover', height: SCREEN_WIDTH/2.4, width: SCREEN_WIDTH/2.4}} source={album.imageurl}/>
                                </View>
                                <Text style={{fontSize: 14, marginTop: 4, fontWeight: 'bold'}} numberOfLines={1}>{album.albumName}</Text>
                                <Text style={{color: '#BBBBBB',fontSize: 12,lineHeight: 14,}} numberOfLines={1}>{album.artist}</Text>
                            </View>   
                        )
                    }
                    </ScrollView>
                </View>
                <View
                    style={{
                        paddingBottom: 5,
                        borderBottomColor: '#C3C3C3',
                        borderBottomWidth: 1,
                    }}
                />
                <View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={{paddingTop: 20, paddingBottom: 20, paddingLeft: 10, fontSize: 20, color: 'black', fontWeight: 'bold', fontFamily: 'System'}}>Artist Spotlights</Text>
                        <Text style={{paddingTop: 20, paddingBottom: 20, paddingRight: 10, fontSize: 18, color: '#e3002d', fontFamily: 'System'}}>See all</Text>
                    </View>
                    <View
                    style={{
                        flexDirection: 'row',
                        flex: 1,
                        flexWrap: 'wrap'
                    }}
                    >
                    {
                        genres.map((album, index) => 
                            <View 
                            key={index}
                            style={{
                            marginLeft: 10,
                            marginBottom: 10,
                            height: 150,
                            width: SCREEN_WIDTH/3.4
                            }}>
                                <View
                                style={{height: SCREEN_WIDTH/3.4, width: SCREEN_WIDTH/3.4}}
                                >
                                    <Image style={{borderRadius: 10, resizeMode: 'cover', height: SCREEN_WIDTH/3.4, width: SCREEN_WIDTH/3.4}} source={album.imageurl}/>
                                </View>
                                <Text style={{fontSize: 14, marginTop: 4, fontWeight: 'bold'}} numberOfLines={1}>{album.genre}</Text>
                            </View>   
                        )
                    }
                    </View>
                </View>
        </ScrollView>
      </Animated.View>
    )
  }
}