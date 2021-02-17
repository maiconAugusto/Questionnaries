import React, {useState, useEffect} from 'react';
import {KeyboardAvoidingView, Alert, Platform} from 'react-native';
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
    let value = data.replace(/[0-9]/g, '');
    setData(value);
  }, [data]);

  useEffect(() => {
    getGeoLocation();
  }, []);

  function getGeoLocation() {
    Geolocation.getCurrentPosition(
      (info) => {
        const {latitude, longitude} = info.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      () => {
        Alert.alert(
          'Erro ao obter localização',
          'verefique se seu GPS está ativo, ou se você está em um local fechado!',
          [{text: 'OK', onPress: {}}],
          {cancelable: false},
        );
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 1000,
      },
    );
  }

  async function addNewQuestionnaire() {
    if (data !== '') {
      seQuestionnaires((state) => [
        ...state,
        {questionnaire: data, response: ''},
      ]);
      setVisible(false);
      setData('');
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
      await api
        .post('quest', dataToApi)
        .then(() => {
          setLoading(false);
          Alert.alert('Parabéns', 'Questionário salvo com sucesso!');
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
          <KeyboardAvoidingView style={{flex: 1, backgroundColor: 'white'}}>
            <Input
              label="Digite aqui"
              value={data}
              keyboardType="default"
              returnKeyType="default"
              setValue={setData}
              numberOfLines={4}
              multiline={true}
              style={{height: 140, margin: 20, color: '#2A2A2A'}}
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
            <View style={{marginTop: 4}}>
              {loading ? (
                <Loading color="#550073" style={{marginTop: 40}} />
              ) : (
                questionnaires.map((item, index) => {
                  return (
                    <Card
                      key={index}
                      data={`${index}) - ${item.questionnaire}`}
                      styles={{
                        padding: 8,
                        fontSize: 16,
                        color: '#2A2A2A',
                        fontFamily: 'Quicksand Regular',
                      }}
                    />
                  );
                })
              )}
            </View>
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
