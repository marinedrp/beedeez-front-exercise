import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {navigationRef} from './utils';
import {SCREENS} from './screens';
import {Login} from '../screens/Login/Login';
import {Signup} from '../screens/Signup/Signup';
import {Home} from '../screens/Home/Home';
import {LogoutButton} from '../components/LogoutButton/LogoutButton';
import { Image } from 'react-native';
import Logo from '../assets/images/Logo-dark.png'
import { colors } from '../theme/theme';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName={SCREENS.LOGIN}>
      <Stack.Screen name={SCREENS.LOGIN} component={Login} />
      <Stack.Screen name={SCREENS.SIGNUP} component={Signup} />
      <Stack.Screen
        name={SCREENS.HOME}
        component={Home}
        options={{
          headerStyle: {
            backgroundColor: '#111111',
          },
          headerRight: () => <LogoutButton />,
          headerLeft: () => <Image source={{uri: Logo}} style={{ width: 150, height: 50, marginLeft: 15, resizeMode: 'contain' }}/>,
          headerTitle: '',
        }}
      />
    </Stack.Navigator>
  );
};

const linking = {
  prefixes: [],
  config: {
    screens: {
      [SCREENS.LOGIN]: 'login',
      [SCREENS.SIGNUP]: 'signup',
      [SCREENS.HOME]: '',
    },
  },
};

interface NavigationProps
  extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator = (props: NavigationProps) => {
  return (
    <NavigationContainer ref={navigationRef} linking={linking} {...props}>
      <AppStack />
    </NavigationContainer>
  );
};
