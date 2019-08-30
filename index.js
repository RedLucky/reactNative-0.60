/**
 * @format
 */

import {AppRegistry, Text, View} from 'react-native';
import React from 'react';
// import App from './App';
import {name as appName} from './app.json';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

const App = () =>( 
  <View>
    <Header headerText = {'Albums'}/>
    <AlbumList />
  </View>
);

AppRegistry.registerComponent(appName, () => App);
