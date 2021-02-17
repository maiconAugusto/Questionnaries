import React, {useState, useEffect} from 'react';
import {Modal, Button} from 'react-native-paper';
import moment from 'moment';
import Geolocation from '@react-native-community/geolocation';
import {Container, ContainerButtom, View} from './styles';
import Card from '../../components/listItem';
import Input from '../../components/input';

const Questionnaire = ({navigation}) => {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState('');
  const [questionnaires, seQuestionnaires] = useState([]);
  const [_latitude, setLatitude] = useState('');
  const [_longitude, setLongitude] = useState('');

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

  function sendToApi() {
    const data = {
      title: '',
      user: '',
      questionnaires: questionnaires,
      latitude: _latitude,
      longitude: _longitude,
      date: moment().format('DD/MM/YYYY'),
    };
    console.log(data);
  }
  return (
    <>
      <View>
        <Modal
          visible={visible}
          contentContainerStyle={{flexDirection: 'column'}}
          onDismiss={() => setVisible(!visible)}>
          <Input
            label="Digite aqui"
            value={data}
            setValue={setData}
            numberOfLines={4}
            multiline={true}
            keyboardType="default"
            style={{height: 140, margin: 20}}
          />
          <Button
            contentStyle={{height: 50}}
            style={{backgroundColor: '#550073', margin: 20}}
            color="white"
            onPress={() => addNewQuestionnaire()}>
            Adicionar
          </Button>
        </Modal>
        {visible ? null : (
          <Container>
            {questionnaires.map((item, index) => {
              return (
                <Card
                  key={index}
                  data={item.questionnaire}
                  styles={{padding: 8, fontSize: 16}}
                />
              );
            })}
          </Container>
        )}
        {visible ? null : (
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
