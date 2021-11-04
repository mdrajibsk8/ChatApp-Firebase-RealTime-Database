import {Container} from 'native-base';
import React, { useState } from 'react';
import { FlatList, StatusBar, StyleSheet } from 'react-native';
import {ListItem, Avatar} from 'react-native-elements';
import SearchBar from 'react-native-elements/dist/searchbar/SearchBar-ios';
import {COLORS} from '../../Component/Constant/Color';
import { FONTS } from '../../Component/Constant/Font';

const listData = [
  {
    name: 'Amy Farha',
    avatar_url:
      'https://images.pexels.com/photos/2811087/pexels-photo-2811087.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    subtitle: 'Hey there, how are you?',
  },
  {
    name: 'Chris Jackson',
    avatar_url:
      'https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    subtitle: 'Where are you?',
  },
  {
    name: 'Jenifar Lawrence',
    avatar_url:
      'https://m.media-amazon.com/images/M/MV5BOTU3NDE5MDQ4MV5BMl5BanBnXkFtZTgwMzE5ODQ3MDI@._V1_.jpg',
    subtitle: 'I am good, how are you?',
  },
  {
    name: 'Tom Holland',
    avatar_url:
      'https://static.toiimg.com/thumb.cms?msid=80482429&height=600&width=600',
    subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
  },
  {
    name: 'Robert',
    avatar_url:
      'https://expertphotography.b-cdn.net/wp-content/uploads/2020/05/male-poses-squint.jpg',
    subtitle: 'Where does it come from?',
  },
  {
    name: 'downey junior',
    avatar_url:
      'https://www.apetogentleman.com/wp-content/uploads/2018/06/male-models-marlon.jpg',
    subtitle: 'Where can I get some?',
  },
  {
    name: 'Ema Watson',
    avatar_url:
      'https://images.unsplash.com/photo-1503104834685-7205e8607eb9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
    subtitle: 'I am good, how are you?',
  },
  {
    name: 'Chris Jackson',
    avatar_url:
      'https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    subtitle: ' If you use this site regularly and would like to help keep the site',
  },
  {
    name: 'Jenifar Lawrence',
    avatar_url:
      'https://m.media-amazon.com/images/M/MV5BOTU3NDE5MDQ4MV5BMl5BanBnXkFtZTgwMzE5ODQ3MDI@._V1_.jpg',
    subtitle: 'Why do we use it?',
  },
  {
    name: 'Tom Holland',
    avatar_url:
      'https://static.toiimg.com/thumb.cms?msid=80482429&height=600&width=600',
    subtitle: ' If you use this site regularly and would like to help keep the site',
  },
];

const AllUser = () => {

  const [search, setsearch] = useState('')  

  const renderItem = ({item}) => (
    <ListItem bottomDivider containerStyle={{paddingVertical:7,marginVertical:2}}>
      <Avatar 
      source={{uri: item.avatar_url}} 
      rounded
      title={item.name}
      size="medium" />
      <ListItem.Content>
        <ListItem.Title style={{fontFamily:FONTS.Medium,fontSize:14}}>
           {item.name}
        </ListItem.Title>
        <ListItem.Subtitle 
        style={{fontFamily:FONTS.Regular,fontSize:12}}  numberOfLines={1}>
          {item.subtitle}
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );

  return (
    <Container style={{flex: 1, backgroundColor: COLORS.white}}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
       <SearchBar
        placeholder="Search by name..."
        onChangeText={(val)=>setsearch(val)}
        value={search}
        containerStyle={styles.searchContainer}
        inputStyle={styles.searchInput}
       />
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        data={listData}
        renderItem={renderItem}
      />
    </Container>
  );
};

export default AllUser;

const styles = StyleSheet.create({
  searchContainer : {elevation:2,backgroundColor:COLORS.white,paddingHorizontal:10},
  searchInput : {fontSize:15,fontFamily:FONTS.Regular,color:COLORS.black,opacity:.7}
});