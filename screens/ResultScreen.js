import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function ResultScreen({ route, navigation }) {
  const { consumption } = route.params;

  const getClassification = (consumption) => {
    if (consumption > 12) return { label: 'A', color: '#00FF00' }; // Verde
    if (consumption > 10) return { label: 'B', color: '#ADFF2F' }; // Verde Claro
    if (consumption > 8) return { label: 'C', color: '#FFFF00' }; // Amarelo
    if (consumption > 4) return { label: 'D', color: '#FFA500' }; // Laranja
    return { label: 'E', color: '#FF0000' }; // Vermelho
  };

  const classification = getClassification(consumption);

  return (
    <View style={styles.container}>
      <Text style={styles.resultText}>Média de Consumo: {consumption.toFixed(2)} Km/L</Text>
      <Text style={[styles.resultText, { color: classification.color }]}>
        Classificação: {classification.label}
      </Text>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  resultText: {
    fontSize: 24,
    marginBottom: 20,
  },
});
