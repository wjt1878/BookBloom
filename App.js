import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import HomeScreen from './screens/Home';
import LoginScreen from './screens/login';
import SignUpScreen from './screens/signup';
import BookDetails from './screens/BookDetails';
import LoadingScreen from './screens/loading';
import BottomTabNavigator from './navigation/BottomTabNavigator';

const Stack = createNativeStackNavigator();

function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (initializing) setInitializing(false);
    });
    return unsubscribe;
  }, []);

  if (initializing) {
    return <LoadingScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{ headerShown: false }}
        initialRouteName={user ? "MainTabs" : "Welcome"}
      >
        {/* Always available screens */}
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="signup" component={SignUpScreen} />
        <Stack.Screen name="Welcome" component={HomeScreen} />

        {/* Logged-in screens */}
        <Stack.Screen name="MainTabs" component={BottomTabNavigator} />
        <Stack.Screen 
          name="BookDetails" 
          component={BookDetails}
          options={{
            headerShown: true,
            title: '',
            headerBackTitle: 'Back',
            headerStyle: { backgroundColor: '#FFD1DC' },
            headerTintColor: '#5A5A5A',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default registerRootComponent(App);