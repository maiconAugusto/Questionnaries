import React, {useEffect} from 'react';
import {Platform, PermissionsAndroid, View} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import {StatusBar} from 'react-native';
import Routes from './src/routes';

const App = () => {
  useEffect(() => {
    getAuthorization();
  }, []);

  async function getAuthorization() {
    Platform.OS === 'ios'
      ? Geolocation.requestAuthorization()
      : await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Localização necessária',
            message:
              'O App precisa ter acesso a sua localização para salvar o questionário',
            buttonPositive: 'OK',
          },
        );
  }

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar backgroundColor="#550073" barStyle="light-content" />
      <Routes />
    </View>
  );
};
export default App;
