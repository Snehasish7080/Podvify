import React, {FC, useRef, useState} from 'react';
import {Image, Pressable, ScrollView, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {Colors} from '../../../../utils/theme/Colors';
import AppText from '../../../../Components/AppText';
import {getFontSize} from '../../../../utils/theme/FontScale';
import {FontFamily} from '../../../../utils/theme/FontFamily';
import Animated, {
  runOnJS,
  useEvent,
  useHandler,
  useSharedValue,
} from 'react-native-reanimated';
import PagerView from 'react-native-pager-view';

const AnimatedPager = Animated.createAnimatedComponent(PagerView);

function usePagerScrollHandler(handlers: any, dependencies?: any) {
  const {context, doDependenciesDiffer} = useHandler(handlers, dependencies);
  const subscribeForEvents = ['onPageScroll'];

  return useEvent<any>(
    event => {
      'worklet';
      const {onPageScroll} = handlers;
      if (onPageScroll && event.eventName.endsWith('onPageScroll')) {
        onPageScroll(event, context);
      }
    },
    subscribeForEvents,
    doDependenciesDiffer,
  );
}

const ProfileView: FC = () => {
  const [pagerIndex, setPagerIndex] = useState(0);

  const indicatorXPosition = useSharedValue(0);
  const scrollXIndex = useSharedValue(0);
  const ref = useRef<PagerView>(null);

  const handler = usePagerScrollHandler({
    onPageScroll: (e: any) => {
      'worklet';
      indicatorXPosition.value = e.offset;
      scrollXIndex.value = e.position;
      runOnJS(setPagerIndex)(e.position);
    },
  });

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.mainContainer}>
        <View style={styles.infoContainer}>
          <View style={styles.profileContainer}>
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1607805074778-eeb1aafe3641?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              }}
              style={styles.profileImage}
            />
            <View style={styles.profileInfoContainer}>
              <AppText style={styles.name}>Albert Dera</AppText>
              <AppText style={styles.userName}>@albertdera</AppText>
              <View style={styles.viewContainer}>
                <AppText style={styles.pods}>10K Views</AppText>
                <AppText style={styles.separator}>&bull;</AppText>
                <AppText style={styles.pods}>10 min ago</AppText>
              </View>
            </View>
          </View>
          <AppText style={styles.info}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </AppText>
          <Pressable style={styles.editBtn}>
            <AppText style={styles.editBtnTxt}>Edit</AppText>
          </Pressable>
        </View>
        <AnimatedPager
          initialPage={0}
          orientation="horizontal"
          style={{
            flex: 1,
            borderColor: 'red',
            borderWidth: 2,
            width: '100%',
          }}
          // onPageScroll={(e) => {
          //   scrollXIndex.value = e.nativeEvent.position;
          //   setPagerIndex(e.nativeEvent.position);
          // }}
          onPageScroll={handler}
          ref={ref}>
          <View style={{borderWidth: 2, borderColor: 'red'}}></View>
          <View></View>
        </AnimatedPager>
      </View>
    </ScrollView>
  );
};

export default ProfileView;

const styles = ScaledSheet.create({
  scrollView: {flexGrow: 1, backgroundColor: Colors.secondary.main},
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.secondary.main,
    paddingHorizontal: '30@s',
    paddingVertical: 30,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  infoContainer: {
    width: '100%',
  },
  profileContainer: {
    flexDirection: 'row',
  },
  name: {
    fontSize: getFontSize(20),
    fontFamily: FontFamily.latoSemiBold,
  },
  userName: {
    fontSize: getFontSize(14),
    color: Colors.grey.label,
    fontFamily: FontFamily.latoSemiBold,
    marginTop: 5,
  },
  profileInfoContainer: {
    marginLeft: 12,
  },
  viewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 11,
  },
  pods: {
    fontSize: getFontSize(12),
    fontFamily: FontFamily.latoSemiBold,
    color: Colors.white.main,
  },
  separator: {
    color: Colors.white.main,
    marginHorizontal: 5,
  },
  info: {
    fontSize: getFontSize(12),
    fontFamily: FontFamily.latoMedium,
    color: Colors.grey.label,
    marginTop: 24,
  },
  editBtn: {
    width: '100%',
    height: 48,
    borderRadius: 24,
    backgroundColor: Colors.primary.main,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  editBtnTxt: {
    fontSize: getFontSize(14),
    fontFamily: FontFamily.latoBold,
  },
});
