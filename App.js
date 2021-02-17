import React, {useEffect} from 'react';
import Geolocation from '@react-native-community/geolocation';
import {StatusBar} from 'react-native';
import Routes from './src/routes';

const App = () => {
  useEffect(() => {
    getAuthorization();
  }, []);

  function getAuthorization() {
    Geolocation.requestAuthorization();
  }

  return (
    <>
      <StatusBar barStyle="light-content" />
      <Routes />
    </>
  );
};
export default App;
