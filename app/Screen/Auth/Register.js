import React, {useEffect, useState} from 'react';
import {
  StatusBar,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  Animated,
  TextInput,
  Image,
} from 'react-native';
import {
  Container,
  Card,
  CardItem,
  Icon,
} from 'native-base';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import { COLORS } from '../../Component/Constant/Color';
import { FONTS } from '../../Component/Constant/Font';
import Navigation from '../../Service/Navigation';

const {width, height} = Dimensions.get('window');

function Register() {

  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [pass, setpass] = useState('');
  const [about, setabout] = useState('');


  return (
    <Container>
      <StatusBar
        backgroundColor={COLORS.theme}
        barStyle="light-content"
        hidden={false}
      />
      <View style={styles.uppercard}>
        <Image 
         style={{width:70,height:70,borderRadius:35}}
         source={{uri:'https://yt3.ggpht.com/yti/APfAmoG-m3--E1zYY977bOWG0FS_syFGSbqjyAbh6dDi=s88-c-k-c0x00ffffff-no-rj-mo'}}   
        />
        <Text 
        style={{color:'#fff',
        fontFamily: FONTS.Bold,
        fontSize:25
        }}>
          DEVELOPERS' SIN
        </Text>
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <KeyboardAwareScrollView
    style={{marginTop:20}}
    showsVerticalScrollIndicator={false}>
        <Card
          style={{
            backgroundColor: '#fff',
            width: width-30,
            borderRadius: 15,
          }}>
          <CardItem style={styles.cardView}>
            <View style={{flex: 1}}>
              <Text style={styles.Login}>Register</Text>
              <Text style={styles.smallTxt}>
                In order to Register your account please fill out all fields
              </Text>
                 <View style={[styles.inputContainer,{marginTop:10}]}>
                    <View style={styles.inputIconView}>
                      <Icon
                        name="person"
                        type="Ionicons"
                        style={{
                          color: '#fff',
                          fontSize: 18,
                          textAlign: 'center',
                        }}
                      />
                    </View>
                    <TextInput
                      style={styles.inputs}
                      placeholder="Enter Full Name"
                      underlineColorAndroid="transparent"
                      onChangeText={value => setname(value)}
                      value={name}
                      placeholderTextColor={COLORS.liteBlack}
                    />
                  </View>
                  <View style={styles.inputContainer}>
                    <View style={styles.inputIconView}>
                      <Icon
                        name="gmail"
                        type="MaterialCommunityIcons"
                        style={{
                          color: '#fff',
                          fontSize: 18,
                          textAlign: 'center',
                        }}
                      />
                    </View>
                    <TextInput
                      style={styles.inputs}
                      placeholder="Enter Email Id"
                      underlineColorAndroid="transparent"
                      onChangeText={value => setemail(value)}
                      value={email}
                      placeholderTextColor={COLORS.liteBlack}
                    />
                  </View>

                  <View style={styles.inputContainer}>
                    <View style={styles.inputIconView}>
                      <Icon
                        name="key"
                        type="MaterialCommunityIcons"
                        style={{
                          color: '#fff',
                          fontSize: 18,
                          textAlign: 'center',
                        }}
                      />
                    </View>
                    <TextInput
                      style={styles.inputs}
                      placeholder="Enter Password"
                      underlineColorAndroid="transparent"
                      onChangeText={value => setpass(value)}
                      value={pass}
                      placeholderTextColor={COLORS.liteBlack}
                    />
                  </View>

                  <View style={styles.inputContainer}>
                    <View style={styles.inputIconView}>
                      <Icon
                        name="md-information-circle"
                        type="Ionicons"
                        style={{
                          color: '#fff',
                          fontSize: 18,
                          textAlign: 'center',
                        }}
                      />
                    </View>
                    <TextInput
                      style={styles.inputs}
                      placeholder="Enter About"
                      underlineColorAndroid="transparent"
                      onChangeText={value => setabout(value)}
                      value={about}
                      placeholderTextColor={COLORS.liteBlack}
                    />
                  </View>
                  
            

              <TouchableOpacity
                style={styles.btn}
                onPress={() => Navigation.navigate('AppStack')}>
                <Text style={styles.btnText}>Register Now</Text>
              </TouchableOpacity>

              <View style={styles.contactView}>
                <Text style={styles.smallTxt}>Existing user?</Text>
                <TouchableOpacity 
                style={{marginLeft: 4}}
                onPress={()=>Navigation.navigate('Login')}>
                  <Text style={styles.register}>Login Now</Text>
                </TouchableOpacity>
              </View>
              <View>

              </View>
            </View>
          </CardItem>
        </Card>
        </KeyboardAwareScrollView>
      </View>
    </Container>
  );
}

export default Register;

const styles = StyleSheet.create({
  uppercard: {
    height: height / 4,
    backgroundColor : COLORS.theme,
    borderBottomLeftRadius: height / 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: height / 2 - 50,
    width: '95%',
    resizeMode: 'cover',
    borderRadius: 13,
  },
  loginBtn: {
    height: 48,
    width: '95%',
    backgroundColor: COLORS.theme,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 6,
  },
  loginText: {
    color : COLORS.lightgray,
    fontSize: 18,
    fontFamily : FONTS.Regular,
  },
  buttonSec: {marginTop: 20, justifyContent: 'center', alignItems: 'center'},
  logo: {
    height: height / 2 - 50,
    width: '95%',
    resizeMode: 'cover',
    borderRadius: 13,
  },

  inputs: {
    borderBottomColor: COLORS.white,
    flex: 1,
    color: COLORS.liteBlack,
    paddingLeft: 10,
    fontFamily : FONTS.Regular,
  },
  inputContainer: {
    borderRadius: 30,
    height:48,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    marginBottom:10,
    elevation: 2,
  },
  inputIconView: {
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor : COLORS.theme,
    height: '100%',
    borderRadius: 30,
    alignSelf: 'center',
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    elevation: 2,
  },
  smallTxt: {
    fontSize: 13,
    color: COLORS.black,
    fontFamily : FONTS.Regular,
    marginTop: 10,
    opacity:.5,
    textAlign: 'center',
  },
  register: {
    fontSize: 13,
    fontFamily : FONTS.SemiBold,
    marginTop: 12,
    textAlign: 'center',
    color : COLORS.textInput,
    textDecorationLine:'underline'
  },
  contactView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  btnText: {
    color: '#fff',
    fontFamily : FONTS.SemiBold,
    fontSize: 14,
    marginTop: 2,
  },
  btn: {
    backgroundColor : COLORS.theme,
    width: '100%',
    height: 50,
    borderRadius: 30,
    elevation: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Login: {
    alignSelf: 'center',
    fontFamily : FONTS.Medium,
    color : COLORS.textInput,
    fontSize: 20,
    marginTop: 10,
  },
  cardView: {
    backgroundColor: '#fff',
    borderRadius: 15,
    paddingBottom: 20,
    paddingTop: 20,
  }
});