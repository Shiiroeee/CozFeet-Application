
import { StyleSheet, View, Image, StatusBar, Text, Pressable, Animated } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import React, { useEffect, useRef, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import * as Font from 'expo-font';

const Index = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const router = useRouter();

  // Animation values
  const circleTopRightAnim = useRef(new Animated.Value(0)).current;
  const circleBottomLeftAnim = useRef(new Animated.Value(0)).current;
  const contentAnim = useRef(new Animated.Value(0)).current; // Combined animation for logo and text

  // Load the font
  useEffect(() => {
    const loadFonts = async () => {
      try {
        await Font.loadAsync({
          'Nunito-Regular': require('../assets/fonts/Nunito-Regular.ttf'),
        });
        setFontsLoaded(true);
      } catch (error) {
        console.error("Error loading font:", error);
      }
    };
    loadFonts();
  }, []);

  // Start animations in sequence
  useEffect(() => {
    Animated.sequence([
      Animated.timing(circleTopRightAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(circleBottomLeftAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(contentAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  if (!fontsLoaded) {
    return null; // Display loading screen or null until fonts are loaded
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack.Screen options={{ headerShown: false }} />
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" hidden={false} />

        {/* Animated circles */}
        <Animated.View
          style={[
            styles.circleTopRight,
            { opacity: circleTopRightAnim, transform: [{ scale: circleTopRightAnim }] },
          ]}
        />
        <Animated.View
          style={[
            styles.circleBottomLeft,
            { opacity: circleBottomLeftAnim, transform: [{ scale: circleBottomLeftAnim }] },
          ]}
        />

        {/* Combined Animated logo and text */}
        <Animated.View style={[styles.contentContainer, { opacity: contentAnim }]}>
          <Pressable onPress={() => router.push('/signin')}>
            <Image source={require('../assets/images/Logo.png')} style={styles.headerImage} />
          </Pressable>
          <Text style={styles.importantText}>Welcome User to Cozfeet</Text>
        </Animated.View>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleTopRight: {
    position: 'absolute',
    top: -50,
    right: -50,
    width: 250,
    height: 250,
    borderRadius: 150, 
    backgroundColor: 'rgba(255, 200, 200, 0.5)', 
  },
  circleBottomLeft: {
    position: 'absolute',
    bottom: -50,
    left: -50,
    width: 250,
    height: 250,
    borderRadius: 150,
    backgroundColor: 'rgba(200, 200, 255, 0.5)', 
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    width: '100%', 
  },
  headerImage: {
    width: 300, 
    height: 300,
    resizeMode: 'contain',
  },
  importantText: {
    fontSize: 25,
    fontWeight: 'bold',
    bottom: 15,
    color: '#d9b03a',
    fontFamily: 'Nunito-Regular', // Apply Nunito font
    textAlign: 'center',
  },
});
