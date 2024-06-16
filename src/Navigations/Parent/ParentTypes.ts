import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type ParentRouteList = {
  Authenticated: undefined;
  Home: undefined;
};
export type ParentNavigationProp<T extends keyof ParentRouteList> =
  NativeStackScreenProps<ParentRouteList, T>;

export type ParentNavProps<T extends keyof ParentRouteList> =
  NativeStackScreenProps<ParentRouteList, T>;
