import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Avatar} from 'react-native-elements/dist/avatar/Avatar';
import {useSelector} from 'react-redux';
import {COLORS} from '../Constant/Color';
import {FONTS} from '../Constant/Font';
import {Icon} from 'react-native-elements';

const HomeHeader = () => {
  const {userData} = useSelector(state => state.User);
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        paddingHorizontal: 15,
        backgroundColor: COLORS.white,
        elevation: 2,
        paddingVertical: 15,
      }}>
      <Text style={styles.logo}>DEVELOPERS' SIN</Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Icon
          name="notifications"
          type="ionicon"
          color={COLORS.theme}
          containerStyle={{marginRight: 7}}
        />
        <Avatar source={{uri: userData.img}} rounded size="small" />
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  logo: {
    fontFamily: FONTS.Bold,
    color: COLORS.theme,
    fontSize: 22,
  },
});
