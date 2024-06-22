import React, {FC} from 'react';
import {View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {Colors} from '../../../../utils/theme/Colors';
import ShowCaseVideo from '../../../../Components/ShowCaseVideo';

const ShowCaseVideoView: FC = () => {
  return (
    <View style={styles.mainContainer}>
      <ShowCaseVideo />
    </View>
  );
};

export default ShowCaseVideoView;

const styles = ScaledSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.secondary.main,
  },
});
