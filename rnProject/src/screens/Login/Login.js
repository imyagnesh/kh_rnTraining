import React, {useState, useRef, useContext} from 'react';
import {
  Text,
  SafeAreaView,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {Formik} from 'formik';
import TextInput from '../../components/TextInput/TextInput';
import Button from '../../components/Button/Button';
// import {ThemeContext} from '../../context/themeContext';

const Login = ({navigation}) => {
  const passwordRef = useRef();
  // const {theme, setTheme} = useContext(ThemeContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  //   let username = '';
  //   let password = '';

  const onChangeUsername = text => {
    // username = text;
    setUsername(text);
  };

  const onChangePassword = text => {
    // password = text;
    setPassword(text);
  };

  const onLogin = () => {
    alert(`Username: ${username} Password: ${password}`);
    // password = '';
    // username = '';
    setUsername('');
    setPassword('');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAvoidingView style={{flex: 1}} behavior="padding" enabled>
        {/* <Consumer>{value => <Text>{value.theme}</Text>}</Consumer> */}
        {/* <Text>{theme}</Text> */}
        {/* <Button
          title="Register"
          textStyle={{color: 'red'}}
          buttonStyle={{
            backgroundColor: 'yellow',
          }}
          onPress={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        /> */}
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={{flex: 1, justifyContent: 'flex-end'}}>
            <Text style={{textAlign: 'center'}}>Login</Text>
            {/* <TextInput style={{borderColor: 'red'}} /> */}
            {/* <TextInput style={{borderRadius: 10}} /> */}
            {/* <TextInput disable={true} /> */}
            <TextInput
              placeholder="Username"
              value={username}
              onChangeText={onChangeUsername}
              returnKeyType="next"
              onSubmitEditing={() => {
                passwordRef.current.focus();
              }}
            />
            <TextInput
              passRef={passwordRef}
              placeholder="Password"
              secureTextEntry={true}
              returnKeyType="done"
              value={password}
              onChangeText={onChangePassword}
              onSubmitEditing={onLogin}
            />
            <Button title="Login" onPress={onLogin} />
            <Button
              title="Register"
              textStyle={{color: 'red'}}
              buttonStyle={{
                backgroundColor: 'yellow',
              }}
              onPress={() => {
                navigation.navigate('Register');
              }}
            />
            {/* <TouchableHighlight
        onPress={() => {}}
        style={{
          margin: 10,
        }}
        underlayColor="rgba(0,255,255, 0.9)">
        <View
          style={{
            height: 40,
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 4,
            backgroundColor: 'blue',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: '#fff'}}>Login</Text>
        </View>
      </TouchableHighlight>
      <TouchableOpacity onPress={() => {}} underlayColor="red">
        <View
          style={{
            height: 40,
            paddingHorizontal: 20,
            paddingVertical: 10,
            margin: 10,
            borderRadius: 4,
            backgroundColor: 'blue',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: '#fff'}}>Login</Text>
        </View>
      </TouchableOpacity>
      <TouchableWithoutFeedback>
        <View
          style={{
            height: 40,
            paddingHorizontal: 20,
            paddingVertical: 10,
            margin: 10,
            borderRadius: 4,
            backgroundColor: 'blue',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: '#fff'}}>Login</Text>
        </View>
      </TouchableWithoutFeedback> */}
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;
