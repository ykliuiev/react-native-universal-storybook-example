// @generated: @expo/next-adapter@2.1.52
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../../src/components/Button';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to React Native Web + Next.js 👋</Text>
      <Button onPress={() => {}}>press me</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
  },
});
