/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';\

import code from 'react-native-azteccode-qrcode-generator';
Aztec=code.Aztec

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';

export default class AztecPOC extends Component {

    state = {
        text: 'Default Example Text',
    };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Aztec Code Generator
        </Text>
        <Text style={styles.instructions}>
          Modify the text below to update the Aztec code.
        </Text>
        <TextInput
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          style={{width: 300,}} />
        <Aztec
              value={this.state.text}
              size={300}
              bgColor='black'
              fgColor='#F5FCFF'/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AztecPOC', () => AztecPOC);
