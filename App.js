/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NativeModules} from 'react-native';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

var ApplozicChat = NativeModules.ApplozicChat;

var alUser = {
  'userId' : 'testing',   //Replace it with the userId of the logged in user NOTE : userId need to be string and  +,*,? are not allowed chars in userId.
  'password' : '123456789',  //Put password here
  'authenticationTypeId' : 1,
  'deviceApnsType' : 0,    //Set 0 for Development and 1 for Distribution (Release)
};

// ApplozicChat.isUserLogIn((response) => {
//   if (response == "true") {
//     /// User is logged in already
//   } else {
//     /// User is not logged in yet.
//   }
// })
// ApplozicChat.login( alUser , (error, response) => {
//   if(error){
//       //authentication failed callback
//       console.log(error)
//   }else{
//      //authentication success callback
//      console.log(response);
//   }
// })

ApplozicChat.openChatWithUser("testing");

const App = () => {
  return (
    <>
      <View style={styles.sectionContainer}>
        <Text>Launch the app</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
