import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { Stack } from 'expo-router';

const ArchInfoPage = () => {
  return (
    <SafeAreaView style={styles.container}>
        <Stack.Screen options={{ headerShown: false }} />
        <View style={styles.circleTopRight} />
        <View style={styles.circleBottomLeft} />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        
        {/* High Arch Section */}
        <View style={styles.section}>
          <Text style={styles.title}>High Arch</Text>
          <View style={styles.row}>
            <Image
              source={require('../../assets/images/highArchPathologist.png')} 
              style={styles.image}
            />
            <Text style={styles.description}>
              Pes cavus is a condition where the arch of the foot is higher than usual, often starting in childhood and worsening over time. A high arch reduces the foot’s 
              ability to absorb shock while walking, leading to extra pressure on the front and heel of the foot. As a result, people may experience foot pain that spreads to 
              the ankles, legs, thighs, and even the hips due to added strain on the heel during walking. This pain can be caused by factors like genetics, congenital conditions
               such as clubfoot, or neuromuscular issues like poliomyelitis.
              {'\n\n'}
              Treatment typically involves using special shoes or foot inserts for support. Additionally, losing excess weight can help relieve discomfort by reducing strain on the feet.
            </Text>
          </View>
        </View>

        {/* Normal Arch Section */}
        <View style={styles.section}>
          <Text style={styles.title}>Normal Arch</Text>
          <View style={styles.row}>
            <Image
              source={require('../../assets/images/normalArchPathologist.png')} 
              style={styles.image}
            />
            <Text style={styles.description}>
              A normal arch of the foot is generally considered to be the best due to the fact that it has a slight curve allowing for even weight distribution over the foot.
               This type of arch is associated with excellent stability and optimal shock absorption.
            </Text>
          </View>
        </View>

        {/* Flat Arch Section */}
        <View style={styles.section}>
          <Text style={styles.title}>Flatfoot Arch</Text>
          <View style={styles.row}>
            <Image
              source={require('../../assets/images/flatFootedPathologist.png')} 
              style={styles.image}
            />
            <Text style={styles.description}>
            Flat feet occur when the foot's longitudinal arches don't develop, which is normal in babies until around age two or three. 
            The arches form with the help of tendon tension, so injuries to these tendons can lead to flat feet (pes planus). While many people with flat feet have no issues,
             children might experience pain in their feet and ankles, and adults may feel discomfort from standing or walking for long periods. When treatment is needed, using arch 
             support inserts in shoes can help.
            </Text>
          </View>
        </View>
        

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 50,
  },
  contentContainer: {
    padding: 20,
  },
  section: {
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#7A6229', 
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  image: {
    width: 60,
    height: 120,
    resizeMode: 'contain',
    marginRight: 10,
  },
  description: {
    fontSize: 14,
    color: '#333',
    flex: 1,
    lineHeight: 20,
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

export default ArchInfoPage;
