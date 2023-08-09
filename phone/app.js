import React from 'react';
import {Text, View, TextInput} from 'react-native';

const HelloWorldApp = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Hello, world!</Text>
      <TextInput>
        id={
            'input1'
        }
        style={{
            width: '80px',
            height: '20px',
        }}
      </TextInput>
    </View>
  );
};
export default HelloWorldApp;