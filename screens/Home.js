import * as React from 'react';
import { View, Text } from 'react-native';
import Button from '../components/Button';

const HomeScreen = ({ navigation }) => {
  return (
    <View className="flex-1 items-center justify-center bg-red-200">
      <Text className='mb-6 text-xl font-bold tracking-widest'>Home Screen</Text>
      {new Array(5).fill(0).map((_, n) => {
        return (
          <Button
            key={n}
            onPress={() => navigation.navigate('Different', { index: n + 1 })}
          >
            Go to DifferentScreen {n + 1}
          </Button>
        )
      })}
    </View>
  );
}

export default HomeScreen
