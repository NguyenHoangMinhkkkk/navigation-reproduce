import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

type Props = {};

export default function ModalA(props: Props) {
  console.log(props);
  return (
    <View style={{ flex: 1, opacity: 0.7, backgroundColor: 'rgba(255,0,0,1)',alignItems: 'center', justifyContent: 'center'}}>
      <Text>ModalA, with opacity and backgroundColor</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});