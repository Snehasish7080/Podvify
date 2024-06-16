import React, {FC} from 'react';
import {Pressable, ScrollView, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {AppLogoName} from '../../../Components/AppLogoName';
import AppText from '../../../Components/AppText';
import AppTextInput from '../../../Components/AppTextInput';
import {AuthenticatedNavProps} from '../../../Navigations/Authenticated/AuthenticatedTypes';
import {Colors} from '../../../utils/theme/Colors';
import {FontFamily} from '../../../utils/theme/FontFamily';
import {getFontSize} from '../../../utils/theme/FontScale';

const LoginView: FC<AuthenticatedNavProps<'LoginView'>> = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollView} bounces={false}>
      <View style={styles.mainContainer}>
        <AppLogoName />
        <AppText style={styles.tagLine}>Where Every Story Shines</AppText>
        <View style={styles.inputContainer}>
          <AppText style={styles.title}>Login</AppText>
          <AppTextInput
            lable="Email"
            containerStyle={styles.inputContainerBox}
            placeholder="Enter your email"
          />
          <AppTextInput
            lable="Password"
            secureTextEntry={true}
            placeholder="Enter password"
          />
        </View>
        <AppText style={styles.forgetPassword}>Forget Password?</AppText>
        <Pressable
          style={styles.loginBtn}
          onPress={() => navigation.navigate('VerificationView')}>
          <AppText style={styles.loginText}>Login</AppText>
        </Pressable>
        <Pressable
          style={styles.infoContainer}
          onPress={() => {
            navigation.navigate('SignupView');
          }}>
          <AppText style={styles.info}>Don't have an account?</AppText>
          <AppText style={[styles.info, styles.pressabelInfo]}>Sign up</AppText>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default LoginView;

const styles = ScaledSheet.create({
  scrollView: {flexGrow: 1, backgroundColor: Colors.white.main},
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.secondary.main,
    paddingHorizontal: '30@s',
  },
  tagLine: {
    fontFamily: FontFamily.latoMedium,
    marginTop: 5,
  },
  inputContainer: {
    width: '100%',
    marginTop: 68,
  },
  title: {
    fontSize: getFontSize(30),
    fontFamily: FontFamily.latoSemiBold,
    marginBottom: 26,
  },
  inputContainerBox: {
    marginBottom: 30,
  },
  forgetPassword: {
    fontSize: getFontSize(14),
    fontFamily: FontFamily.latoMedium,
    color: Colors.primary.main,
    marginTop: 30,
  },
  loginBtn: {
    width: 248,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary.main,
    marginTop: 40,
  },
  loginText: {
    fontSize: getFontSize(15),
    fontFamily: FontFamily.latoSemiBold,
    color: Colors.white.main,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },
  info: {
    color: Colors.white.main,
    fontSize: getFontSize(14),
    fontFamily: FontFamily.latoMedium,
  },
  pressabelInfo: {
    color: Colors.primary.main,
    marginLeft: 4,
  },
});
