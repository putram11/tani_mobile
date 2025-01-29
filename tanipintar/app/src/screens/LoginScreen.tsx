// src/screens/LoginScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

const LoginScreen = ({ navigation }: any) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (!phoneNumber) {
      setError('Phone number is required!');
      return;
    }
    console.log('Logging in with:', phoneNumber);
    navigation.navigate('Home'); 
  };

  const handleRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.welcomeText}>Welcome</Text>
        <Text style={styles.backText}>Back!</Text>
      </View>

      <Text style={styles.subtitle}>Log In with registered phone number!</Text>

      <TextInput
        style={styles.input}
        placeholder="+62 Input your phone number"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />

      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.footerContainer}>
        <Text style={styles.dontHaveAccountText}>Don't have an account? </Text>
        <TouchableOpacity onPress={handleRegister}>
          <Text style={styles.registerText}>Register</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',  
    padding: 20,
    top: 80,
  },
  headerContainer: {
    flexDirection: 'column', 
    marginBottom: 20,
    justifyContent: 'flex-start',  
    alignItems: 'flex-start',  
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#166953',
  },
  backText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
  },
  subtitle: {
    fontSize: 16,
    color: '#888',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 12,
    fontSize: 16,
    borderWidth: 2,
    borderColor: '#166953',  
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginBottom: 10,
  },
  button: {
    width: '100%',
    backgroundColor: '#166953',  
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footerContainer: {
    flexDirection: 'row', 
    justifyContent: 'center',
    marginTop: 20,
  },
  dontHaveAccountText: {
    fontSize: 16,
    color: '#888',
  },
  registerText: {
    color: '#166953', 
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
