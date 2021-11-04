import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { COLORS } from '../Component/Constant/Color';
import Login from '../Screen/Auth/Login';
import Register from '../Screen/Auth/Register';

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator 
    screenOptions={{
      cardStyle :{ backgroundColor: COLORS.button},
      gestureEnabled: true,
      backgroundColor:COLORS.button,
      gestureDirection: 'horizontal',
      ...TransitionPresets.SlideFromRightIOS,
    }}
    initialRouteName="Login" headerMode="none">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}
