/*eslint-disable */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {HomeNavigationRouteList} from './HomeNavigationTypes';
import ProfileView from '../../Core/Home/ProfileScreen/Views/ProfileView';
import {ActiveFeedIcon} from '../../Components/ActiveFeedIcon';
import {FeedIcon} from '../../Components/FeedIcon';
import {ActiveProfileIcon} from '../../Components/ActiveProfileIcon';
import {ProfileIcon} from '../../Components/ProfileIcon';
import {Colors} from '../../utils/theme/Colors';
import FeedNavigation from '../FeedNavigation/FeedNavigation';

const Tab = createBottomTabNavigator<HomeNavigationRouteList>();
const HomeNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: Colors.secondary.main,
          borderColor: Colors.white.main,
          height: 60,
        },
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="FeedNavigation"
        component={FeedNavigation}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? <ActiveFeedIcon /> : <FeedIcon />;
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="ProfileView"
        component={ProfileView}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return focused ? <ActiveProfileIcon /> : <ProfileIcon />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeNavigation;
