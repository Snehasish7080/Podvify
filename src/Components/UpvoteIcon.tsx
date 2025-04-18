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

type UpvoteIconProps = {
  width?: number;
  height?: number;
};
export const UpvoteIcon: FC<UpvoteIconProps> = ({height = 20, width = 20}) => {
  const svg = useSVG(require('../Assets/icons/upvote.svg'));
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
        {svg && <ImageSVG svg={svg} x={0} y={0} width={20} height={20} />}
      </Group>
    </Canvas>
  );
};
