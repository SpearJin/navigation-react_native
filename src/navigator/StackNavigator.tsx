import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Page1Screen from '../screens/Page1Screen';
import Page2Screen from '../screens/Page2Screen';
import Page3Screen from '../screens/Page3Screen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PersonScreen from '../screens/PersonScreen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          elevation: 0,
        },
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen
        name="Page1Screen"
        options={{title: 'page1'}}
        component={Page1Screen}
      />
      <Stack.Screen
        name="Page2Screen"
        options={{title: 'page2'}}
        component={Page2Screen}
      />
      <Stack.Screen
        name="Page3Screen"
        options={{title: 'page3'}}
        component={Page3Screen}
      />
      <Stack.Screen
        name="PersonScreen"
        options={{title: 'PersonScreen'}}
        component={PersonScreen}
      />
    </Stack.Navigator>
  );
};
