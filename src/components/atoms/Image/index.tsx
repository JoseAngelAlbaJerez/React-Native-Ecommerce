import React from 'react';
import { View, Image, ImageSourcePropType, ImageStyle } from 'react-native';

interface ImageLoaderProps {
  source: ImageSourcePropType;
  style: ImageStyle;
}

const ImageLoader: React.FC<ImageLoaderProps> = ({ source, style }) => {
  return (
    <View style={style}>
      <Image source={source} style={{ ...style }} />
    </View>
  );
};

export default ImageLoader;
