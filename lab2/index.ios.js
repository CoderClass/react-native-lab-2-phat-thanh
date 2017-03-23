/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import Login from './apps/login.js'

export default class lab2 extends Component {
  render() {
    return (
      <Login />
    );
  }
}

AppRegistry.registerComponent('lab2', () => lab2);
