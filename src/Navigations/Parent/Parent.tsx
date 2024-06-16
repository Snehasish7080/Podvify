import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ParentRouteList} from './ParentTypes';
import Authenticated from '../Authenticated/Authenticated';

const Stack = createNativeStackNavigator<ParentRouteList>();

const ParentNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={'Authenticated'}>
      <Stack.Screen
        name="Authenticated"
        component={Authenticated}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default ParentNavigation;
