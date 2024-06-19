import React, {FC} from 'react';
import {Dimensions, Image, Pressable, ScrollView, View} from 'react-native';
import {Colors} from '../../../../utils/theme/Colors';
import {ScaledSheet} from 'react-native-size-matters';
import {FontFamily} from '../../../../utils/theme/FontFamily';
import {getFontSize} from '../../../../utils/theme/FontScale';
import AppText from '../../../../Components/AppText';
import {LikeIcon} from '../../../../Components/LikeIcon';
import {UnlikeIcon} from '../../../../Components/UnlikeIcon';
import {CommentIcon} from '../../../../Components/CommentIcon';
import {ShareIcon} from '../../../../Components/ShareIcon';

const VideoView: FC = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.videoContainer}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1607805074778-eeb1aafe3641?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          style={styles.poster}
        />
      </View>
      <View style={styles.videoInfoContainer}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1607805074778-eeb1aafe3641?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          style={styles.profileImage}
        />
        <View style={styles.videoInfo}>
          <AppText style={styles.videoTitle}>
            India, Geopolitics, International Relations, US Visa & PM Modi - Dr
            S Jaishankar | FO176 Raj Shamani
          </AppText>
          <AppText style={styles.channelName}>Think School</AppText>
        </View>
      </View>
      <View style={styles.actionContainer}>
        <View style={styles.actionBtn}>
          <LikeIcon />
          <AppText style={styles.actionLable}>1.2K</AppText>
        </View>
        <View style={styles.actionBtn}>
          <UnlikeIcon />
        </View>
        <View style={styles.actionBtn}>
          <CommentIcon />
          <AppText style={styles.actionLable}>1.2K</AppText>
        </View>
        <View style={styles.actionBtn}>
          <ShareIcon />
          <AppText style={styles.actionLable}>1.2K</AppText>
        </View>
      </View>
    </View>
  );
};

export default VideoView;

const styles = ScaledSheet.create({
  scrollView: {
    flexGrow: 1,
    backgroundColor: Colors.secondary.main,
    paddingTop: 60,
    paddingBottom: 100,
  },
  mainContainer: {
    backgroundColor: Colors.secondary.main,
    flex: 1,
    paddingTop: 20,
  },
  videoContainer: {
    width: Dimensions.get('window').width,
    height: (Dimensions.get('window').width * 9) / 16,
  },
  poster: {
    width: '100%',
    height: '100%',
  },
  videoInfoContainer: {
    paddingHorizontal: '30@s',
    flexDirection: 'row',
    paddingTop: 12,
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1.5,
    borderColor: Colors.white.main,
  },
  videoTitle: {
    fontSize: getFontSize(14),
    fontFamily: FontFamily.latoSemiBold,
  },
  videoInfo: {
    flex: 1,
    marginLeft: 16,
  },
  channelName: {
    fontSize: getFontSize(14),
    color: Colors.grey.label,
    marginTop: 6,
  },
  actionContainer: {
    flexDirection: 'row',
    paddingHorizontal: '30@s',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  actionLable: {
    fontSize: getFontSize(10),
    fontFamily: FontFamily.latoSemiBold,
    marginLeft: 8,
  },
  actionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
