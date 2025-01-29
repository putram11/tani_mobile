import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';  // Use Ionicons from @expo/vector-icons

const SplashScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        {/* React Icon (Logo) */}
        <Ionicons name="leaf-outline" size={100} color="#fff" />
        
        {/* Title */}
        <Text style={styles.title}>TANI PINTAR</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#166953',  // Set the background color as #166953
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
});

export default SplashScreen;
