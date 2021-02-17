/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState} from 'react';
import {Alert} from 'react-native';
import {Container} from './styles';
import Text from '../../components/text';
import Buttom from '../../components/buttom';
import Input from '../../components/input';
import api from '../../services/api';

const resonseQuestionnaire = ({navigation, route}) => {
  const [response, setResponse] = useState(route.params.data.response);
  const [loading, setLoading] = useState(false);
  const questionnaire = route.params.data.questionnaire;
  const data = route.params.questionnaires;
  const _index = route.params.index;

  async function updateData() {
    try {
      setLoading(true);
      data.questionnaires.map((item, index) => {
        if (index === _index) {
          item.response = response;
        }
      });
      api
        .put(`quest/${data._id}`, data)
        .then(() => {
          setLoading(false);
          Alert.alert('Parabéns', 'Sua resposta foi salva com sucesso!');
          navigation.reset({index: 0, routes: [{name: 'home'}]});
        })
        .catch(() => {
          Alert.alert('Ops', 'Algo deu errado, tente novamente!');
          setLoading(false);
        });
    } catch (error) {
      setLoading(false);
    }
  }
  return (
    <Container>
      <Text styles={{marginLeft: 10, marginTop: 40}} data={questionnaire} />
      <Input
        label="Resposta"
        value={response}
        keyboardType="default"
        returnKeyType="default"
        setValue={setResponse}
        numberOfLines={4}
        multiline={true}
        style={{height: 140, margin: 10, color: '#2A2A2A'}}
      />
      <Buttom
        data={'Salvar'}
        loading={loading}
        disabled={response.length === 0 ? true : false}
        onPress={() => updateData()}
        style={{
          marginTop: 30,
          marginLeft: 10,
          marginRight: 10,
          justifyContent: 'center',
        }}
        color="green"
        mode="contained"
      />
    </Container>
  );
};
export default resonseQuestionnaire;
