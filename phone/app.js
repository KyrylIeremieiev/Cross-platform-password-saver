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
        placeholder='Username'
      </TextInput>
      <TextInput>
        id={
            'input2'
        }
        style={{
            width: '80px',
            height: '20px',
        }}
        placeholder='Password'
      </TextInput>
      <Button
        onPress={() => {
            Username = document.getElementById("input1");
            Pass = document.getElementById("input2");
            fetch("localhost:8080/submit/username",
                {
                    headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                    },
                    method: "POST",
                    body: JSON.stringify({username: Username, pass: Pass})
                })
                .then(function(res){ console.log(res) })
                .catch(function(res){ console.log(res) })
        }}
        title="submit"
        />
    </View>
  );
};
export default HelloWorldApp;