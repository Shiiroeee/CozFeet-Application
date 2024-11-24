import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Home = () => {
  const [activeTab, setActiveTab] = useState(1); // Manage active tab state

  const TABS = [
    { id: 1, name: 'Capture 1', content: 'This is Capture 1 content.' },
    { id: 2, name: 'Capture 2', content: 'This is Capture 2 content.' },
    { id: 3, name: 'Capture 3', content: 'This is Capture 3 content.' },
  ];

  const activeTabContent = TABS.find((tab) => tab.id === activeTab);

  return (
    <View style={styles.content}>
      <Text style={styles.mainHeading}>Plantar Pressure Distribution Classification System</Text>

      {/* Tabs */}
      <View style={styles.tabs}>
        {TABS.map((tab) => (
          <TouchableOpacity
            key={tab.id}
            style={[styles.tabButton, activeTab === tab.id && styles.activeTabButton]}
            onPress={() => setActiveTab(tab.id)}
          >
            <Text style={styles.tabButtonText}>{tab.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Tab Content */}
      <View style={styles.tabContent}>
        <Text style={styles.tabHeading}>{activeTabContent?.content}</Text>
        <Image
          style={styles.tabImage}
          source={{ uri: 'https://via.placeholder.com/600' }} // Updated placeholder size
        />
        <TouchableOpacity style={styles.captureButton}>
          <Text style={styles.buttonText}>Capture</Text>
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
  tabs: {
    flexDirection: 'row',
    justifyContent: 'center',

  },
  tabButton: {
    padding: 10,
    backgroundColor: '#2c3e50',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeTabButton: {
    backgroundColor: '#FFBD59',
  },
  tabButtonText: {
    color: '#fff',
    fontSize: 16,
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
  tabHeading: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  tabImage: {
    width: 600, // Updated width
    height: 600, // Updated height
    resizeMode: 'cover',
    borderRadius: 10,
    borderWidth: 5,
    borderColor: '#2c3e50',
    marginBottom: 20,
  },
  captureButton: {
    backgroundColor: '#2c3e50',
    padding: 10,
    borderRadius: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Home;
