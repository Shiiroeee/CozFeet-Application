import { StyleSheet, Text, View, TextInput, Pressable, Image, Alert } from 'react-native';
import { Link, useRouter, Stack } from 'expo-router';
import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const SignIn = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    if (username === 'team4' && password === 'team4') {
      router.push('/home'); 
    } else if (username === 'admin' && password === 'admin') {
      Alert.alert('Access Denied', 'Admin credentials cannot be used to access the user area.');
    } else {
      Alert.alert('Error', 'Invalid credentials');
    }
  };

  const handleAdminSignIn = () => {
    if (username === 'admin' && password === 'admin') {
      router.push('/admin'); 
    } else if (username === 'team4' && password === 'team4') {
      Alert.alert('Access Denied', 'User credentials cannot be used to access the admin area.');
    } else {
      Alert.alert('Error', 'Invalid credentials');
    }
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar barStyle="dark-content" backgroundColor="#fff" hidden={false} />
      
      {/* Admin Button */}
      <Pressable style={styles.adminButton} onPress={handleAdminSignIn}>
        <Text style={styles.adminButtonText}>Admin</Text>
      </Pressable>

      <View style={styles.circleTopRight} />
      <View style={styles.circleBottomLeft} />

      {/* Main Content */}
      <View style={styles.contentContainer}>
        <Image source={require('../../assets/images/Logo.png')} style={styles.headerImage} />

        {/* Username and Password Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Username:</Text>
          <TextInput
            style={styles.inputBox}
            placeholder="Enter Username"
            value={username}
            onChangeText={setUsername}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password:</Text>
          <TextInput
            style={styles.inputBox}
            placeholder="Enter Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>

        {/* Gradient Sign In Button */}
        <Pressable onPress={handleSignIn} style={({ pressed }) => [
          styles.gradientButton,
          { opacity: pressed ? 0.8 : 1 },
        ]}>
          <LinearGradient
            colors={['#ff7e5f', '#feb47b']} 
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.gradientButtonInner}
          >
            <Text style={styles.signintext}>Sign In</Text>
          </LinearGradient>
        </Pressable>

        {/* Sign up Link */}
        <View style={styles.signupContainer}>
          <Text style={styles.subtext}>Not signed up?</Text>
          <Link href="/signup" style={styles.linkText}>Sign up here</Link>
        </View>

        <View style={styles.lineContainer}>
          <View style={styles.line} />
          <Text>Login With</Text>
          <View style={styles.line} />
        </View>

        {/* Social Login Options */}
        <View style={styles.loginOptions}>
          <Pressable onPress={() => router.push('/signup')}>
            <Image source={require('../../assets/images/facebook.png')} style={styles.icon} />
          </Pressable>
          <Pressable onPress={() => router.push('/signup')}>
            <Image source={require('../../assets/images/x.png')} style={styles.icon} />
          </Pressable>
          <Pressable onPress={() => router.push('/signup')}>
            <Image source={require('../../assets/images/gmail.png')} style={styles.icon} />
          </Pressable>
        </View>
      </View>
    </GestureHandlerRootView>
  );
};

export default SignIn;

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
    width: 150,
    height: 150,
    borderRadius: 75, 
    backgroundColor: 'rgba(255, 200, 200, 0.5)', 
    zIndex: 0,
  },
  circleBottomLeft: {
    position: 'absolute',
    bottom: -50,
    left: -50,
    width: 150,
    height: 150,
    borderRadius: 75, 
    backgroundColor: 'rgba(200, 200, 255, 0.5)', 
    zIndex: 0, 
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    zIndex: 1,
    width: '100%',
  },
  headerImage: {
    width: 300,
    height: 300,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20,
    alignItems: 'flex-start',
  },
  label: {
    position: 'absolute',
    top: 10,
    left: 5,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#543714',
    marginTop: -15,
  },
  inputBox: {
    backgroundColor: 'white',
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    fontSize: 16,
    marginTop: 25,
    width: '100%',
  },
  gradientButton: {
    width: '80%',
    borderRadius: 5,
    marginBottom: 15,
    overflow: 'hidden', // Ensure the LinearGradient doesn't overflow
  },
  gradientButtonInner: {
    width: '100%',
    padding: 10,
    alignItems: 'center',
  },
  signintext: {
    color: 'white',
    fontWeight: 'bold',
  },
  signupContainer: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  subtext: {
    fontSize: 12,
  },
  linkText: {
    fontSize: 12,
    color: 'blue',
    marginLeft: 5,
  },
  lineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'gray',
    marginHorizontal: 5,
  },
  loginOptions: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '80%',
    marginTop: 15,
  },
  icon: {
    width: 40,
    height: 40,
  },
  adminButton: {
    backgroundColor: '#F4B949',
    marginTop: 25,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 15,
    position: 'absolute',
    top: 40, 
    left: 20,
    zIndex: 2, 
  },
  adminButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4B3F00',
  },
});
