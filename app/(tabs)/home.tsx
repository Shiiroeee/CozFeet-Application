import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { ScrollView, GestureHandlerRootView } from 'react-native-gesture-handler';

const Home = () => {
  const router = useRouter();
  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.circleTopRight} />
        <View style={styles.circleBottomLeft} />


        {/* Profile Preview Container */}
        <View style={[styles.card, styles.profilePreview]}>
          {/* Header with enlarged profile image and text */}
          <View style={styles.headerContainer}>
            <Image source={require('../../assets/images/profile.jpg')} style={styles.profileImageLarge} />
            <View style={styles.textContainer}>
              <Text style={styles.headerText}>Welcome Back!</Text>
              <Text style={styles.infotext}>Name: Daniel Yu</Text>
              <Text style={styles.infotext}>Age: 22</Text>
              <Text style={styles.infotext}>Gender: Male</Text>
            </View>
          </View>

          {/* Dialog Example */}
          <ScrollView style={styles.dialog}>
            <Text style={styles.dialogtitle}>Summary of Results</Text>
            <Text style={styles.dialogText}>Foot Arch: </Text>
            <Text style={styles.dialogText}>Recommended Insoles: </Text>
            <Text style={styles.dialogText}>Urgency: </Text>
          </ScrollView>
        </View>

        {/* Scroll View with buttons */}
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Pressable style={[styles.card, styles.blue]} onPress={() => router.push('/info')}>
            <Text style={styles.sectionTitle}>Want to learn more?</Text>
            <Text style={styles.subText}>What exactly are the different foot arches? What are the differences between them?</Text>
          </Pressable>

          <Pressable style={[styles.card, styles.yellow]} onPress={() => router.push('/insoles')}>
            <Text style={styles.sectionTitle}>Check out the Insoles!</Text>
            <Text style={styles.subText}>Different arches, different needs. Learn more about the different insoles.</Text>
          </Pressable>

          <Pressable style={[styles.card, styles.blue]} onPress={() => router.push('/faq')}>
            <Text style={styles.sectionTitle}>Frequently Asked Questions</Text>
            <Text style={styles.subText}>Here is a list of frequently asked questions.</Text>
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  safeArea: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 40, // Increased padding to push content down
  },
  scrollContainer: {
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  card: {
    width: '90%',
    padding: 20,
    marginVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  profilePreview: {
    backgroundColor: '#F4B949',
    borderRadius: 65,
    padding: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileImageLarge: {
    width: 100,
    height: 100,
    top: 5,
    borderRadius: 40,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  infotext: {
    fontSize: 16,
    top: 5,
    marginBottom: 5,
    color: '#4B3F00',
    fontWeight: 'bold',
  },
  dialog: {
    backgroundColor: '#F6F6D8',
    padding: 15,
    borderRadius: 30,
    marginTop: 10,
    marginBottom: 10,
    width: '100%',
  },
  dialogtitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#4B3F00',
    marginBottom: 5,
  },
  dialogText: {
    fontSize: 14,
    color: '#4B3F00',
  },
  yellow: {
    backgroundColor: '#F4B949',
    width: '100%',
  },
  blue: {
    backgroundColor: '#B9E0F9',
    width: '100%',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4B3F00',
    marginBottom: 5,
  },
  subText: {
    fontSize: 14,
    color: '#4B3F00',
    textAlign: 'center',
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
  adminButton: {
    backgroundColor: '#F4B949',
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginTop: 25, 
    borderRadius: 15,
    position: 'absolute',
    top: 40, 
    left:20,
  },
  adminButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4B3F00',
  },
});
