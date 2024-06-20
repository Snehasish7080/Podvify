/*eslint-disable */
import {
  BlendMode,
  Canvas,
  Group,
  ImageSVG,
  Skia,
  fitbox,
  rect,
  useSVG,
} from '@shopify/react-native-skia';
import React, {FC, useMemo} from 'react';
import {Colors} from '../utils/theme/Colors';

type RupeeIconProps = {
  width?: number;
  height?: number;
};
export const RupeeIcon: FC<RupeeIconProps> = ({height = 24, width = 24}) => {
  const svg = useSVG(require('../Assets/icons/rupee.svg'));
  const paint = useMemo(() => Skia.Paint(), []);

  if (!svg) {
    return null;
  }

  const src = rect(0, 0, svg.width(), svg.height());
  const dst = rect(0, 0, width, height);

  paint.setColorFilter(
    Skia.ColorFilter.MakeBlend(Skia.Color(Colors.white.main), BlendMode.SrcIn),
  );

  return (
    <Canvas style={{height: height, width: width}}>
      <Group layer={paint} transform={fitbox('contain', src, dst)}>
        {svg && (
          <ImageSVG svg={svg} x={0} y={0} width={width} height={height} />
        )}
      </Group>
    </Canvas>
  );
};
