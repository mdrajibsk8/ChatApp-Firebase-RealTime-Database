import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import AppStack from './app/Navigation/AppStack';
import AuthStack from './app/Navigation/AuthStack';
import { COLORS } from './app/Component/Constant/Color';
import Navigation from './app/Service/Navigation';

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer ref={r => Navigation.setTopLevelNavigator(r)}>
        <Stack.Navigator
          headerMode="none"
          detachInactiveScreens={false}
          initialRouteName="Auth"
          screenOptions={{
            cardStyle :{ backgroundColor: COLORS.white},
            gestureEnabled: true,
            backgroundColor:COLORS.button,
            gestureDirection: 'horizontal',
            ...TransitionPresets.SlideFromRightIOS,
          }}>
          <Stack.Screen name="Auth" component={AuthStack} />
          <Stack.Screen name="AppStack" component={AppStack} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
