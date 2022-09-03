import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { appRoutesPaths } from './app-utils';
import OnBoarding from '@screens/OnBoarding';

const { Screen, Navigator } =
  createNativeStackNavigator<typeof appRoutesPaths>();

const AppRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="onBoarding" component={OnBoarding} />
    </Navigator>
  );
};

export default AppRoutes;
