import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation';
import Home from './Library';

export default(LibraryStack = createStackNavigator(
    {
        LibraryScreen:{screen: Library}
    },{

    }));