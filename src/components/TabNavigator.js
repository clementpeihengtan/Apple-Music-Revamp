import React, {Component} from 'react';
import {Text} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation';
import {Ionicons} from '@expo/vector-icons';

import Library from '../screens/Library/Library';
import ForYouStack from '../screens/ForYou/index';
import Browse from '../screens/Browse/Browse';
import Watch from '../screens/Watch/Watch';
import Search from '../screens/Search/Search';

const MainScreenNavigator = createBottomTabNavigator(
    {
        Library: {
            screen: Library
        },
        ForYou: {
            screen: ForYouStack, 
            navigationOptions: {
                tabBarLabel: 'For You'
            }
        },
        Browse: {
            screen: Browse
        },
        Watch: {
            screen: Watch
        },
        Search: {
            screen: Search
        }
    },{
        navigationOptions: ({navigation}) => ({
            tabBarIcon: ({focused, horizontal, tintColor}) => {
                const {routeName} = navigation.state
                let iconName
                let tabName
                if(routeName === 'Library') {
                    iconName = 'ios-folder-open'
                    tabName = 'Library'
                } 
                else if (routeName === 'ForYou') {
                   iconName = 'ios-heart'
                }
                else if(routeName === 'Browse') {
                    iconName = 'ios-musical-notes'
                } 
                else if (routeName === 'Watch') {
                   iconName = 'logo-youtube'
                }
                else if (routeName === 'Search') {
                   iconName = 'ios-search'
                }
                return <Ionicons name={iconName} size={horizontal? 20 : 25} color={tintColor}/>;
            },
            tabBarOptions: {
                activeTintColor: '#ff2d55',
                inactiveTintColor: 'grey'
            }
        })
    }
)

export default MainScreenNavigator;