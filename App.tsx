import React from 'react';
import { SafeAreaView, StyleSheet, TextInput, Text, TouchableOpacity } from 'react-native';
import ButtonComponent from './src/component/Button';

const Login = () => {
  

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={5} style={styles.title}>
        LOGIN
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
       />
      <TextInput
        style={styles.input}
        placeholder="Password"
      />
      <Text style={styles.forgetPassword}>Forgot Password?</Text>
      <ButtonComponent></ButtonComponent>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius:10,
    padding: 10,
    width: '80%', 
    alignSelf: 'center',
  },
  forgetPassword:{
    textDecorationLine:'underline',
    color:'blue',
    alignSelf: 'flex-start', 
    marginLeft: 40,

  }
});

export default Login;
