import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

type Props = {};

export default function ScreenA(props: Props) {
  console.log(props);
  return (
    <View style={{flex:1, backgroundColor: 'blue', alignItems: 'center', justifyContent: 'center'}} >
      <Text>ScreenA, with backgroundColor: 'blue'</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});