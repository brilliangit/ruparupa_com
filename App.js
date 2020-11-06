import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
  Home
} from './src/screens';
import {
  ImageHeader,
  DetailsEvent
} from './src/components';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerTitle: props => <ImageHeader {...props} /> }} />
        <Stack.Screen name="MyModal" component={DetailsEvent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
