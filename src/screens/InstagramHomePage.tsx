import React from 'react';
import { SafeAreaView, StyleSheet, TextInput, Text, TouchableOpacity } from 'react-native';
import ButtonComponent from '../component/Button';
import InstagramHeader from '../component/InstagramHeader';
import Stories from '../component/Stories';
import Feed from '../component/feedSection';

const InstagramHomePage = () => {
  

  return (
    <SafeAreaView>
        <InstagramHeader>

        </InstagramHeader>
        <Stories>
            
        </Stories>
        <Feed></Feed>
       

       


    </SafeAreaView>
  );
};


export default InstagramHomePage;
