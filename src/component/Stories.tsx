import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, Image } from 'react-native';
import { getFeedsAPI } from "../network/ApiHook";



type ItemProps = { title: string, imageUrl: string };

const Story = ({ title, imageUrl }: ItemProps) => (
  <View style={styles.storyContainer}>
    <Image source={{ uri: imageUrl }} style={styles.image} />
    <Text style={styles.title}>{title}</Text>
  </View>
);

const Stories = () => {
  const [storiesList, setstoriesList] = useState<any[]>([]);

  useEffect(() => {
    const getStories= async () => {
      try {
        const {contentResp, errorMessage} = await getFeedsAPI(
          'v1/e4cf6dd8-ac8c-472c-bcf0-62adf77b1f2a',
        );
        setstoriesList(contentResp);
      
      } catch (error) {
        console.error('Error:', error);
      }
    };
    getStories();
  }, []);
  return (
    <SafeAreaView>
        <Text style={{paddingLeft:10,color:'black'}}>Stories</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={storiesList}
        renderItem={({ item }) => <Story title={item.title} imageUrl={item.imageUrl} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  storyContainer: {
    alignItems: 'center',
    margin: 10,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth:3,
    borderColor:'#de00a9',
  },
  title: {
    marginTop: 5,
    color:'black'
  },
});

export default Stories;
