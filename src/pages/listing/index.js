import React from 'react';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import {Container} from './styles';
import Card from '../../components/listItem';
import Text from '../../components/text';

const Listing = ({navigation, route}) => {
  const data = route.params.data;
  return (
    <Container>
      <View style={{height: 120}}>
        <Text
          styles={{
            fontSize: 14,
            marginLeft: 10,
            marginTop: 12,
            fontFamily: 'Quicksand Bold',
          }}
          data={`Usuário: ${data.user}`}
        />
        <Text
          styles={{
            fontSize: 14,
            marginLeft: 10,
            marginTop: 2,
            fontFamily: 'Quicksand Bold',
          }}
          data={`Título: ${data.title}`}
        />
        <Text
          styles={{
            fontSize: 14,
            marginLeft: 10,
            marginTop: 2,
            fontFamily: 'Quicksand Bold',
          }}
          data={`Data: ${data.date}`}
        />
        <Text
          styles={{
            fontSize: 14,
            marginLeft: 10,
            marginTop: 2,
            fontFamily: 'Quicksand Bold',
          }}
          data={`Latitude: ${data.latitude}`}
        />
        <Text
          styles={{
            fontSize: 14,
            marginLeft: 10,
            marginTop: 2,
            fontFamily: 'Quicksand Bold',
          }}
          data={`Longitude: ${data.longitude}`}
        />
      </View>
      <ScrollView style={{marginTop: 20}}>
        <View style={{marginTop: 6}}>
          {data.questionnaires.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() =>
                  navigation.navigate('response', {
                    questionnaires: data,
                    data: item,
                    index: index,
                  })
                }>
                <Card
                  styles={{
                    marginLeft: 10,
                    padding: 6,
                    color: '#2A2A2A',
                    fontFamily: 'Quicksand',
                    fontSize: 16,
                  }}
                  data={`${index}) - ${item.questionnaire}: ${item.response}`}
                />
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </Container>
  );
};
export default Listing;
