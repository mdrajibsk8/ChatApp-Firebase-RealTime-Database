//import liraries
import database from '@react-native-firebase/database';
import moment from 'moment';
import React, {useEffect} from 'react';
import {
  FlatList,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Icon} from 'react-native-elements';
import SimpleToast from 'react-native-simple-toast';
import {useSelector} from 'react-redux';
import MsgComponent from '../../Component/Chat/MsgComponent';
import {COLORS} from '../../Component/Constant/Color';
import ChatHeader from '../../Component/Header/ChatHeader';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';

const SingleChat = props => {
  const {userData} = useSelector(state => state.User);

  const {receiverData} = props.route.params;

  // console.log('receiverData', receiverData);

  const [msg, setMsg] = React.useState('');
  const [disabled, setdisabled] = React.useState(false);
  const [allChat, setallChat] = React.useState([]);

  useEffect(() => {
    const onChildAdd = database()
      .ref('/messages/' + receiverData.roomId)
      .on('child_added', snapshot => {
        // console.log('A new node has been added', snapshot.val());
        setallChat(state => [snapshot.val(), ...state]);
      });
    // Stop listening for updates when no longer required
    return () =>
      database()
        .ref('/messages' + receiverData.roomId)
        .off('child_added', onChildAdd);
  }, [receiverData.roomId]);

  const msgvalid = txt => txt && txt.replace(/\s/g, '').length;

  const sendMsg = () => {
    if (msg == '' || msgvalid(msg) == 0) {
      SimpleToast.show('Enter something....');
      return false;
    }
    setdisabled(true);
    let msgData = {
      roomId: receiverData.roomId,
      message: msg,
      from: userData?.id,
      to: receiverData.id,
      sendTime: moment().format(''),
      msgType: 'text',
    };
    updateMessagesToFirebase(msgData);
  };

  const updateMessagesToFirebase = async msgData => {
    const newReference = database()
      .ref('/messages/' + receiverData.roomId)
      .push();
    msgData.id = newReference.key;
    newReference.set(msgData).then(() => {
      let chatListupdate = {
        lastMsg: msgData.message,
        sendTime: msgData.sendTime,
        msgType: msgData.msgType,
      };
      database()
        .ref('/chatlist/' + receiverData?.id + '/' + userData?.id)
        .update(chatListupdate)
        .then(() => console.log('Data updated.'));
      database()
        .ref('/chatlist/' + userData?.id + '/' + receiverData?.id)
        .update(chatListupdate)
        .then(() => console.log('Data updated.'));

      setMsg('');
      setdisabled(false);
    });
  };

  const uploadImage = async () => {
    ImagePicker.openPicker({
      cropping: false,
    }).then(async image => {
      console.log(image);
      let imgName = image.path.substring(image.path.lastIndexOf('/') + 1);
      let ext = imgName.split('.').pop();
      let name = imgName.split('.')[0];
      let newName = name + Date.now() + '.' + ext;
      const reference = storage().ref('chatMedia/' + newName);
      await reference.putFile(image.path);
      const imgUrl = await storage()
        .ref('chatMedia/' + newName)
        .getDownloadURL();
      console.log('url=>>', imgUrl);
      let msgData = {
        roomId: receiverData.roomId,
        message: imgUrl,
        from: userData?.id,
        to: receiverData.id,
        sendTime: moment().format(''),
        msgType: 'image',
      };
      updateMessagesToFirebase(msgData);
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ChatHeader data={receiverData} />
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS == 'ios' ? 'padding' : null}>
        <ImageBackground
          source={require('../../Assets/Background.jpg')}
          style={{flex: 1}}>
          <FlatList
            style={{flex: 1}}
            data={allChat}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index}
            inverted
            renderItem={({item}) => {
              return (
                <MsgComponent sender={item.from == userData.id} item={item} />
              );
            }}
          />
        </ImageBackground>

        <View
          style={{
            backgroundColor: COLORS.theme,
            elevation: 5,
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 7,
            justifyContent: 'space-evenly',
            paddingHorizontal: 10,
          }}>
          <TextInput
            style={{
              backgroundColor: COLORS.white,
              width: '80%',
              borderRadius: 25,
              borderWidth: 0.5,
              borderColor: COLORS.white,
              paddingHorizontal: 15,
              color: COLORS.black,
              height: 48,
              paddingTop: Platform.OS == 'ios' ? 15 : 0,
            }}
            placeholder="type a message"
            placeholderTextColor={COLORS.black}
            multiline={true}
            numberOfLines={5}
            value={msg}
            onChangeText={val => setMsg(val)}
          />

          <TouchableOpacity disabled={disabled} onPress={uploadImage}>
            <Icon color={COLORS.white} name="attach-outline" type="ionicon" />
          </TouchableOpacity>

          <TouchableOpacity disabled={disabled} onPress={sendMsg}>
            <Icon
              color={COLORS.white}
              name="paper-plane-sharp"
              type="ionicon"
            />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.theme,
  },
});

//make this component available to the app
export default SingleChat;
