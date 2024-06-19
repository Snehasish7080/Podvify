import React, {FC} from 'react';
import {Image, Pressable, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {Colors} from '../utils/theme/Colors';
import {FontFamily} from '../utils/theme/FontFamily';
import {getFontSize} from '../utils/theme/FontScale';
import AppText from './AppText';

const FeedCard: FC = () => {
  return (
    <View style={styles.mainContainer}>
      <Pressable>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1607805074778-eeb1aafe3641?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          style={styles.cardImage}
        />
      </Pressable>
      <View style={styles.infoContainer}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1607805074778-eeb1aafe3641?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          style={styles.profileImage}
        />
        <View style={styles.videoInfoContainer}>
          <AppText style={styles.videoTitle}>
            India, Geopolitics, International Relations, US Visa & PM Modi - Dr
            S Jaishankar | FO176 Raj Shamani
          </AppText>
          <AppText style={styles.channelName}>Think School</AppText>
          <View style={styles.viewsContainer}>
            <AppText style={styles.views}>10K Views</AppText>
            <AppText style={styles.separator}>&bull;</AppText>
            <AppText style={styles.views}>10 min ago</AppText>
          </View>
        </View>
      </View>
    </View>
  );
};

export default FeedCard;

const styles = ScaledSheet.create({
  mainContainer: {
    width: '100%',
  },
  cardImage: {
    width: '100%',
    height: 168,
    borderRadius: 10,
  },
  infoContainer: {
    flexDirection: 'row',
    paddingHorizontal: 9,
    marginTop: 10,
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1.5,
    borderColor: Colors.white.main,
  },
  videoInfoContainer: {
    marginLeft: 16,
    flex: 1,
  },
  videoTitle: {
    fontSize: getFontSize(14),
    fontFamily: FontFamily.latoSemiBold,
  },
  channelName: {
    fontSize: getFontSize(14),
    fontFamily: FontFamily.latoSemiBold,
    color: Colors.grey.label,
    marginTop: 10,
  },
  viewsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  views: {
    fontSize: getFontSize(12),
    fontFamily: FontFamily.latoSemiBold,
    color: Colors.grey.label,
  },
  separator: {
    fontSize: getFontSize(12),
    fontFamily: FontFamily.latoSemiBold,
    color: Colors.grey.label,
    marginHorizontal: 5,
  },
});
