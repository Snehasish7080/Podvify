import {Pressable, TextInput, View} from 'react-native';
import React, {FC, useEffect, useRef, useState} from 'react';
import AppText from './AppText';
import {ScaledSheet} from 'react-native-size-matters';
import {Colors} from '../utils/theme/Colors';
import {FontFamily} from '../utils/theme/FontFamily';
import {getFontSize} from '../utils/theme/FontScale';
import {StackActions, useNavigation} from '@react-navigation/native';

const OtpInput: FC = () => {
  const [value, setValue] = useState<string>('');
  const ref = useRef<TextInput>(null);

  const navigation = useNavigation();

  useEffect(() => {
    if (value.length === 4) {
      navigation.dispatch(StackActions.replace('Home'));
    }
  }, [value]);

  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={text => {
          if (text.length <= 4) {
            setValue(text);
          }
        }}
        ref={ref}
        style={styles.textInput}
        autoFocus
        keyboardType="phone-pad"
      />
      {Array(4)
        .fill(undefined)
        .map((item, index) => {
          return (
            <Pressable
              key={index}
              style={[
                styles.otpBox,
                (value.length === index ||
                  (value.length === index && index === 0)) &&
                  styles.selectedBox,
              ]}
              onPress={() => {
                if (ref && ref.current) {
                  ref.current.focus();
                }
              }}>
              <AppText style={styles.text}>{value.split('')[index]}</AppText>
            </Pressable>
          );
        })}
      <View />
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  otpBox: {
    width: 60,
    height: 60,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.white.main,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '20@s',
  },
  selectedBox: {
    borderColor: Colors.primary.main,
  },
  text: {
    color: Colors.white.main,
    fontFamily: FontFamily.latoSemiBold,
    fontSize: getFontSize(25),
  },
  textInput: {
    display: 'none',
  },
});

export default OtpInput;
