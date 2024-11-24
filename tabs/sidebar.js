import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Sidebar = ({ onNavigate, activePage }) => {
  const NAV_ITEMS = ['Home', 'Result', 'Recommend', 'Information'];

  return (
    <View style={styles.sidebar}>
      {/* Logo with error handling */}
      <Image
        style={styles.logo}
        source={require('../assets/Logo3.png')} // Adjust the path as per your structure
        onError={(e) => console.error('Error loading logo:', e.nativeEvent.error)} // Log errors
      />
      
      {/* Navigation Items */}
      <View style={styles.navList}>
        {NAV_ITEMS.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.navItem,
              activePage === item && styles.activeNavItem, // Highlight active item
            ]}
            onPress={() => onNavigate(item)}
            activeOpacity={0.7} // Visual feedback on press
          >
            <Text
              style={[
                styles.navText,
                activePage === item && styles.activeNavText, // Change text color for active item
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sidebar: {
    backgroundColor: '#FFBD59',
    width: 280,
    alignItems: 'center',
    paddingVertical: 50,
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  navList: {
    flex: 1,
    width: '100%',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
    paddingVertical: 10,
  },
  navItem: {
    padding: 15,
    backgroundColor: '#FFE9C7',
    borderColor: '#295582',
    borderWidth: 2,
    borderRadius: 10,
    marginVertical: 8,
    width: '90%', // Adjust width to create better alignment
    alignItems: 'center',
  },
  activeNavItem: {
    backgroundColor: '#295582', // Highlight active item
    borderColor: '#FFFFFF',
  },
  navText: {
    fontSize: 30,
    color: '#2c3e50',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  activeNavText: {
    color: '#FFF', // Change text color for active item
  },
});

export default Sidebar;
