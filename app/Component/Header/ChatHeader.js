//import liraries
import React, {useState} from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {Icon} from 'react-native-elements';
import {Avatar} from 'react-native-elements/dist/avatar/Avatar';
import Navigation from '../../Service/Navigation';
import {COLORS} from '../Constant/Color';
import {FONTS} from '../Constant/Font';

// create a component
const ChatHeader = props => {
  const {data} = props;

  const [lastSeen, setlastSeen] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={COLORS.theme}
        translucent={false}
      />
      <Icon
        containerStyle={{
          marginHorizontal: 10,
        }}
        name="chevron-back"
        type="ionicon"
        size={25}
        color={COLORS.white}
        onPress={() => Navigation.back()}
      />
      <Avatar source={{uri: data.img}} rounded size="small" />

      <View style={{flex: 1, marginLeft: 10}}>
        <Text
          numberOfLines={1}
          style={{
            color: COLORS.white,
            fontSize: 16,
            fontFamily: FONTS.SemiBold,
            textTransform: 'capitalize',
          }}>
          {data.name}
        </Text>

        {/* <Text
                    style={{ color: COLORS.primaryBackground, fontSize: 10,fontFamily: FONTS.Regular }}
                >
                    {lastSeen}
                </Text> */}
      </View>

      {/* <Icon
                style={{
                    marginHorizontal: 10,
                    color: COLORS.themeColor
                }}
                name="videocam-outline"
                type="Ionicons"
            /> */}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    height: 70,
    backgroundColor: COLORS.theme,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

//make this component available to the app
export default ChatHeader;
