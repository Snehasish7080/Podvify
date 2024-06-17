import React, {FC} from 'react';
import {Pressable, ScrollView, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {Colors} from '../../../../utils/theme/Colors';
import AppText from '../../../../Components/AppText';
import {SearchIcon} from '../../../../Components/SearchIcon';
import {FontFamily} from '../../../../utils/theme/FontFamily';

const FeedView: FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.mainContainer}>
        <Pressable style={styles.searchBox}>
          <AppText style={styles.searchTitle}>
            Looking For Your Favourite Topic?
          </AppText>
          <SearchIcon />
        </Pressable>
        <View style={styles.separatorContainer}>
          <View style={styles.separator} />
          <AppText style={styles.podOftheDay}>PODS OF THE DAY</AppText>
          <View style={styles.separator} />
        </View>
      </View>
    </ScrollView>
  );
};

export default FeedView;

const styles = ScaledSheet.create({
  scrollView: {flexGrow: 1, backgroundColor: Colors.secondary.main},
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.secondary.main,
    paddingHorizontal: '30@s',
    paddingTop: 60,
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
  },
  podOftheDay: {
    fontSize: 16,
    marginHorizontal: 4,
  },
});
