import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { COLORS } from '../Component/Constant/Color';
import Home from '../Screen/Home';
import AllUser from '../Screen/User/AllUser';
import SingleChat from '../Screen/Home/SingleChat';
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
    initialRouteName="Home" headerMode="none">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AllUser" component={AllUser} />
        <Stack.Screen name="SingleChat" component={SingleChat} />
    </Stack.Navigator>
  );
}
