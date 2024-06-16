import React, {FC} from 'react';
import {Pressable, ScrollView, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {Colors} from '../../../utils/theme/Colors';
import {AuthenticatedNavProps} from '../../../Navigations/Authenticated/AuthenticatedTypes';
import AppText from '../../../Components/AppText';
import {getFontSize} from '../../../utils/theme/FontScale';
import {FontFamily} from '../../../utils/theme/FontFamily';
import {BackIcon} from '../../../Components/BackIcon';
import OtpInput from '../../../Components/OtpInput';

const VerificationView: FC<AuthenticatedNavProps<'VerificationView'>> = ({
  navigation,
}) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.mainContainer}>
        <Pressable onPress={() => navigation.goBack()}>
          <BackIcon />
        </Pressable>
        <AppText style={styles.heading}>Verification Code</AppText>
        <AppText style={styles.subHeading}>
          Please type the verification code sent to prelookstudio@gmail.com
        </AppText>
        <OtpInput />
        <View style={styles.infoContainer}>
          <AppText style={styles.info}>I don’t recevie a code! </AppText>
          <AppText style={[styles.info, styles.pressable]}>
            Please resend
          </AppText>
        </View>
      </View>
    </ScrollView>
  );
};

export default VerificationView;

const styles = ScaledSheet.create({
  scrollView: {flexGrow: 1, backgroundColor: Colors.white.main},
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.secondary.main,
    paddingHorizontal: '30@s',
    paddingVertical: '26@vs',
  },
  heading: {
    fontSize: getFontSize(30),
    marginTop: 60,
    fontFamily: FontFamily.latoSemiBold,
  },
  subHeading: {
    color: Colors.grey.label,
    marginBottom: '60@vs',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },
  info: {
    fontSize: getFontSize(16),
    fontFamily: FontFamily.latoMedium,
    color: Colors.white.main,
  },
  pressable: {
    marginLeft: 4,
    color: Colors.primary.main,
  },
});
