import React from 'react';
import {Card} from './styles';
import Text from '../text';

const ListItem = ({data, styles}) => {
  return (
    <Card>
      <Text data={data} styles={styles} />
    </Card>
  );
};
export default ListItem;
