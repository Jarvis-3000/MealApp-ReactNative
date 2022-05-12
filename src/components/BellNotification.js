import * as React from 'react';
import { IconButton, Colors } from 'react-native-paper';

const BellNotification = () => (
  <IconButton
    icon="bell"
    color={"#fff"}
    size={20}
    onPress={() => console.log('Pressed')}
  />
);

export default BellNotification;