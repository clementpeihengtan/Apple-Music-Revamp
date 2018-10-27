import React from 'react';
import {
    Text,
    View,
    Animated,
    Image,
} from 'react-native';
import MusicPlayer from '../../components/MusicPlayer';

export default class Browse extends React.Component {
    render() {
        return (
            <Animated.View style={{flex: 1,justifyContent: 'center', backgroundColor: 'white'}}>
                <MusicPlayer/>
            </Animated.View>
        )
    }
}