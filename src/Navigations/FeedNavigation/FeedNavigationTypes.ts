import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type FeedNavigationRouteList = {
  FeedView: undefined;
  VideoView: undefined;
};

export type FeedNavigationProp<T extends keyof FeedNavigationRouteList> =
  NativeStackScreenProps<FeedNavigationRouteList, T>;

export type FeedNavProps<T extends keyof FeedNavigationRouteList> =
  NativeStackScreenProps<FeedNavigationRouteList, T>;
