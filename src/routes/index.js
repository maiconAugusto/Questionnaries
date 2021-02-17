import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import InitUser from '../pages/initUser';
import Home from '../pages/home';
import CreateQuestionnaire from '../pages/initQuestionnaire';
import Questionnaire from '../pages/questionnaire';
import Listing from '../pages/listing';
import ResponseQuetionnaire from '../pages/responseQuestionnaire';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="InitUser">
        <Stack.Screen
          name="InitUser"
          component={InitUser}
          options={{
            title: 'Início',
            headerShown: true,
            headerBackTitleVisible: false,
            headerTintColor: 'white',
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0,
              backgroundColor: '#550073',
            },
            headerTitleStyle: {
              fontSize: 20,
              color: 'white',
              fontFamily: 'Quicksand Bold',
            },
          }}
        />
        <Stack.Screen
          name="home"
          component={Home}
          options={{
            title: 'Questionários',
            headerShown: true,
            headerBackTitleVisible: false,
            headerTintColor: 'white',
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0,
              backgroundColor: '#550073',
            },
            headerTitleStyle: {
              fontSize: 20,
              color: 'white',
              fontFamily: 'Quicksand Bold',
            },
          }}
        />
        <Stack.Screen
          name="CreateQuestionnaire"
          component={CreateQuestionnaire}
          options={{
            title: 'Novo questionário',
            headerShown: true,
            headerBackTitleVisible: false,
            headerTintColor: 'white',
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0,
              backgroundColor: '#550073',
            },
            headerTitleStyle: {
              fontSize: 20,
              color: 'white',
              fontFamily: 'Quicksand Bold',
            },
          }}
        />
        <Stack.Screen
          name="Questionnaire"
          component={Questionnaire}
          options={{
            title: 'Questionário',
            headerShown: true,
            headerBackTitleVisible: false,
            headerTintColor: 'white',
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0,
              backgroundColor: '#550073',
            },
            headerTitleStyle: {
              fontSize: 20,
              color: 'white',
              fontFamily: 'Quicksand Bold',
            },
          }}
        />
        <Stack.Screen
          name="listing"
          component={Listing}
          options={{
            title: 'Questionário',
            headerShown: true,
            headerBackTitleVisible: false,
            headerTintColor: 'white',
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0,
              backgroundColor: '#550073',
            },
            headerTitleStyle: {
              fontSize: 20,
              color: 'white',
              fontFamily: 'Quicksand Bold',
            },
          }}
        />
        <Stack.Screen
          name="response"
          component={ResponseQuetionnaire}
          options={{
            title: 'Resposta',
            headerShown: true,
            headerBackTitleVisible: false,
            headerTintColor: 'white',
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0,
              backgroundColor: '#550073',
            },
            headerTitleStyle: {
              fontSize: 20,
              color: 'white',
              fontFamily: 'Quicksand Bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Routes;
