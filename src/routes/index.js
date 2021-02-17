import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Icon} from 'react-native-elements';

import Home from '../pages/home';
import CreateQuestionnaire from '../pages/initQuestionnaire';
import Questionnaire from '../pages/questionnaire';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Initial">
        <Stack.Screen
          name="Initial"
          component={Home}
          options={{
            title: 'Questionários',
            headerShown: true,
            // headerRight: () => (
            //   <Icon
            //     containerStyle={{marginRight: 18, marginBottom: 4}}
            //     type="ionicon"
            //     name="add-circle-outline"
            //     size={35}
            //     onPress={() => {}}
            //     color="white"
            //   />
            // ),
            headerBackTitleVisible: false,
            headerTintColor: 'white',
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0,
              backgroundColor: '#550073',
            },
            headerTitleStyle: {
              fontSize: 16,
              color: 'white',
            },
          }}
        />
        <Stack.Screen
          name="CreateQuestionnaire"
          component={CreateQuestionnaire}
          options={{
            title: 'Novo questionário',
            headerShown: true,
            // headerRight: () => (
            //   <Icon
            //     containerStyle={{marginRight: 18, marginBottom: 4}}
            //     type="ionicon"
            //     name="add-circle-outline"
            //     size={35}
            //     onPress={() => {}}
            //     color="white"
            //   />
            // ),
            headerBackTitleVisible: false,
            headerTintColor: 'white',
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0,
              backgroundColor: '#550073',
            },
            headerTitleStyle: {
              fontSize: 16,
              color: 'white',
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
              fontSize: 16,
              color: 'white',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Routes;
