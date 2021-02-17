import React, {useState} from 'react';
import {Container} from './styles';
import Input from '../../components/input';
import Buttom from '../../components/buttom';

const CreateQuestionnaire = ({navigation}) => {
  const [questionnaireName, setQuestionnaireName] = useState('');
  return (
    <Container>
      <Input
        value={questionnaireName}
        setValue={setQuestionnaireName}
        mode="outlined"
        maxLength={100}
        numberOfLines={1}
        label="Nome do questionário"
        returnKeyType="done"
        autoFocus={true}
        style={{
          fontSize: 14,
          marginTop: 30,
          marginLeft: 10,
          marginRight: 10,
          color: '#2A2A2A',
        }}
      />
      <Buttom
        data={'Proxímo'}
        disabled={questionnaireName.length === 0 ? true : false}
        onPress={() =>
          navigation.navigate('Questionnaire', {title: questionnaireName})
        }
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
export default CreateQuestionnaire;
