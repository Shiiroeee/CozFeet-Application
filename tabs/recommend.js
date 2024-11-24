import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Recommend = () => {
  const recommendations = [
    {
      title: "Gel Sole Air Insole",
      description:
        "Gel cushioning that can help reduce pressure on flat feet. You can find this product at local sporting goods stores or online on platforms.",
      image: "https://via.placeholder.com/600", // Updated placeholder size
    },
    {
      title: "Powerstep Pinnacle Insole",
      description:
        "It combines cushioning with a firmer arch support structure to help alleviate discomfort.",
      image: "https://via.placeholder.com/600", // Updated placeholder size
    },
  ];

  return (
    <View style={styles.content}>
      {/* Title */}
      <Text style={styles.mainHeading}>
        Plantar Pressure Distribution Classification System
      </Text>

      {/* Recommendation Cards */}
      <View style={styles.cardContainer}>
        {recommendations.map((item, index) => (
          <View key={index} style={styles.card}>
            <View style={styles.cardContent}>
              <Image
                source={{ uri: item.image }}
                style={styles.cardImage}
              />
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardDescription}>{item.description}</Text>
            </View>
            <View style={styles.labelContainer}>
              <Text style={styles.labelText}>Flat Foot</Text>
            </View>
          </View>
        ))}
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
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Align cards evenly
    marginHorizontal: 10,
    marginTop: 20,
  },
  card: {
    width: '48%', // Ensures two cards fit side by side
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    justifyContent: 'space-between', // Space out the image, text, and label
  },
  cardContent: {
    alignItems: 'center',
  },
  cardImage: {
    width: 600, // Updated width
    height: 600, // Updated height
    resizeMode: 'contain',
    borderRadius: 10,
    borderWidth: 5,
    borderColor: '#2c3e50',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 14,
    textAlign: 'center',
    color: '#666',
  },
  labelContainer: {
    backgroundColor: '#2c3e50',
    borderRadius: 20,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  labelText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Recommend;
