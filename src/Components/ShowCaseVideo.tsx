import React, {FC} from 'react';
import {Dimensions, Image, Pressable, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {Colors} from '../utils/theme/Colors';
import AppText from './AppText';
import {getFontSize} from '../utils/theme/FontScale';
import {FontFamily} from '../utils/theme/FontFamily';
import {LikeIcon} from './LikeIcon';
import {UnlikeIcon} from './UnlikeIcon';
import {CommentIcon} from './CommentIcon';
import {ShareIcon} from './ShareIcon';

type ShowCaseVideoProps = {
  height: number;
};
const ShowCaseVideo: FC<ShowCaseVideoProps> = ({height}) => {
  return (
    <View style={[styles.mainContainer, {height}]}>
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1607805074778-eeb1aafe3641?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        }}
        style={styles.image}
      />
      <View style={styles.overlay}>
        <View style={styles.actionContainer}>
          <View style={styles.actionBox}>
            <LikeIcon />
            <AppText style={styles.count}>1.2K</AppText>
          </View>
          <View style={styles.actionBox}>
            <UnlikeIcon />
          </View>
          <View style={styles.actionBox}>
            <CommentIcon />
            <AppText style={styles.count}>1.2K</AppText>
          </View>
          <View style={styles.actionBox}>
            <ShareIcon />
            <AppText style={styles.count}>1.2K</AppText>
          </View>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.followContainer}>
            <View style={styles.profileContainer}>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1607805074778-eeb1aafe3641?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                }}
                style={styles.profileImage}
              />
              <AppText style={styles.useName}>Imansyah</AppText>
            </View>
            <Pressable style={styles.followBtn}>
              <AppText>Follow</AppText>
            </Pressable>
          </View>
          <AppText style={styles.desc}>
            India, Geopolitics, International Relations, US Visa & PM Modi - Dr
            S Jaishankar | FO176 Raj Shamani
          </AppText>
        </View>
      </View>
    </View>
  );
};

export default ShowCaseVideo;

const styles = ScaledSheet.create({
  mainContainer: {
    width: Dimensions.get('window').width,
  },
  image: {
    height: '100%',
    width: '100%',
  },
  overlay: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    paddingHorizontal: '20@s',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: Colors.white.main,
  },
  infoContainer: {
    paddingBottom: 20,
  },
  useName: {
    fontSize: getFontSize(16),
    fontFamily: FontFamily.latoSemiBold,
    marginLeft: 10,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  followBtn: {
    height: 30,
    width: 101,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: Colors.white.main,
    alignItems: 'center',
    justifyContent: 'center',
  },
  followContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  desc: {
    fontSize: getFontSize(14),
    fontFamily: FontFamily.latoSemiBold,
    marginTop: 20,
  },
  actionContainer: {
    height: 201,
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'flex-end',
    marginBottom: 30,
  },
  actionBox: {
    alignItems: 'center',
  },
  count: {
    fontFamily: FontFamily.latoSemiBold,
    fontSize: getFontSize(10),
    marginTop: 4,
  },
});
