import React from 'react';
import {
    Text,
    View,
    Image,
    ScrollView,
    Dimensions,
    StyleSheet
} from 'react-native';
import {
    List, 
    ListItem
} from 'native-base';
import { Ionicons } from '@expo/vector-icons';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

export default class Library extends React.Component {
    render() {
        return (
            <View style={{flex: 1}}>
            <ScrollView
            showsVerticalScrollIndicator = {false}
            >
                <List>
                    <ListItem>
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style={{paddingTop: 60, paddingBottom: 10, fontSize: 30, color: 'black', fontWeight: 'bold', fontFamily: 'System'}}>Library</Text>
                            <Text style={{paddingTop: 70, paddingBottom: 10, fontSize: 18, color: '#e3002d', fontFamily: 'System'}}>Edit</Text>
                        </View>
                    </ListItem>
                    <ListItem>
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style={{paddingTop: 5, paddingBottom: 5, fontSize: 20, color: '#e3002d', fontFamily: 'System'}}>Playlists</Text>
                            <Ionicons name="ios-arrow-forward" color={'#e3002d'} size={20} style={{paddingTop: 5, paddingBottom: 5}}/>
                        </View>
                    </ListItem>
                    <ListItem>
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style={{paddingTop: 5, paddingBottom: 5, fontSize: 20, color: '#e3002d', fontFamily: 'System'}}>Artists</Text>
                            <Ionicons name="ios-arrow-forward" color={'#e3002d'} size={20} style={{paddingTop: 5, paddingBottom: 5}}/>
                        </View>
                    </ListItem>
                    <ListItem>
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style={{paddingTop: 5, paddingBottom: 5, fontSize: 20, color: '#e3002d', fontFamily: 'System'}}>Albums</Text>
                            <Ionicons name="ios-arrow-forward" color={'#e3002d'} size={20} style={{paddingTop: 5, paddingBottom: 5}}/>
                        </View>
                    </ListItem>
                    <ListItem>
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style={{paddingTop: 5, paddingBottom: 5, fontSize: 20, color: '#e3002d', fontFamily: 'System'}}>Song</Text>
                            <Ionicons name="ios-arrow-forward" color={'#e3002d'} size={20} style={{paddingTop: 5, paddingBottom: 5}}/>
                        </View>
                    </ListItem>
                </List>
                <View>
                    <Text style={{paddingTop: 20, paddingBottom: 20, paddingLeft: 18, fontSize: 25, color: 'black', fontWeight: 'bold', fontFamily: 'System'}}>Recently Added</Text>
                    <View
                    style={{
                        flexDirection: 'row',
                        flex: 1,
                        flexWrap: 'wrap',
                        paddingLeft: 10
                    }}
                    >
                        <View style={{
                            marginLeft: 10,
                            marginBottom: 10,
                            height: 250,
                            width: SCREEN_WIDTH/2.2
                        }}>
                            <View
                            style={{height: SCREEN_WIDTH/2.2, width: SCREEN_WIDTH/2.2}}
                            >
                                <Image style={{borderRadius: 10, resizeMode: 'cover', height: SCREEN_WIDTH/2.2, width: SCREEN_WIDTH/2.2}} source={require('./images/beamiller_cover.jpg')}/>
                            </View>
                            <Text style={{fontSize: 14, marginTop: 4, fontWeight: 'bold'}} numberOfLines={1}>Not An Apology</Text>
                            <Text style={{color: '#BBBBBB',fontSize: 12,lineHeight: 14,}} numberOfLines={1}>Bea Miller</Text>
                        </View>
                        <View style={{
                            marginLeft: 10,
                            marginBottom: 10,
                            height: 250,
                            width: SCREEN_WIDTH/2.2,
                        }}>
                            <View
                            style={{height: SCREEN_WIDTH/2.2, width: SCREEN_WIDTH/2.2}}
                            >
                                <Image style={{borderRadius: 10, resizeMode: 'cover', height: SCREEN_WIDTH/2.2, width: SCREEN_WIDTH/2.2}} source={require('./images/charlieputh_cover.jpg')}/>
                            </View>
                            <Text style={{fontSize: 14, marginTop: 4, fontWeight: 'bold'}} numberOfLines={1}>Nine Track Mind</Text>
                            <Text style={{color: '#BBBBBB',fontSize: 12,lineHeight: 14,}} numberOfLines={1}>Charlie Puth</Text>
                        </View>
                        <View style={{
                            marginLeft: 10,
                            marginBottom: 10,
                            height: 250,
                            width: SCREEN_WIDTH/2.2,
                        }}>
                            <View
                            style={{height: SCREEN_WIDTH/2.2, width: SCREEN_WIDTH/2.2}}
                            >
                                <Image style={{borderRadius: 10, resizeMode: 'cover', height: SCREEN_WIDTH/2.2, width: SCREEN_WIDTH/2.2}} source={require('./images/camila_cover.jpg')}/>
                            </View>
                            <Text style={{fontSize: 14, marginTop: 4, fontWeight: 'bold'}} numberOfLines={1}>Camila</Text>
                            <Text style={{color: '#BBBBBB',fontSize: 12,lineHeight: 14,}} numberOfLines={1}>Camila Cabello</Text>
                        </View>
                        <View style={{
                            marginLeft: 10,
                            marginBottom: 10,
                            height: 250,
                            width: SCREEN_WIDTH/2.2,
                        }}>
                            <View
                            style={{height: SCREEN_WIDTH/2.2, width: SCREEN_WIDTH/2.2}}
                            >
                                <Image style={{borderRadius: 10, resizeMode: 'cover', height: SCREEN_WIDTH/2.2, width: SCREEN_WIDTH/2.2}} source={require('./images/coldplay_cover.jpg')}/>
                            </View>
                            <Text style={{fontSize: 14, marginTop: 4, fontWeight: 'bold'}} numberOfLines={1}>A Head Full of Dreams</Text>
                            <Text style={{color: '#BBBBBB',fontSize: 12,lineHeight: 14,}} numberOfLines={1}>ColdPlay</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
            </View>
        )
    }
}