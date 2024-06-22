import React, {FC} from 'react';
import {Dimensions, Image, Pressable, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

const ShowCaseVideo: FC = () => {
  return (
    <View style={styles.mainContainer}>
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1607805074778-eeb1aafe3641?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        }}
        style={styles.image}
      />
    </View>
  );
};

export default ShowCaseVideo;

const styles = ScaledSheet.create({
  mainContainer: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  image: {
    height: '100%',
    width: '100%',
  },
});
