import React, { useState } from 'react'
import { TouchableOpacity,View,Text,StyleSheet } from 'react-native'

const ButtonComponent = () => {
    const [count, setCount] = useState<number>(0);

    const onPress = (): void => {
      setCount(prevCount => prevCount + 1);
      console.log('We are here ' + count);
    };

    return (
        <View >
        <TouchableOpacity style={styles.button} onPress={onPress}>
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