import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Main from './Pages/Main';
import NewEntry from './Pages/NewEntry';
import Report from './Pages/Report';
import Welcome from './Pages/Welcome';
import Loading from './Pages/Loading';

import {isLogged} from './services/Auth';
import {isInitialized} from './services/Welcome';

const Stack = createNativeStackNavigator();

const AppScreens = ({logged, initiated}) => {
  return (
    <Stack.Navigator
      initialRouteName={logged ? (initiated ? 'Main' : 'Welcome') : 'SignIn'}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="NewEntry" component={NewEntry} />
      <Stack.Screen name="Report" component={Report} />
    </Stack.Navigator>
  );
};

const Routes = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [initiated, setInitiated] = useState(false);
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    const initialVerifications = async () => {
      if (await isInitialized()) {
        setInitiated(true);
      }

      if (await isLogged()) {
        setLogged(true);
      }

      setIsLoading(false);
    };
    initialVerifications();
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <NavigationContainer>
      <AppScreens logged={logged} initiated={initiated} />
    </NavigationContainer>
  );
};

export default Routes;
