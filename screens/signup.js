import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function SignUpScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password');
      return;
    }

    navigation.navigate('MainTabs');
    Alert.alert('Success', 'Account created successfully!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.loginLink}
        onPress={() => navigation.navigate('login')}
      >
        <Text style={styles.linkText}>Already have an account? Log In</Text>
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
      marginBottom: 20,
      textAlign: 'center'
    },
    input: {
      height: 40,
      borderColor: '#C1E1C1',
      borderWidth: 1,
      marginBottom: 15,
      padding: 10,
      borderRadius: 5,
      backgroundColor: 'white'
    },
    button: {
      backgroundColor: '#C1E1C1',
      padding: 15,
      borderRadius: 5,
      alignItems: 'center'
    },
    buttonText: {
      fontWeight: 'bold',
      color: '#5A5A5A'
    }
  });