import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {navigationRef} from './navigators.utils';
import {SCREENS} from './screens';
import {Login} from '../screens/Login/Login';
import {Signup} from '../screens/Signup/Signup';
import {Home} from '../screens/Home/Home';
import {LogoutButton} from '../components/LogoutButton/LogoutButton';
import {Image} from 'react-native';
import Logo from '../assets/images/Logo-dark.png';
import {useSelector} from 'react-redux';
import {selectToken} from '../slices/authSlice';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  const isLoggedIn = useSelector(selectToken);

  return (
    <Stack.Navigator>
      {isLoggedIn ? (
        <Stack.Screen
          name={SCREENS.HOME}
          component={Home}
          options={{
            headerStyle: {
              backgroundColor: '#1c1c1c',
            },
            headerRight: () => <LogoutButton />,
            headerLeft: () => (
              <Image
                source={{uri: Logo}}
                style={{
                  width: 150,
                  height: 50,
                  marginLeft: 15,
                  resizeMode: 'contain',
                }}
              />
            ),
            headerTitle: '',
          }}
        />
      ) : (
        <>
          <Stack.Screen
            name={SCREENS.LOGIN}
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={SCREENS.SIGNUP}
            component={Signup}
            options={{headerShown: false}}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

const linking = {
  prefixes: [],
  config: {
    screens: {
      [SCREENS.LOGIN]: 'login',
      [SCREENS.SIGNUP]: 'signup',
      [SCREENS.HOME]: '/',
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
