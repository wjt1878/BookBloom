import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password');
      return;
    }

    navigation.navigate('MainTabs');
    Alert.alert('Success', 'Logged in successfully!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BookBloom Login</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.signupLink}
        onPress={() => navigation.navigate('signup')}
      >
        <Text style={styles.linkText}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#FFD1DC'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#5A5A5A'
  },
  input: {
    height: 50,
    borderColor: '#C1E1C1',
    borderWidth: 1,
    marginBottom: 15,
    padding: 15,
    borderRadius: 5,
    backgroundColor: 'white'
  },
  loginButton: {
    backgroundColor: '#C1E1C1',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10
  },
  buttonText: {
    color: '#5A5A5A',
    fontWeight: 'bold',
    fontSize: 16
  },
  signupLink: {
    marginTop: 20,
    alignItems: 'center'
  },
  linkText: {
    color: '#5A5A5A',
    textDecorationLine: 'underline'
  }
});