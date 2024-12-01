import { StyleSheet, View, Text, Image, Pressable } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, GestureHandlerRootView } from 'react-native-gesture-handler';

const Profile = () => {
  return (
    <GestureHandlerRootView>
      <SafeAreaView style={styles.container}>
      <View style={styles.circleTopRight} />
      <View style={styles.circleBottomLeft} />
        <ScrollView style={styles.profileBox}>
          <Text style={styles.HeaderText}>Profile</Text>

          {/* 1st Section: Info and Profile Picture */}
          <View style={styles.headerContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.infotext}>Name: Daniel Kimbell Yu</Text>
              <Text style={styles.infotext}>Age: 22</Text>
              <Text style={styles.infotext}>Gender: Male</Text>
              <Text style={styles.infotext}>Last Checked: XX/XX/XXXX</Text>
            </View>

            <View style={styles.imageContainer}>
              <Image source={require('../../assets/images/profile.jpg')} style={styles.profileImageLarge} />
              <Pressable style={styles.edit}>
                <Text style={styles.editText}>Edit Profile</Text>
              </Pressable>
            </View>
          </View>
          <View style={styles.line} />

          <Text style={styles.importantText}>Image of captured foot pressure: </Text>
          <View style={styles.imageCompiler}>
            <Image source={require('../../assets/images/1 (1).jpg')} style={styles.images}/>
            <Image source={require('../../assets/images/1 (2).jpg')} style={styles.images}/>
            <Image source={require('../../assets/images/1 (3).jpg')} style={styles.images}/>
          </View>

          <View style={styles.line} />

          {/* Recommendation Section */}
          <View style={styles.recommendationContainer}>
            <Text style={styles.importantText}>Recommendation:</Text>
            <Text style={styles.recommendationText}>Identified Foot Arch:</Text>
            <Text style={styles.recommendationText}>Insole Recommendation:</Text>
          </View>

        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileBox: {
    width: '90%',
    height: '100%',
    backgroundColor: '#F4B949',
    borderRadius: 35,
    padding: 20,
    marginTop: 20,
  },
  HeaderText: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileImageLarge: {
    width: 110,
    height: 110,
    borderRadius: 50,
    marginBottom: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  imageContainer: {
    alignItems: 'center',
  },
  edit: {
    backgroundColor: '#F6F6D8',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 5,
    alignItems: 'center',
  },
  editText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4B3F00',
  },
  infotext: {
    fontSize: 15,
    marginBottom: 10,
    color: '#4B3F00',
    fontWeight: 'bold',
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
  line: {
    marginTop: 5,
    height: 1,
    backgroundColor: 'gray',
    marginHorizontal: 5,
  },
  imageCompiler: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  images: {
    width: '32%',
    height: 150,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  recommendationContainer: {
    backgroundColor: '#F6F6D8',
    borderRadius: 15,
    padding: 15,
    marginTop: 10,
  },
  recommendationText: {
    fontSize: 15,        // Increased font size
    marginVertical: 5,   // Added space between lines
    color: '#4B3F00',
  },
  importantText:{
    fontSize: 15,
    marginVertical:5,
    fontWeight:'bold',
  }
});
