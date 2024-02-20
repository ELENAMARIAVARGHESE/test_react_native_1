import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const InstagramHeader = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/camera.png')} style={styles.icon} />
      <Text style={styles.text}>Instagram</Text>
      <Image source={require('../assets/send.png')} style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 90,
    backgroundColor: '#ffffff', 
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    color:'black',
    fontFamily: 'Cochin',
  },
  icon: {
    width: 35,
    height: 35,
    tintColor: '#000000', 
  },
});

export default InstagramHeader;
