import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import Button from './src/components/Button';
import {faMugSaucer} from '@fortawesome/free-solid-svg-icons/faMugSaucer';
import {faUser} from '@fortawesome/free-solid-svg-icons/faUser';
import {faLock} from '@fortawesome/free-solid-svg-icons/faLock';

const image = './src/img/bgImage.png';

const App = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <ImageBackground
        source={require(image)}
        resizeMode="stretch"
        style={{flex: 1}}>
        <View style={styles.container}>
          <Image
            style={styles.logoStyle}
            source={require('./src/img/logo.jpg')}
          />
          {/* <View style={styles.directions}>
            <Text>Log into your acccount.</Text>
          </View> */}

          <View
            style={{
              flexDirection: 'row',
              borderRadius: 30,
              borderWidth: 1,
              borderColor: 'white',
              width: 300,
            }}>
            <FontAwesomeIcon
              icon={faUser}
              color={'white'}
              size={24}
              style={{marginLeft: 20, marginTop: 10}}
            />
            <TextInput
              placeholder="Username"
              autoCorrect={false}
              placeholderTextColor={'white'}
              style={styles.input}
            />
          </View>

          <View style={styles.inputContainer}>
            <FontAwesomeIcon
              icon={faLock}
              color={'white'}
              size={24}
              style={{marginLeft: 20, marginTop: 10}}
            />
            <TextInput
              placeholder="Passsword"
              autocorrect={false}
              placeholderTextColor={'white'}
              style={styles.input}
            />
          </View>

          <View style={styles.frgtPassword}>
            <Text style={{color: 'white'}}>Forgot Password?</Text>
          </View>

          <View>
            <Button style={styles.button1} title="Log In" />
          </View>

          <View>
            <Text style={styles.loginWith}>Login With</Text>
          </View>

          <View style={styles.socialMediaButtons}>
            <TouchableOpacity style={styles.socialButton}>
              {/* <FontAwesomeIcon icon="fa-brands fa-facebook" />
              <Text style={{color: 'black', alignSelf: 'center'}}>
                Facebook
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.socialButton}>
              {/* <FontAwesomeIcon icon="fa-brands fa-twitter" /> */}
              <Text style={{color: 'black', alignSelf: 'center'}}>Twitter</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoStyle: {
    alignSelf: 'center',
    height: 100,
    width: 100,
    marginBottom: 50,
  },
  directions: {
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 30,
  },
  input: {
    height: 50,
    width: 300,
    // justifyContent: 'center',
    // alignItems: 'center'

    // padding: 5,
    fontFamily: 'Tamil Sangam MN',

    borderColor: 'white',
    // marginVertical: 20,
    paddingLeft: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'white',
    width: 300,
    marginTop: 20,
    marginBottom: 5,
  },
  button1: {
    backgroundColor: 'green',
    height: 40,
    width: 75,
  },
  frgtPassword: {
    alignSelf: 'flex-end',
    marginRight: 70,
  },
  loginWith: {
    margin: 15,
    font: 15,
    justifyContent: 'center',
    alignSelf: 'center',
    color: 'white',
  },
  loginButtons: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    borderRadius: 30,
    width: 80,
    height: 30,
  },
  socialButton: {
    backgroundColor: 'white',
    borderRadius: 30,
    width: 120,
    height: 45,
    padding: 10,
    marginRight: 25,
    marginLeft: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialMediaButtons: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    // padding: 5,
  },
});
