import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Home'
import DifferentScreen from './screens/DifferentScreen'
import { store } from './store/store'
import { Provider } from 'react-redux'


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen
            name="Different"
            component={DifferentScreen}
            initialParams={{ index: 0 }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
