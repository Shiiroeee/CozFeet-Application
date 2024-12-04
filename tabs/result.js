import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Results = ({ imageData }) => {
  const { imageUri, classificationResult } = imageData || {};

  return (
    <View style={styles.content}>
      <Text style={styles.mainHeading}>Plantar Pressure Distribution Classification System</Text>

      <View style={styles.resultsContainer}>
        {imageUri && (
          <View style={styles.resultItem}>
            <View style={styles.labelContainer}>
              <Text style={styles.labelText}>{classificationResult}</Text>
            </View>
            <View style={styles.tabContent}>
              <Image source={{ uri: imageUri }} style={styles.tabImage} />
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#FFE9C7',
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
    paddingHorizontal: 20,
    paddingTop: 50,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  mainHeading: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  resultsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 10,
    marginTop: 20,
  },
  resultItem: {
    alignItems: 'center',
    width: '80%',
  },
  labelContainer: {
    backgroundColor: '#2c3e50',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginBottom: 10,
  },
  labelText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tabContent: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  tabImage: {
    width: 300,
    height: 300,
    resizeMode: 'cover',
    borderRadius: 10,
    borderWidth: 5,
    borderColor: '#2c3e50',
  },
});

export default Results;
