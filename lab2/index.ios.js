/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import {Provider} from 'react-redux'
import store from './apps/store.js'

import Login from './apps/components/login.js'

export default class lab2 extends Component {
  render() {
    return (
      <Provider store={store}>
        <Login />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('lab2', () => lab2);
