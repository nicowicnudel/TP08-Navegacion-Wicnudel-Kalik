import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ScreenA1() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>HOME</Text>
      <TouchableOpacity onPress={() => navigation.navigate('ScreenA2')}>
        <Text style={styles.button}>Ir a HOME 2</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 24, marginBottom: 20 },
  button: { color: 'blue', fontSize: 18 }
});
