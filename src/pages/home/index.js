import React from 'react';
import FloatButtom from '../../components/floatButtom';
import {Container} from './styles';

const Home = ({navigation}) => {
  return (
    <Container>
      <FloatButtom
        color="#550073"
        onPress={() => navigation.navigate('CreateQuestionnaire')}
      />
    </Container>
  );
};
export default Home;
