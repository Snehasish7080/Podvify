import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

export type HomeNavigationRouteList = {
  FeedView: undefined;
  ProfileView: undefined;
};
export type HomeNavigationProp<T extends keyof HomeNavigationRouteList> =
  BottomTabScreenProps<HomeNavigationRouteList, T>;

export type HomeNavProps<T extends keyof HomeNavigationRouteList> =
  BottomTabScreenProps<HomeNavigationRouteList, T>;
