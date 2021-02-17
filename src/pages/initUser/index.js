import React, {useState} from 'react';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Container, View} from './styles';
import Input from '../../components/input';
import Buttom from '../../components/buttom';
import Text from '../../components/text';

const InitUser = ({navigation}) => {
  const [email, setEmail] = useState('');

  function validateEMAIL() {
    const verifyEmail = /\S+@\S+\.\S+/;
    return verifyEmail.test(email);
  }

  async function setUser() {
    if (email !== '') {
      if (validateEMAIL()) {
        await AsyncStorage.setItem('@email', email);
        navigation.reset({index: 0, routes: [{name: 'home'}]});
      } else {
        Alert.alert('Atenção', 'Este e-mail é inválido!');
      }
    }
  }
  return (
    <Container>
      <View>
        <Text
          styles={{
            marginTop: 40,
            color: '#2A2A2A',
            fontFamily: 'Quicksand Bold',
            fontSize: 14,
          }}
          data="Bem-vindo, informe seu seu e-mail para prosseguir."
        />
      </View>
      <Input
        value={email}
        setValue={setEmail}
        mode="outlined"
        autoFocus={true}
        keyboardType="email-address"
        autoCapitalize="none"
        returnKeyType="done"
        label="Insira seu e-mail"
        style={{
          fontSize: 14,
          marginTop: 20,
          marginLeft: 10,
          marginRight: 10,
          color: '#2A2A2A',
        }}
      />
      <Buttom
        data={'Proxímo'}
        disabled={email === '' ? true : false}
        onPress={() => setUser()}
        style={{
          marginTop: 30,
          marginLeft: 10,
          marginRight: 10,
          justifyContent: 'center',
        }}
        color="#550073"
        mode="contained"
      />
    </Container>
  );
};
export default InitUser;
