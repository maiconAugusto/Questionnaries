import React, {useEffect, useState} from 'react';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import FloatButtom from '../../components/floatButtom';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Container} from './styles';
import api from '../../services/api';
import Card from '../../components/listItem';

const Home = ({navigation}) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    try {
      const email = await AsyncStorage.getItem('@email');
      const response = await api.get(`quests/${email}`);
      setData(response.data.data.reverse());
    } catch (error) {}
  }
  return (
    <Container>
      <ScrollView>
        <View style={{marginTop: 4}}>
          {data.map((item, index) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate('listing', {data: item})}>
                <Card
                  styles={{
                    marginLeft: 10,
                    color: '#2A2A2A',
                  }}
                  key={index}
                  data={item.title}
                />
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
      <FloatButtom
        color="#550073"
        onPress={() => navigation.navigate('CreateQuestionnaire')}
      />
    </Container>
  );
};
export default Home;
