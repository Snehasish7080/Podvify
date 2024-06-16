/*eslint-disable */
import {
  BlendMode,
  Canvas,
  Group,
  ImageSVG,
  Skia,
  useSVG,
} from '@shopify/react-native-skia';
import React, {useMemo} from 'react';
import {Colors} from '../utils/theme/Colors';

export const AppLogoName = () => {
  const svg = useSVG(require('../Assets/icons/logoname.svg'));

  const paint = useMemo(() => Skia.Paint(), []);
  paint.setColorFilter(
    Skia.ColorFilter.MakeBlend(
      Skia.Color(Colors.primary.main),
      BlendMode.SrcIn,
    ),
  );

  return (
    <Canvas style={{height: 46, width: 174}}>
      <Group layer={paint}>
        {svg && <ImageSVG svg={svg} x={0} y={0} width={174} height={46} />}
      </Group>
    </Canvas>
  );
};
