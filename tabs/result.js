import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Results = () => {
  return (
    <View style={styles.content}>
      {/* Title */}
      <Text style={styles.mainHeading}>Plantar Pressure Distribution Classification System</Text>

      {/* Results Area */}
      <View style={styles.resultsContainer}>
        {/* Left Image and Label */}
        <View style={styles.resultItem}>
          <View style={styles.labelContainer}>
            <Text style={styles.labelText}>Flat Foot</Text>
          </View>
          <View style={styles.tabContent}>
            <Image
              source={{ uri: 'https://via.placeholder.com/600' }} // Updated placeholder size
              style={styles.tabImage}
            />
          </View>
        </View>

        {/* Right Image and Label */}
        <View style={styles.resultItem}>
          <View style={styles.labelContainer}>
            <Text style={styles.labelText}>Flat Foot</Text>
          </View>
          <View style={styles.tabContent}>
            <Image
              source={{ uri: 'https://via.placeholder.com/600' }} // Updated placeholder size
              style={styles.tabImage}
            />
          </View>
        </View>
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
    justifyContent: 'space-between', // Adjusted for closer placeholders
    marginHorizontal: 10, // Reduce the spacing between the results
    marginTop: 20,
  },
  resultItem: {
    alignItems: 'center',
    width: '48%', // Slightly increased width to accommodate the larger images
  },
  labelContainer: {
    backgroundColor: '#2c3e50', // Container background color
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginBottom: 10, // Space between label container and image
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
    width: 600, // Updated width
    height: 600, // Updated height
    resizeMode: 'cover',
    borderRadius: 10,
    borderWidth: 5,
    borderColor: '#2c3e50',
  },
});

export default Results;
