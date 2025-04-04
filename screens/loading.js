import { View, ActivityIndicator, StyleSheet } from 'react-native';
import React from 'react';

export default function LoadingScreen() {
  return (
    <View style={styles.container}>
      <ActivityIndicator 
        size="large" 
        color="#5A5A5A" 
        style={styles.spinner}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFD1DC',
  },
  spinner: {
    transform: [{ scale: 1.5 }] // Makes spinner 50% larger
  }
});