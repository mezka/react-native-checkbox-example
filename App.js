import React, { useState } from 'react';
import { Checkbox, Text } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

function dec2bin(dec){
  return (dec >>> 0).toString(2);
}

export default function App() {

  const [checkboxBitmask, setCheckboxBitmask] = useState(0);
  
  const client = {
    email0: 'dfg@dfg.com',
    email1: 'asd@asd.com',
    email2: 'ert@ert.com',
    address0: 'Asd 123, Ddfg',
    address1: 'Qwe 456, Qwe',
    address2: 'Zxc 789, Zxc 789',
    phonenumber0: '123-345-567',
    phonenumber1: '567-789-890',
    phonenumber2: '234-345-567'
  };

  const createCheckboxHandler = (index) => {

    const binaryIndex =  0b1 << index;

    return () => {
      setCheckboxBitmask(checkboxBitmask ^ binaryIndex);
    }
  };

  const checkboxes = Object.entries(client).map((currentSlice, index) => {

    const binaryIndex = 0b1 << index;

    return(
      <View>
        <Text>{currentSlice[0]}</Text>
        <Checkbox.Item
          label={currentSlice[1]}
          status={checkboxBitmask & binaryIndex? 'checked':'unchecked'}
          onPress={createCheckboxHandler(index)}
        />
      </View>
    );
  });

  return (
    <View style={styles.container}>
      <Text>{dec2bin(checkboxBitmask)}</Text>
      {checkboxes}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
