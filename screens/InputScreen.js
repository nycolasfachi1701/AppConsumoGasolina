import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';

export default function InputScreen({ navigation }) {
  const [km, setKm] = useState('');
  const [liters, setLiters] = useState('');

  const calculateConsumption = () => {
    const consumption = parseFloat(km) / parseFloat(liters);
    navigation.navigate('Result', { consumption });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Informe a Quilometragem (KM):</Text>
      <TextInput
        style={styles.input}
        value={km}
        onChangeText={setKm}
        keyboardType="numeric"
        placeholder="Ex: 150"
      />
      <Text style={styles.label}>Informe os Litros de Gasolina:</Text>
      <TextInput
        style={styles.input}
        value={liters}
        onChangeText={setLiters}
        keyboardType="numeric"
        placeholder="Ex: 10"
      />
      <Button title="Calcular" onPress={calculateConsumption} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});
