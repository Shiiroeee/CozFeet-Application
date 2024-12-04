import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
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

          try {
            const result = await classifyImage(imageUri);
            setClassificationResult(result);

            if (onClassify) onClassify(imageUri, result);
          } catch (error) {
            Alert.alert('Error', 'Failed to classify the image. Please try again.');
            console.error('Error classifying image:', error);
          }
        }
      }
    );
  };

  const classifyImage = async (imageUri) => {
    try {
      console.log('Initializing TensorFlow.js...');
      await tf.ready();
  
      console.log('Loading model...');
      const model = await tf.loadLayersModel('/assets/model/model.json');
      console.log('Model loaded successfully.');
  
      // Load image from URI
      const imageElement = new Image();
      imageElement.src = imageUri;
  
      await new Promise((resolve, reject) => {
        imageElement.onload = resolve;
        imageElement.onerror = reject;
      });
  
      // Preprocess the image
      const imageTensor = tf.browser
        .fromPixels(imageElement)
        .resizeBilinear([299, 299]) // Resize to match model input size
        .div(255.0) 
        .expandDims(0);
  
      console.log('Running prediction...');
      const prediction = model.predict(imageTensor);
      const predictedClass = prediction.argMax(-1).dataSync()[0];
  
      const classes = ['Flat Foot', 'Normal Arch', 'High Arch'];
      console.log('Classification Result:', classes[predictedClass]);
      return classes[predictedClass];
    } catch (error) {
      console.error('Error during classification:', error);
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
            <Image style={styles.tabImage} source={{ uri: selectedImage }} />
            {classificationResult ? (
              <Text style={styles.resultText}>Result: {classificationResult}</Text>
            ) : (
              <Text style={styles.loadingText}>Classifying...</Text>
            )}
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
  loadingText: {
    fontSize: 18,
    fontStyle: 'italic',
    marginBottom: 20,
    color: '#FF8C00',
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2c3e50',
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
