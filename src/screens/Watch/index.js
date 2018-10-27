import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation';
import Watch from './Watch';

export default(WatchStack = createStackNavigator(
    {
        WatchScreen:{screen: Watch}
    },{

    }));