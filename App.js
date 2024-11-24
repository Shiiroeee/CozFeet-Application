import React, { useState } from 'react';
import { View, StyleSheet, Alert, SafeAreaView } from 'react-native';
import Sidebar from './tabs/sidebar';
import Home from './tabs/home';
import Welcome from './tabs/welcome'; 
import Results from './tabs/result'; 
import Recommend from './tabs/recommend'; 
import Information from './tabs/information'; 



const App = () => {
  const [currentPage, setCurrentPage] = useState('Welcome'); // Start with the Welcome page

  const handleNavigation = (page) => {
    setCurrentPage(page);
    Alert.alert(`${page} clicked!`);
  };

  return (
    <SafeAreaView style={styles.container}> {/* Wrap the entire component with SafeAreaView */}
      {/* Sidebar is only shown when currentPage is not 'Welcome' */}
      {currentPage !== 'Welcome' && <Sidebar onNavigate={handleNavigation} />}
      <View style={styles.contentWrapper}>
        {currentPage === 'Welcome' && <Welcome onNavigate={handleNavigation} />}
        {currentPage === 'Home' && <Home />}
        {currentPage === 'Result' && <Results />}
        {currentPage === 'Recommend' && <Recommend />}
        {currentPage === 'Information' && <Information />}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FFBD59',
  },
  contentWrapper: {
    flex: 1,
  },
});

export default App;
