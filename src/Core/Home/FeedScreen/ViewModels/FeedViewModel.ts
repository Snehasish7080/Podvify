import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {FeedNavigationRouteList} from '../../../../Navigations/FeedNavigation/FeedNavigationTypes';

const useFeedViewModel = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<FeedNavigationRouteList>>();

  const onPressShowCaseCard = () => {
    navigation.navigate('ShowCaseVideoView');
  };

  const onPressFeedCard = () => {
    navigation.navigate('VideoView');
  };
  return {onPressShowCaseCard, onPressFeedCard};
};

export default useFeedViewModel;
