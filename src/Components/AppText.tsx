import {Text, TextProps} from 'react-native';
import React, {FC} from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import {getFontSize} from '../utils/theme/FontScale';
import {Colors} from '../utils/theme/Colors';
import {FontFamily} from '../utils/theme/FontFamily';

type AppTextProps = TextProps;
const AppText: FC<AppTextProps> = ({children, style, ...props}) => {
  return (
    <Text style={[styles.text, style]} {...props}>
      {children}
    </Text>
  );
};

export default AppText;

const styles = ScaledSheet.create({
  text: {
    fontSize: getFontSize(14),
    color: Colors.white.main,
    fontFamily: FontFamily.latoRegular,
  },
});
