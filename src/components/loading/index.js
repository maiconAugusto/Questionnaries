import React from 'react';
import {ActivityIndicator} from 'react-native';

const Loading = ({color, style}) => {
  return <ActivityIndicator style={style} size="large" color={color} />;
};
export default Loading;
