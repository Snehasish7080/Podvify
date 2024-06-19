/*eslint-disable */

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {FeedNavigationRouteList} from './FeedNavigationTypes';
import FeedView from '../../Core/Home/FeedScreen/Views/FeedView';
import VideoView from '../../Core/Home/FeedScreen/Views/VideoView';

const Stack = createNativeStackNavigator<FeedNavigationRouteList>();

const FeedNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="FeedView">
      <Stack.Screen
        name="FeedView"
        component={FeedView}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="VideoView"
        component={VideoView}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default FeedNavigation;
