import {
  StyleProp,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';
import React, {FC} from 'react';
import AppText from './AppText';
import {ScaledSheet} from 'react-native-size-matters';
import {getFontSize} from '../utils/theme/FontScale';
import {Colors} from '../utils/theme/Colors';
import {FontFamily} from '../utils/theme/FontFamily';

type AppInputProps = TextInputProps & {
  containerStyle?: StyleProp<ViewStyle>;
  lable?: string;
};
const AppInput: FC<AppInputProps> = ({
  lable,
  style,
  containerStyle,
  ...props
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <AppText style={styles.label}>{lable}</AppText>
      <TextInput style={[styles.input, style]} {...props} />
    </View>
  );
};

const styles = ScaledSheet.create({
  input: {
    fontSize: getFontSize(14),
    color: Colors.white.main,
    fontFamily: FontFamily.latoRegular,
    height: 50,
    borderWidth: 1,
    borderColor: Colors.primary.main,
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  label: {
    fontSize: getFontSize(16),
    color: Colors.grey.label,
    marginBottom: 4,
  },
  container: {
    width: '100%',
  },
});

export default AppInput;
