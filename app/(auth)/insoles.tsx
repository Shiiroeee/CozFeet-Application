import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';
import { Stack } from 'expo-router';

const InsoleProductPage = () => {
    return (
        <SafeAreaView style={styles.container}>
          <Stack.Screen options={{ headerShown: false }} />
          <View style={styles.circleTopRight} />
          <View style={styles.circleBottomLeft} />
        
      <Text style={styles.title}>Normal Arch</Text>
      <Text style={styles.productName}>
        Ideastep XD-736 ComfortMax Breathable Arch Support Insoles
      </Text>
      
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/SPORT-INSOLES.png')}
          style={styles.productImage}
        />
      </View>
      
      <Text style={styles.description}>
        They are made with high elastic sponge that offers superior cushioning and flexibility. This ensures your customers enjoy maximum comfort with every step they take, reducing fatigue and enhancing their overall experience.
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#7A6229', 
    marginBottom: 10,
    marginTop: 100,
  },
  productName: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  productImage: {
    width: 700,
    height: 300,
    resizeMode: 'contain',
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    color: '#666',
    lineHeight: 22,
  },
  circleTopRight: {
    position: 'absolute',
    top: -50,
    right: -50,
    width: 250,
    height: 250,
    borderRadius: 200,
    backgroundColor: 'rgba(255, 200, 200, 0.5)',
    zIndex: 0,
  },
  circleBottomLeft: {
    position: 'absolute',
    bottom: -50,
    left: -50,
    width: 200,
    height: 200,
    borderRadius: 200,
    backgroundColor: 'rgba(200, 200, 255, 0.5)',
    zIndex: 0,
  },
});

export default InsoleProductPage;
