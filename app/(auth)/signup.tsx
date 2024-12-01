import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, SafeAreaView } from 'react-native';
import { Link, useRouter, Stack } from 'expo-router';
import { StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Font from 'expo-font';

const Signup = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'Nunito-Regular': require('../../assets/fonts/Nunito-Regular.ttf'),
      });
      setFontsLoaded(true);
    };
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null; // You can return a loading screen here if needed
  }

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.circleTopRight} />
      <View style={styles.circleBottomLeft} />
      <Text style={styles.importantText}>Sign up:</Text>

      {/* Form Box */}
      <View style={styles.formBox}>
        {/* Username Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Username:</Text>
          <TextInput style={styles.inputBox} placeholder="Enter Username" />
        </View>

        {/* Email Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email:</Text>
          <TextInput style={styles.inputBox} placeholder="Enter Email" />
        </View>

        {/* Password Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password:</Text>
          <TextInput style={styles.inputBox} placeholder="Enter Password" secureTextEntry />
        </View>

        {/* Agreement Text */}
        <View style={styles.agreementContainer}>
          <Text>By selecting Agree and continue below,</Text>
          <View style={styles.agreementtext}>
            <Text>you are agreeing to the</Text>
            <Link href='/TOS' style={styles.tostext}> Terms of Service and Privacy Policy</Link>
          </View>
        </View>

        {/* Gradient Sign In Button */}
        <Pressable onPress={() => router.push('/home')}>
          <LinearGradient
            colors={['#ff7e5f', '#feb47b']} // Gradient colors
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.gradientButton}
          >
            <Text style={styles.signintext}>Agree and continue</Text>
          </LinearGradient>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Signup;

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
  importantText: {
    marginBottom: 20,
    fontSize: 25,
    fontFamily: 'Nunito-Regular',
  },
  formBox: {
    backgroundColor: '#EECDA2',
    padding: 30,
    borderRadius: 20,
    width: '90%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#595339',
    marginBottom: 5,
  },
  inputBox: {
    backgroundColor: 'white',
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    fontSize: 16,
    width: '100%',
  },
  agreementContainer: {
    marginTop: 5,
    marginBottom: 20,
    alignItems: 'center',
    width: '100%',
  },
  agreementtext: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%', 
  },
  tostext: {
    color: '#926d26',
    fontWeight: 'bold',
    marginLeft: 5,
    flexShrink: 1,
  },
  
  gradientButton: {
    width: '100%',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  signintext: {
    color: 'white',
    fontWeight: 'bold',
  },
});
