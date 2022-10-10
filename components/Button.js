import * as React from 'react';
import { View, Text, Pressable } from 'react-native';

const Button = ({ onPress, children, buttonClassName }) => {
  return (
    <Pressable
      className='bg-white mb-2 p-2 border border-red-500'
      onPress={onPress}
    >
      <Text>{children}</Text>
    </Pressable>
  )
}

export default Button
