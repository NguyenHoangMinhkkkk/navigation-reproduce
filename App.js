import React from 'react';
import {View, StyleSheet} from 'react-native';
import NavigationContainer from './NavigationContainer';
type Props = {};

function App(props: Props) {
  console.log(props);
  return <NavigationContainer />;
}

const styles = StyleSheet.create({
  container: {},
});

export default App;
