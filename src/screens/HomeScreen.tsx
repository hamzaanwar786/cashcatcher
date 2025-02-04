import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Markdown from 'react-native-markdown-display';

const welcomeMessage = `
# Welcome to CashCatcher! 💰

Save money effortlessly by:
- Scanning receipts 📸
- Finding best deals 🏷️
- Getting instant cashback 💵

Start by scanning your first receipt!
`;

export default function HomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Markdown style={markdownStyles}>
        {welcomeMessage}
      </Markdown>
      
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('ScanReceipt')}
      >
        <Text style={styles.buttonText}>Scan Receipt</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

const markdownStyles = {
  heading1: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2196F3',
    marginBottom: 20,
  },
  list: {
    marginBottom: 20,
  },
  listItem: {
    marginBottom: 10,
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
  },
};