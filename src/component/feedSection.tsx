import React, { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { getFeedsAPI } from "../network/ApiHook";



const Item =(props : any)=>{
     const {title,feedImage,imageUrl,likeCount} = props;
     return(
    <View  style = {styles.postbody}>
        <View style = {styles.posthead}>
            <Image style = {styles.prof}
            source={
                {
                    uri:`${feedImage}`
                }
            }/>
            <Text>{title}</Text>
        </View>
        <Image style = {styles.post}
        source={
            {
                uri:`${imageUrl}`
            }
        }/>
        <View style = {styles.postfooter} >
                    <Image style = {styles.like}
                    source={require('../assets/heart.png')}/>
                    <Image  style = {styles.like}
                    source={require('../assets/chat.png')}/>
                    <Image  style = {styles.like}
                    source={require('../assets/sendPost.png')}/>
        </View>
        <Text>{likeCount} likes</Text>
    </View>
     )
}
const styles = StyleSheet.create({
    prof:{
        borderRadius:55,
        width:55,
        height:50,
        borderWidth:3,
        margin:10
    },
    post:{
        width:410,
        height:400
    },
    like:{
        width:30,
        height:30,
        margin:10
    },
    postbody:{
        display:'flex',
        flexDirection:'column',
        margin:10
    },
    posthead:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
    },
    postfooter:{
        display:'flex',
        flexDirection:'row'
    }
})
 
const Feed =()=>{
  const [feedList, setFeedList] = useState<any[]>([]);

useEffect(() => {
  console.log('effect activated');
  const getFeeds = async () => {
    try {
      const {contentResp, errorMessage} = await getFeedsAPI(
        'v1/a2608b7c-9e93-4233-b8d5-fd5e0995a243',
      );
      setFeedList(contentResp);
    
    } catch (error) {
      console.error('Error:', error);
    }
  };
  getFeeds();
}, []);
    return(
        <FlatList
        data={feedList}
        renderItem={({item}) => <Item title={item.title}
                                      feedImage={item.feedImage}
                                      imageUrl={item.imageUrl}
                                      likeCount={item.likeCount}
                                      />}
        keyExtractor={item => item.id}
      />
    )
 
}
export default Feed;