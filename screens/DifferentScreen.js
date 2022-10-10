import * as React from 'react';
import { View, Text } from 'react-native';
import Button from '../components/Button';

const DifferentScreen = ({ navigation, route }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Different Page with index param: {route.params.index}</Text>
      <Button
        buttonClassName=''
        onPress={() => navigation.goBack()}
      >
        Go back
      </Button>
    </View>
  );
}

export default DifferentScreen
