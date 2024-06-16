/*eslint-disable */

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginView from '../../Core/Authentication/Views/LoginView';
import SignupView from '../../Core/Authentication/Views/SingupView';
import VerificationView from '../../Core/Authentication/Views/VerificationView';
import {AuthenticatedRouteList} from './AuthenticatedTypes';

const Stack = createNativeStackNavigator<AuthenticatedRouteList>();

const Authenticated = () => {
  return (
    <Stack.Navigator initialRouteName="LoginView">
      <Stack.Screen
        name="LoginView"
        component={LoginView}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignupView"
        component={SignupView}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="VerificationView"
        component={VerificationView}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default Authenticated;
