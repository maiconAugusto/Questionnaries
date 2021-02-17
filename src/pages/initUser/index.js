import React, {useState} from 'react';
import {Container, View} from './styles';
import Input from '../../components/input';
import Buttom from '../../components/buttom';
import Text from '../../components/text';

const InitUser = ({navigation}) => {
  const [email, setEmail] = useState('');

  function setUser() {
    navigation.navigate('home');
  }
  return (
    <Container>
      <View>
        <Text
          styles={{marginTop: 40}}
          data="Bem-vindo, informe seu seu e-mail para prosseguir."
        />
      </View>
      <Input
        value={email}
        setValue={setEmail}
        mode="outlined"
        autoFocus={true}
        keyboardType="email-address"
        returnKeyType="done"
        label="Insira seu e-mail"
        style={{fontSize: 14, marginTop: 20, marginLeft: 10, marginRight: 10}}
      />
      <Buttom
        data={'Proxímo'}
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
