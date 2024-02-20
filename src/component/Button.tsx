import React from 'react'
import { TouchableOpacity,View,Text,StyleSheet } from 'react-native'

const ButtonComponent = () => {
  

    return (
        <View >
        <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
        </View>
    );};

    const styles = StyleSheet.create({
        
        button: {
          alignItems: 'center',
          backgroundColor: '#181818',
          borderRadius:10,
          width:345,
          padding: 10,
          marginTop: 20,
        },
        buttonText: {
          color: '#ffffff',
        },
        
      });
      export default ButtonComponent;