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
        maxLength={40}
        label="Nome do questionário"
        autoFocus={true}
        style={{fontSize: 14, marginTop: 30, marginLeft: 10, marginRight: 10}}
      />
      <Buttom
        data={'Proxímo'}
        disabled={questionnaireName.length === 0 ? true : false}
        onPress={() => navigation.navigate('Questionnaire')}
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
