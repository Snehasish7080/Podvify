import React, {FC} from 'react';
import {Pressable, ScrollView, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {Colors} from '../../../../utils/theme/Colors';
import AppText from '../../../../Components/AppText';
import {SearchIcon} from '../../../../Components/SearchIcon';
import {FontFamily} from '../../../../utils/theme/FontFamily';
import HighlightCard from '../../../../Components/HighlightCard';
import {getFontSize} from '../../../../utils/theme/FontScale';
import ShowCaseCard from '../../../../Components/ShowCaseCard';
import FeedCard from '../../../../Components/FeedCard';
import useFeedViewModel from '../ViewModels/FeedViewModel';

const FeedView: FC = () => {
  const {onPressShowCaseCard, onPressFeedCard} = useFeedViewModel();
  return (
    <ScrollView
      contentContainerStyle={styles.scrollView}
      scrollEventThrottle={16}
      decelerationRate={'fast'}
      showsVerticalScrollIndicator={false}
      bounces={false}>
      <View style={styles.mainContainer}>
        <View style={styles.serachboxContainer}>
          <Pressable style={styles.searchBox}>
            <AppText style={styles.searchTitle}>
              Looking For Your Favourite Topic?
            </AppText>
            <SearchIcon />
          </Pressable>
        </View>
        <View style={styles.separatorContainer}>
          <View style={styles.separator} />
          <AppText style={styles.podOftheDay}>PODS OF THE DAY</AppText>
          <View style={styles.separator} />
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalScrollView}>
          <HighlightCard />
          <View style={styles.cardSeparator} />
          <HighlightCard />
          <View style={styles.cardSeparator} />
          <HighlightCard />
        </ScrollView>
        <View style={styles.showCaseTitleContainer}>
          <AppText style={styles.showcaseTitle}>Showcases</AppText>
          <AppText style={styles.seeAll}>See All</AppText>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalScrollView}>
          <ShowCaseCard onPress={onPressShowCaseCard} />
          <View style={styles.cardSeparator} />
          <ShowCaseCard onPress={onPressShowCaseCard} />
          <View style={styles.cardSeparator} />
          <ShowCaseCard onPress={onPressShowCaseCard} />
        </ScrollView>
        <AppText style={styles.followingTitle}>Followings</AppText>
        <View style={styles.followingSeparator} />
        <View style={styles.feedBox}>
          <FeedCard onPress={onPressFeedCard} />
        </View>
        <View style={styles.feedBox}>
          <FeedCard onPress={onPressFeedCard} />
        </View>
        <View style={styles.feedBox}>
          <FeedCard onPress={onPressFeedCard} />
        </View>
      </View>
    </ScrollView>
  );
};

export default FeedView;

const styles = ScaledSheet.create({
  scrollView: {
    flexGrow: 1,
    backgroundColor: Colors.secondary.main,
    paddingTop: 60,
    paddingBottom: 100,
  },
  mainContainer: {
    alignItems: 'center',
  },
  serachboxContainer: {
    paddingHorizontal: '30@s',
  },
  searchBox: {
    height: 60,
    width: '100%',
    backgroundColor: Colors.primary.main,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 30,
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  searchTitle: {
    fontFamily: FontFamily.latoMedium,
  },
  separator: {
    height: 1,
    flex: 1,
    backgroundColor: Colors.white.main,
  },
  separatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
    marginHorizontal: '30@s',
    marginBottom: 32,
  },
  podOftheDay: {
    fontSize: 16,
    marginHorizontal: 4,
  },
  horizontalScrollView: {
    flexGrow: 1,
    paddingHorizontal: '30@s',
  },
  cardSeparator: {
    width: 15,
  },
  showCaseTitleContainer: {
    width: '100%',
    paddingHorizontal: '30@s',
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 34,
  },
  showcaseTitle: {
    fontSize: getFontSize(20),
    fontFamily: FontFamily.latoSemiBold,
  },
  seeAll: {
    fontSize: getFontSize(12),
  },
  followingTitle: {
    fontFamily: FontFamily.latoBold,
    fontSize: getFontSize(25),
    marginTop: 40,
    marginBottom: 10,
  },
  followingSeparator: {
    width: 164,
    height: 1,
    backgroundColor: Colors.white.main,
    marginBottom: 40,
  },
  feedBox: {
    paddingHorizontal: '30@s',
    width: '100%',
    marginBottom: 30,
  },
});
