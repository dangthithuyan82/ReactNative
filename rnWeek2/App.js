/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

followMe = ()=>{
  alert('You clicked follow button');
}

share = ()=>{
  alert('You clicked send button');
}
const imgData = [
  { id: 1, imgSource: require('./assets/avata.jpg') },
  { id: 2, imgSource: require('./assets/img.png') },
  { id: 3, imgSource: require('./assets/img1.jpg') },
  { id: 4, imgSource: require('./assets/avata.jpg') },
  { id: 5, imgSource: require('./assets/img1.jpg') },
  { id: 6, imgSource: require('./assets/img1.jpg') },
  { id: 7, imgSource: require('./assets/avata.jpg') },
  { id: 8, imgSource: require('./assets/img.png') },
  { id: 9, imgSource: require('./assets/img1.jpg') },
];
const centerImgData = Math.floor(imgData.length / 2);

const App: () => React$Node = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./assets/back.png')} style={styles.back}/>
        <Image source={require('./assets/menu.png')} style={styles.menu}/>
      </View>
      <View style={styles.info}>
        <Image style={styles.avatar} source={require('./assets/avata.jpg')}/>
        <View style={styles.information}>
          <Text style={styles.name}>Anna Dang</Text>
          <Text style={styles.job}>Frontend Developer</Text>
          <View style={styles.button}>
            <TouchableOpacity 
              style={styles.btnFollow}
              onPress={followMe}
              >
              <Text style={styles.label}>Follow</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={share}
              style={styles.btnShare}>
              <Image source={require('./assets/send.png')} style={styles.shareIcon}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.numberInfo}>
        <View style={styles.photo}>
          <Text style={styles.numberPhoto}>200</Text>
          <Text>Photos</Text>
        </View>
        <View style={styles.photo}>
          <Text style={styles.numberPhoto}>15k</Text>
          <Text>Followers</Text>
        </View>
        <View style={styles.photo}>
          <Text style={styles.numberPhoto}>600k</Text>
          <Text>Following</Text>
        </View>
      </View>
      <View style={styles.listimages}>
        <ScrollView contentContainerStyle={styles.scrollview}>
          <View style={{flexDirection: 'column', flex: 0.5,}}>
            {
              imgData.slice(centerImgData).map(item=>{
                return <Image source={item.imgSource} style={styles.item}/>
              })
            }
          </View>
          <View style={{flexDirection: 'column', flex:0.5, marginRight:4}}>
            {
              imgData.slice(0, centerImgData).map(item=>{
                return <Image source={item.imgSource} style={styles.item}/>
              })
            }
          </View>
          
        </ScrollView>
      </View>
      
      
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
    marginTop:30,
  },
  header:{
    margin:8,
    justifyContent:'space-between',
    flexDirection:'row',
    flex:0.04,
  },
  info:{
    flex:0.16,
    margin:20,
    flexDirection: 'row',
  },
  listimages:{
    flex:0.7,
    paddingLeft:10
  },
  scrollview:{
    flexDirection: 'row',
  },
  numberInfo:{
    flex:0.1,
    justifyContent:'space-around',
    flexDirection:'row',
  },
  avatar:{
    width:100,
    height:100,
    borderRadius:50,
  },
  information:{
    flexDirection:'column',
    marginLeft:15,
    
  },
  name:{
    fontWeight:'bold',
    marginBottom: 10,
  },
  button:{
    flexDirection:'row',
    marginTop:10,
  },
  btnFollow:{
    backgroundColor: '#018be6',
    fontWeight:'bold',
    width:100,
    marginRight: 20,
    padding: 8,
    justifyContent: 'center',
    alignItems:'center',
    borderRadius:20,
  },
  label:{
    color:'white',
    fontSize:17,

  },
  btnShare:{
    backgroundColor: '#5eb8f4',
    fontWeight:'bold',
    width:60,
    padding: 8,
    justifyContent: 'center',
    alignItems:'center',
    borderRadius:20,
  },
  shareIcon:{
    height:25,
    width:25,
  },
  photo:{
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
  },
  numberPhoto:{
    fontSize: 20,
    fontWeight: 'bold',
  },
  item:{
    height:170,
    width:170,
    marginBottom: 8,
    borderRadius: 10
  }
});

export default App;
