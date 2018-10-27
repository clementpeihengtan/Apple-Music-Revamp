import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation';
import Browse from './Browse';

export default(BrowseStack = createStackNavigator(
    {
        BrowseScreen:{screen: Browse}
    },{

    }));