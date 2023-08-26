import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import {useEffect} from 'react-native';

export default function App(){
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const submit = () =>{
      fetch('http://localhost:8080/insert', {
      method: 'POST',
      mode: 'cors',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      body: JSON.stringify({'name': user, 'expansion':pass})
      });
  }
  return(
    <SafeAreaView>
    <TextInput
      onChangeText={(e)=>setUser(e.target.value)}
      value={setPass}
    />
    <TextInput
      onChangeText={(e)=>setPass(e.target.value)}
      value={setUser}
    />
    <Button
      onPress={submit}
      title="submit"
      color="#841584"
    />
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
