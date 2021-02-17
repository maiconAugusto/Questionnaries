import React, {useState, useEffect} from 'react';
import {KeyboardAvoidingView} from 'react-native';
import {Modal, Button} from 'react-native-paper';
import moment from 'moment';
import Geolocation from '@react-native-community/geolocation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Container, ContainerButtom, View} from './styles';
import Card from '../../components/listItem';
import Input from '../../components/input';
import Loading from '../../components/loading';
import api from '../../services/api';

const Questionnaire = ({navigation, route}) => {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState('');
  const [questionnaires, seQuestionnaires] = useState([]);
  const [_latitude, setLatitude] = useState('');
  const [_longitude, setLongitude] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getAuthorization();
  }, []);

  useEffect(() => {
    getGeoLocation();
  }, []);

  function getAuthorization() {
    Geolocation.requestAuthorization();
  }

  function getGeoLocation() {
    Geolocation.getCurrentPosition((info) => {
      const {latitude, longitude} = info.coords;
      setLatitude(latitude);
      setLongitude(longitude);
    });
  }

  function addNewQuestionnaire() {
    if (data !== '') {
      seQuestionnaires((state) => [
        ...state,
        {questionnaire: data, response: ''},
      ]);
      setData('');
      setVisible(false);
    }
  }

  async function sendToApi() {
    try {
      setLoading(true);
      const email = await AsyncStorage.getItem('@email');
      const dataToApi = {
        title: route.params.title,
        user: email,
        questionnaires: questionnaires,
        latitude: String(_latitude),
        longitude: String(_longitude),
        date: moment().format('DD/MM/YYYY'),
      };
      console.log(dataToApi);
      await api
        .post('quest', dataToApi)
        .then(() => {
          setLoading(false);
          navigation.reset({index: 0, routes: [{name: 'home'}]});
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    } catch (error) {
      setLoading(false);
    }
    console.log(data);
  }
  return (
    <>
      <View>
        <Modal
          visible={visible}
          contentContainerStyle={{
            flexDirection: 'column',
            flex: 1,
          }}
          onDismiss={() => {
            setData('');
            setVisible(!visible);
          }}>
          <KeyboardAvoidingView style={{flex: 1}}>
            <Input
              label="Digite aqui"
              value={data}
              keyboardType="default"
              returnKeyType="default"
              setValue={setData}
              numberOfLines={4}
              multiline={true}
              style={{height: 140, margin: 20}}
            />
            <Button
              contentStyle={{height: 50}}
              style={{backgroundColor: '#550073', margin: 20}}
              color="white"
              onPress={() => addNewQuestionnaire()}>
              Adicionar
            </Button>
            <Button
              contentStyle={{height: 50}}
              style={{
                backgroundColor: '#DB3B5B',
                marginLeft: 20,
                marginRight: 20,
              }}
              color="white"
              onPress={() => {
                setVisible(!visible);
                setData('');
              }}>
              Voltar
            </Button>
          </KeyboardAvoidingView>
        </Modal>
        {visible ? null : (
          <Container>
            {loading ? (
              <Loading color="#550073" style={{marginTop: 40}} />
            ) : (
              questionnaires.map((item, index) => {
                return (
                  <Card
                    key={index}
                    data={item.questionnaire}
                    styles={{padding: 8, fontSize: 16}}
                  />
                );
              })
            )}
          </Container>
        )}
        {visible ? null : loading ? null : (
          <ContainerButtom>
            <Button
              icon="plus-circle"
              contentStyle={{height: 50}}
              style={{
                backgroundColor: '#550073',
                marginLeft: 20,
                marginRight: 20,
                marginBottom: 10,
                marginTop: 20,
              }}
              color="white"
              onPress={() => setVisible(!visible)}>
              Adicionar
            </Button>
            <Button
              disabled={questionnaires.length === 0 ? true : false}
              icon="content-save-outline"
              color="white"
              contentStyle={{height: 50}}
              style={{
                backgroundColor: 'green',
                marginLeft: 20,
                marginRight: 20,
                marginBottom: 30,
              }}
              onPress={() => sendToApi()}>
              Finalizar
            </Button>
          </ContainerButtom>
        )}
      </View>
    </>
  );
};

export default Questionnaire;
