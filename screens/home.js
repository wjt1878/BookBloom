import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image 
          source={require('../assets/images/book-icon.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>Book Bloom</Text>
        <Text style={styles.subtitle}>Grow your reading garden</Text>
      </View>

      <View style={styles.messageContainer}>
        <Text style={styles.welcomeText}>
          Hi, Welcome!! my lovely book lovers
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={[styles.button, styles.loginButton]}
          onPress={() => navigation.navigate('login')}
        >
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.button, styles.signupButton]}
          onPress={() => navigation.navigate('signup')}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD1DC',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 15,
    resizeMode: 'contain'
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#5A5A5A',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#5A5A5A',
    fontStyle: 'italic',
  },
  messageContainer: {
    marginBottom: 40,
    paddingHorizontal: 30,
  },
  welcomeText: {
    fontSize: 18,
    color: '#5A5A5A',
    textAlign: 'center',
    lineHeight: 26,
  },
  buttonContainer: {
    width: '100%',
    maxWidth: 300,
  },
  button: {
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  loginButton: {
    backgroundColor: '#C1E1C1',
  },
  signupButton: {
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#C1E1C1',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#5A5A5A',
  },
});