import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



import Profile from './Screens/Profile.js';


const Stack = createStackNavigator();

export default function routes() {

  return (
    <NavigationContainer>
      <Stack.Navigator>


        <Stack.Screen name='Profile' component={Profile} />

      </Stack.Navigator>

    </NavigationContainer>

  );
}
