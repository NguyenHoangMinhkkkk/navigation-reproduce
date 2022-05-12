import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

type Props = {};

export default function ScreenB(props: Props) {
  console.log(props);
  return (
    <View style={{flex:1, backgroundColor: 'cyan', alignItems: 'center', justifyContent: 'center'}} >
      <Text>ScreenB, with backgroundColor: 'cyan'</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});