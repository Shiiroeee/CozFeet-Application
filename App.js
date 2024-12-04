import React, { useState } from 'react';
import { View, StyleSheet, Alert, SafeAreaView } from 'react-native';
import Sidebar from './tabs/sidebar';
import Home from './tabs/home';
import Welcome from './tabs/welcome';
import Results from './tabs/result';
import Recommend from './tabs/recommend';
import Information from './tabs/information';

const App = () => {
  const [currentPage, setCurrentPage] = useState('Welcome'); // Track the current page
  const [imageData, setImageData] = useState(null); // Store image and classification result

  const handleNavigation = (page) => {
    setCurrentPage(page);
    Alert.alert(`${page} clicked!`);
  };

  const handleImageClassification = (imageUri, classificationResult) => {
    setImageData({ imageUri, classificationResult });
    setCurrentPage('Result'); // Navigate to Results page
  };

  return (
    <SafeAreaView style={styles.container}>
      {currentPage !== 'Welcome' && <Sidebar onNavigate={handleNavigation} />}
      <View style={styles.contentWrapper}>
        {currentPage === 'Welcome' && <Welcome onNavigate={handleNavigation} />}
        {currentPage === 'Home' && (
          <Home onClassify={handleImageClassification} /> // Pass classification handler to Home
        )}
        {currentPage === 'Result' && (
          <Results imageData={imageData} /> // Pass image and classification result to Results
        )}
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
