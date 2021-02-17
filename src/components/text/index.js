import React from 'react';
import {Text} from 'react-native';

const TextComponent = ({data, styles}) => {
  return <Text style={styles}>{data}</Text>;
};
export default TextComponent;
