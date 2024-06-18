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
});
