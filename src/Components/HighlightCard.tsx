import React, {FC} from 'react';
import {Image, ImageBackground, Pressable, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {Colors} from '../utils/theme/Colors';
import AppText from './AppText';
import {getFontSize} from '../utils/theme/FontScale';
import {FontFamily} from '../utils/theme/FontFamily';
import {UpvoteIcon} from './UpvoteIcon';

const HighlightCard: FC = () => {
  return (
    <View style={styles.mainContainer}>
      <Pressable>
        <ImageBackground
          source={{
            uri: 'https://images.unsplash.com/photo-1607805074778-eeb1aafe3641?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          imageStyle={styles.cardImage}
          style={styles.container}>
          <View style={styles.profileImageContainer}>
            <Image
              source={{
                uri: 'https://images.unsplash.com/profile-1607660962456-efa7c842f1e0image?bg=fff&crop=faces&dpr=2&h=32&w=32&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
              }}
              style={styles.profileImage}
            />
            <AppText style={styles.userName}>Imansyah</AppText>
          </View>
        </ImageBackground>
      </Pressable>
      <View style={styles.upvoteContainer}>
        <UpvoteIcon />
        <AppText style={styles.upvote}>2.4K Upvotes</AppText>
      </View>
    </View>
  );
};

export default HighlightCard;

const styles = ScaledSheet.create({
  mainContainer: {
    alignItems: 'center',
  },
  cardImage: {
    width: 156,
    height: 222,
    borderRadius: 20,
  },
  profileImage: {
    width: 30,
    height: 30,
    borderWidth: 1.5,
    borderRadius: 15,
    borderColor: Colors.white.main,
  },
  userName: {
    fontSize: getFontSize(12),
    fontFamily: FontFamily.latoSemiBold,
    marginLeft: 6,
  },
  profileImageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  upvote: {
    fontSize: getFontSize(12),
    fontFamily: FontFamily.latoMedium,
    marginLeft: 4,
  },
  upvoteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 9,
  },
  container: {
    width: 156,
    height: 222,
    borderRadius: 20,
    paddingHorizontal: 9,
    justifyContent: 'flex-end',
    paddingBottom: 9,
  },
});
