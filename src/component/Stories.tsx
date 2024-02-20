import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, Image } from 'react-native';

const stories = [
    { id: '1', title: 'Your Story', imageUrl: 'https://png.pngtree.com/png-vector/20221103/ourlarge/pngtree-man-businessman-retro-style-profile-comic-book-white-vector-png-image_20386644.jpg' },
    { id: '2', title: 'Hari Lee', imageUrl: 'https://png.pngtree.com/png-vector/20221103/ourlarge/pngtree-man-businessman-retro-style-profile-comic-book-white-vector-png-image_20386644.jpg' },
    { id: '3', title: 'Joey', imageUrl: 'https://png.pngtree.com/png-vector/20221103/ourlarge/pngtree-man-businessman-retro-style-profile-comic-book-white-vector-png-image_20386644.jpg' },
    { id: '6', title: 'Changler Bing', imageUrl: 'https://png.pngtree.com/png-vector/20221103/ourlarge/pngtree-man-businessman-retro-style-profile-comic-book-white-vector-png-image_20386644.jpg' },
    { id: '4', title: 'Monica Geller', imageUrl: 'https://png.pngtree.com/png-vector/20221103/ourlarge/pngtree-man-businessman-retro-style-profile-comic-book-white-vector-png-image_20386644.jpg' },
    { id: '5', title: 'Ross', imageUrl: 'https://png.pngtree.com/png-vector/20221103/ourlarge/pngtree-man-businessman-retro-style-profile-comic-book-white-vector-png-image_20386644.jpg' },
    { id: '7', title: 'Rach', imageUrl: 'https://png.pngtree.com/png-vector/20221103/ourlarge/pngtree-man-businessman-retro-style-profile-comic-book-white-vector-png-image_20386644.jpg' },
];

type ItemProps = { title: string, imageUrl: string };

const Story = ({ title, imageUrl }: ItemProps) => (
  <View style={styles.storyContainer}>
    
    <Image source={{ uri: imageUrl }} style={styles.image} />
    <Text style={styles.title}>{title}</Text>
  </View>
);

const Stories = () => {
  return (
    <SafeAreaView>
        <Text style={{paddingLeft:10}}>Stories</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={stories}
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
    borderWidth:5,
    borderColor:'#aa336a',
  },
  title: {
    marginTop: 5,
  },
});

export default Stories;
