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

export const BackIcon = () => {
  const svg = useSVG(require('../Assets/icons/backArrow.svg'));

  const paint = useMemo(() => Skia.Paint(), []);
  paint.setColorFilter(
    Skia.ColorFilter.MakeBlend(Skia.Color(Colors.white.main), BlendMode.SrcIn),
  );

  return (
    <Canvas style={{height: 24, width: 24}}>
      <Group layer={paint}>
        {svg && <ImageSVG svg={svg} x={0} y={0} width={24} height={24} />}
      </Group>
    </Canvas>
  );
};
