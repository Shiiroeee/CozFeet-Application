import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import * as tf from '@tensorflow/tfjs';

const Home = ({ onClassify }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [classificationResult, setClassificationResult] = useState('');

  const handleCapture = async () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        includeBase64: false,
      },
      async (response) => {
        if (response && response.assets && response.assets.length > 0) {
          const imageUri = response.assets[0].uri;
          setSelectedImage(imageUri);

          // Perform classification
          const result = await classifyImage(imageUri);
          setClassificationResult(result);

          // You can pass the result to App.js if needed
          if (onClassify) onClassify(imageUri, result);
        }
      }
    );
  };

  const classifyImage = async (imageUri) => {
    try {
      await tf.ready();

      // Load TensorFlow.js model
      const model = await tf.loadLayersModel('/model/model.json');

      // Preprocess the image
      const imageElement = document.createElement('img');
      imageElement.src = imageUri;

      await new Promise((resolve) => {
        imageElement.onload = resolve;
      });

      const imageTensor = tf.browser
        .fromPixels(imageElement)
        .resizeBilinear([224, 224]) // Resize to model input size
        .div(255.0) // Normalize pixel values
        .expandDims(0);

      // Make prediction
      const prediction = model.predict(imageTensor);
      const predictedClass = prediction.argMax(-1).dataSync()[0];

      const classes = ['Flat Foot', 'Normal Arch', 'High Arch'];
      return classes[predictedClass];
    } catch (error) {
      console.error('Error classifying image:', error);
      return 'Error';
    }
  };

  const handleDeleteImage = () => {
    setSelectedImage(null);
    setClassificationResult('');
  };

  return (
    <View style={styles.content}>
      <Text style={styles.mainHeading}>Plantar Pressure Distribution Classification System</Text>

      <View style={styles.tabContent}>
        {selectedImage ? (
          <>
            <Image
              style={styles.tabImage}
              source={{ uri: selectedImage }}
            />
            <Text style={styles.resultText}>Result: {classificationResult}</Text>
            <TouchableOpacity style={styles.deleteButton} onPress={handleDeleteImage}>
              <Text style={styles.buttonText}>Delete Image</Text>
            </TouchableOpacity>
          </>
        ) : (
          <Text style={styles.placeholderText}>No Image Selected</Text>
        )}
        <TouchableOpacity style={styles.captureButton} onPress={handleCapture}>
          <Text style={styles.buttonText}>Select Image</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 2,
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
    marginBottom: 10,
  },
  tabImage: {
    width: 300,
    height: 300,
    resizeMode: 'cover',
    borderRadius: 10,
    borderWidth: 5,
    borderColor: '#2c3e50',
    marginBottom: 20,
  },
  placeholderText: {
    fontSize: 18,
    fontStyle: 'italic',
    marginBottom: 20,
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  captureButton: {
    backgroundColor: '#2c3e50',
    padding: 10,
    borderRadius: 20,
    marginTop: 10,
  },
  deleteButton: {
    backgroundColor: '#FF6347',
    padding: 10,
    borderRadius: 20,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Home;
