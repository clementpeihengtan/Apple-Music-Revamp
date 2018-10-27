import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation';
import Search from './Search';

export default(SearchStack = createStackNavigator(
    {
        SearchScreen:{screen: Search}
    },{

    }));