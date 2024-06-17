import React, {FC} from 'react';
import {Image, ImageBackground, Pressable, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {Colors} from '../utils/theme/Colors';
import AppText from './AppText';
import {getFontSize} from '../utils/theme/FontScale';
import {FontFamily} from '../utils/theme/FontFamily';
import {UpvoteIcon} from './UpvoteIcon';

const ShowCaseCard: FC = () => {
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
      <View style={styles.viewContainer}>
        <AppText style={styles.time}>10K Views</AppText>
        <AppText style={styles.separator}>&bull;</AppText>
        <AppText style={styles.time}>10 min ago</AppText>
      </View>
    </View>
  );
};

export default ShowCaseCard;

const styles = ScaledSheet.create({
  mainContainer: {
    alignItems: 'flex-start',
  },
  cardImage: {
    width: 151,
    height: 104,
    borderRadius: 5,
  },
  viewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  time: {
    fontSize: getFontSize(12),
    fontFamily: FontFamily.latoSemiBold,
    color: Colors.grey.label,
  },
  separator: {
    color: Colors.grey.label,
    marginHorizontal: 5,
  },
});
