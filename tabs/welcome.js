import React from 'react';
import { View, Text, StyleSheet, Pressable, Image, SafeAreaView } from 'react-native';
import Animated, { FadeIn, FadeOut, ZoomIn, ZoomOut } from 'react-native-reanimated';

const Welcome = ({ onNavigate }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Logo with FadeIn animation */}
      <Animated.Image
        entering={FadeIn.duration(1000)} // Logo fades in over 1 second
        exiting={FadeOut.duration(500)} // Logo fades out over 0.5 seconds
        style={styles.logo}
        source={require('../assets/Logo2.png')}
      />
      {/* Button with ZoomIn animation */}
      <Animated.View
        entering={ZoomIn.duration(800)} // Button zooms in over 0.8 seconds
        exiting={ZoomOut.duration(500)} // Button zooms out over 0.5 seconds
      >
        <Pressable
          onPress={() => onNavigate('Home')}
          style={styles.pressableBorder}
        >
          <Text style={styles.linkText}>Get Started!</Text>
        </Pressable>
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFBD59',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 350,
    height: 350,
    marginVertical: -25, // Adjust vertical margin for spacing
    resizeMode: 'contain', // Ensure logo is contained properly
  },
  pressableBorder: {
    borderWidth: 2,
    borderColor: '#295582',
    backgroundColor: '#295582',
    borderRadius: 50,
    paddingVertical: 8,
    paddingHorizontal: 35,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  linkText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
  },
});

export default Welcome;
