import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ScreenA1() {
  console.log('ScreenA1 se está mostrando');
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hola Info, este es el Screen 1</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: 'blue',
    fontWeight: 'bold',
  },
});
