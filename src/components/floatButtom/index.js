import React from 'react';
import {Icon} from 'react-native-elements';

const FloatButtom = ({onPress, color}) => {
  return (
    <Icon
      size={35}
      raised
      containerStyle={{position: 'absolute', bottom: 35, right: 15}}
      reverse
      name="add"
      type="ionicon"
      color={color}
      onPress={onPress}
    />
  );
};
export default FloatButtom;
