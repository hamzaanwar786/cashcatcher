import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Markdown from 'react-native-markdown-display';

const scanInstructions = `
## Scanning Instructions 📸

1. Place receipt on a dark surface
2. Ensure good lighting
3. Keep the camera steady
4. Tap to capture

*Camera functionality coming soon!*
`;

export default function ReceiptScanScreen() {
  return (
    <View style={styles.container}>
      <Markdown style={markdownStyles}>
        {scanInstructions}
      </Markdown>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
});

const markdownStyles = {
  heading2: {
    fontSize: 20,
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
  em: {
    fontStyle: 'italic',
    color: '#666',
  },
};