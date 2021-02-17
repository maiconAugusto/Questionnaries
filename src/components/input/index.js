import React from 'react';
import {TextInput} from 'react-native-paper';

const Input = ({
  value,
  setValue,
  style,
  returnKeyType,
  label,
  keyboardType,
  focusable,
  maxLength,
  mode,
  multiline,
  numberOfLines,
  autoFocus,
}) => {
  return (
    <TextInput
      label={label}
      value={value}
      multiline={multiline === undefined ? false : multiline}
      numberOfLines={numberOfLines === undefined ? 0 : numberOfLines}
      maxLength={maxLength}
      theme={{
        colors: {
          primary: '#550073',
          underlineColor: 'red',
          error: '#FF8686',
        },
      }}
      mode={mode}
      style={style}
      returnKeyType={returnKeyType}
      keyboardType={keyboardType}
      autoFocus={autoFocus === undefined ? false : autoFocus}
      onChangeText={(text) => setValue(text)}
    />
  );
};
export default Input;
