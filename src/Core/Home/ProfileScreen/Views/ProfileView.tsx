import React, {FC} from 'react';
import {Image, Pressable, ScrollView, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {Colors} from '../../../../utils/theme/Colors';
import AppText from '../../../../Components/AppText';
import {getFontSize} from '../../../../utils/theme/FontScale';
import {FontFamily} from '../../../../utils/theme/FontFamily';

const ProfileView: FC = () => {
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
