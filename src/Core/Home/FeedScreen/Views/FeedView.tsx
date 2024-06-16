import React, {FC} from 'react';
import {ScrollView, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {Colors} from '../../../../utils/theme/Colors';
import AppText from '../../../../Components/AppText';

const FeedView: FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.mainContainer}>
        <AppText>Feed</AppText>
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
    justifyContent: 'center',
    backgroundColor: Colors.secondary.main,
    paddingHorizontal: '30@s',
  },
});
