import React, {FC} from 'react';
import {Dimensions, FlatList, Image, Pressable, View} from 'react-native';
import {Colors} from '../../../../utils/theme/Colors';
import {ScaledSheet} from 'react-native-size-matters';
import {FontFamily} from '../../../../utils/theme/FontFamily';
import {getFontSize} from '../../../../utils/theme/FontScale';
import AppText from '../../../../Components/AppText';
import {LikeIcon} from '../../../../Components/LikeIcon';
import {UnlikeIcon} from '../../../../Components/UnlikeIcon';
import {CommentIcon} from '../../../../Components/CommentIcon';
import {ShareIcon} from '../../../../Components/ShareIcon';
import {UpvoteIcon} from '../../../../Components/UpvoteIcon';
import {RupeeIcon} from '../../../../Components/RupeeIcon';
import VideoDisplayCard from '../../../../Components/VideoDisplayCard';

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
      <FlatList
        showsVerticalScrollIndicator={false}
        bounces={false}
        style={styles.flatlistContainer}
        ListHeaderComponent={
          <View>
            <View style={styles.videoInfoContainer}>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1607805074778-eeb1aafe3641?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                }}
                style={styles.profileImage}
              />
              <View style={styles.videoInfo}>
                <AppText style={styles.videoTitle}>
                  India, Geopolitics, International Relations, US Visa & PM Modi
                  - Dr S Jaishankar | FO176 Raj Shamani
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

            <View style={styles.supportActionContainer}>
              <Pressable style={styles.roundedBtn}>
                <View style={styles.iconContainer}>
                  <UpvoteIcon width={24} height={24} />
                  <AppText style={styles.upvote}>Upvote</AppText>
                </View>
                <AppText style={styles.upvoteCount}>1.2K</AppText>
              </Pressable>
              <Pressable style={styles.roundedBtn}>
                <RupeeIcon />
                <AppText style={styles.support}>Support</AppText>
              </Pressable>
              <Pressable style={styles.roundedBtn}>
                <AppText style={styles.follow}>Follow</AppText>
              </Pressable>
            </View>

            <AppText style={styles.title}>Pods from Think School</AppText>
          </View>
        }
        numColumns={2}
        contentContainerStyle={styles.scrollView}
        data={[1, 2, 3, 4, 5, 6]}
        keyExtractor={(_item, index) => index.toString()}
        renderItem={({}) => {
          return <VideoDisplayCard />;
        }}
        columnWrapperStyle={styles.flatlistColumn}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

export default VideoView;

const styles = ScaledSheet.create({
  scrollView: {
    flexGrow: 1,
    backgroundColor: Colors.secondary.main,
    paddingTop: 10,
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
  roundedBtn: {
    borderWidth: 1,
    borderColor: Colors.white.main,
    height: 40,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  upvote: {
    fontSize: getFontSize(10),
    fontFamily: FontFamily.latoMedium,
    marginLeft: 4,
  },
  upvoteCount: {
    fontSize: getFontSize(12),
    fontFamily: FontFamily.latoBold,
    marginLeft: 6,
    marginRight: 6,
  },
  support: {
    fontSize: getFontSize(12),
    fontFamily: FontFamily.latoMedium,
    marginLeft: 8,
    marginRight: 4,
  },
  follow: {
    fontSize: getFontSize(14),
    fontFamily: FontFamily.latoSemiBold,
    paddingHorizontal: 20,
  },
  supportActionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 40,
    paddingHorizontal: '25@s',
    paddingBottom: 30,
    borderBottomWidth: 1,
    borderColor: Colors.white.main,
  },
  separator: {
    height: 10,
  },
  flatlistColumn: {
    paddingHorizontal: '20@s',
    justifyContent: 'space-between',
  },
  title: {
    marginVertical: 30,
    fontFamily: FontFamily.latoSemiBold,
    fontSize: 20,
    marginHorizontal: '20@s',
  },
  flatlistContainer: {
    borderColor: 'red',
    marginTop: 20,
  },
});
