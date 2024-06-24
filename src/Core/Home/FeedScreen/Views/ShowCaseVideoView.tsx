import React, {FC, useState} from 'react';
import {FlatList, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {Colors} from '../../../../utils/theme/Colors';
import ShowCaseVideo from '../../../../Components/ShowCaseVideo';

const ShowCaseVideoView: FC = () => {
  const [layoutHeight, setLayoutHeight] = useState(0);
  return (
    <View
      style={styles.mainContainer}
      onLayout={e => {
        setLayoutHeight(e.nativeEvent.layout.height);
      }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        bounces={false}
        data={[1, 2, 3, 4]}
        keyExtractor={(_item, index) => index.toString()}
        renderItem={({item, index}) => {
          return <ShowCaseVideo height={layoutHeight} />;
        }}
        contentContainerStyle={styles.flatlist}
        pagingEnabled
        scrollEventThrottle={16}
        decelerationRate={'fast'}
      />
    </View>
  );
};

export default ShowCaseVideoView;

const styles = ScaledSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.secondary.main,
  },
  flatlist: {
    flexGrow: 1,
  },
});
