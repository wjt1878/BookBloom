import React, { useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function ProfileScreen() {
  // State for profile picture
  const [profilePic, setProfilePic] = useState(null);

  // User data with empty fields
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    bio: '',
    gender: '',
  });

  // Function to pick an image from the gallery
  const pickImage = async () => {
    try {
      // Request permissions first
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission required', 'We need access to your photos to set a profile picture');
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1], // Square image
        quality: 0.8,
      });

      if (!result.canceled) {
        setProfilePic(result.assets[0].uri);
      }
    } catch (error) {
      console.error('Error picking image:', error);
      Alert.alert('Error', 'Failed to pick an image');
    }
  };

  const handleSaveProfile = () => {
    Alert.alert('Success', 'Profile saved successfully!');
    // Here you would typically send the data to your backend
  };

  return (
    <View style={styles.container}>
      {/* Profile Picture Section */}
      <TouchableOpacity onPress={pickImage} style={styles.profileImageContainer}>
        <Image 
          source={profilePic ? { uri: profilePic } : require('../assets/images/empty-profile.png')}
          style={styles.profileImage} 
        />
        <Text style={styles.uploadText}>{profilePic ? 'Change photo' : 'Tap to add profile picture'}</Text>
      </TouchableOpacity>

      {/* User Details */}
      <View style={styles.detailsCard}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>First Name</Text>
          <TextInput 
            style={styles.input} 
            value={user.firstName} 
            onChangeText={(text) => setUser({...user, firstName: text})}
            placeholder="enter ur first name"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Last Name</Text>
          <TextInput 
            style={styles.input} 
            value={user.lastName} 
            onChangeText={(text) => setUser({...user, lastName: text})}
            placeholder="enter ur last name"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Bio</Text>
          <TextInput 
            style={[styles.input, styles.bioInput]} 
            value={user.bio} 
            multiline 
            numberOfLines={3}
            onChangeText={(text) => setUser({...user, bio: text})}
            placeholder="Tell us about yourself"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Gender</Text>
          <TextInput 
            style={styles.input} 
            value={user.gender} 
            onChangeText={(text) => setUser({...user, gender: text})}
            placeholder="ur gender"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput 
            style={styles.input} 
            value={user.email} 
            onChangeText={(text) => setUser({...user, email: text})}
            placeholder="ur email address"
            keyboardType="email-address"
          />
        </View>
      </View>

      {/* Save Button */}
      <TouchableOpacity 
        style={styles.saveButton} 
        onPress={handleSaveProfile}
        disabled={!user.firstName || !user.lastName} // Optional: disable if required fields empty
      >
        <Text style={styles.saveButtonText}>Save Profile</Text>
      </TouchableOpacity>
    </View>
  );
}


// Styles for layout
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFD1DC',
  },
  profileImageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 2,
    borderColor: '#88C9A1',
  },
  uploadText: {
    marginTop: 10,
    fontSize: 14,
    color: '#5A5A5A',
    fontWeight: '500',
  },
  detailsCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    color: '#5A5A5A',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#F8F8F8',
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
    color: '#333',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  bioInput: {
    height: 80,
    textAlignVertical: 'top',
  },
  disabledInput: {
    backgroundColor: '#F0F0F0',
    color: '#888',
  },
  saveButton: {
    backgroundColor: '#88C9A1',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  saveButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});