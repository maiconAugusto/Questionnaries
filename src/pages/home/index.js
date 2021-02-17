import React, {useEffect, useState} from 'react';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import FloatButtom from '../../components/floatButtom';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Container} from './styles';
import api from '../../services/api';
import Card from '../../components/listItem';
import Loading from '../../components/loading';
import Text from '../../components/text';

const Home = ({navigation}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isVoid, setIsVoid] = useState(false);
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    try {
      setLoading(true);
      const email = await AsyncStorage.getItem('@email');
      await api.get(`quests/${email}`).then((response) => {
        setIsVoid(response.data.data.length === 0 ? true : false);
        setData(response.data.data.reverse());
        setLoading(false);
      });
    } catch (error) {
      setLoading(false);
    }
  }
  if (loading) {
    return (
      <Container>
        <Loading style={{marginTop: 40}} color="#550073" />
      </Container>
    );
  }
  return (
    <Container>
      {isVoid ? (
        <View style={{alignItems: 'center', marginTop: 40}}>
          <Text
            styles={{fontFamily: 'Quicksand Bold'}}
            data="Não há registros até o momento!"
          />
        </View>
      ) : null}

      <ScrollView>
        <View style={{marginTop: 4}}>
          {data.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => navigation.navigate('listing', {data: item})}>
                <Card
                  styles={{
                    marginLeft: 10,
                    fontSize: 14,
                    color: '#2A2A2A',
                    fontFamily: 'Quicksand Bold',
                  }}
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
