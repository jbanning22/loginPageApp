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
import {faUser} from '@fortawesome/free-solid-svg-icons/faUser';
import {faLock} from '@fortawesome/free-solid-svg-icons/faLock';
import {faFacebook} from '@fortawesome/free-brands-svg-icons/faFacebook';
import {faTwitter} from '@fortawesome/free-brands-svg-icons/faTwitter';

const image = './src/img/bgImage.png';

const App = () => {
  return (
    <View style={styles.screen}>
      <ImageBackground
        source={require(image)}
        resizeMode="stretch"
        style={{flex: 1}}>
        <View style={styles.container}>
          <Image
            style={styles.logoStyle}
            source={require('./src/img/logo.jpg')}
          />

          <View style={styles.inputContainer}>
            <FontAwesomeIcon
              icon={faUser}
              color={'white'}
              size={24}
              style={styles.fontAwesStyle}
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
              style={styles.fontAwesStyle}
            />
            <TextInput
              placeholder="Passsword"
              autocorrect={false}
              placeholderTextColor="white"
              style={styles.input}
            />
          </View>

          <View style={styles.frgtPassword}>
            <Text style={styles.frgtpasswordText}>Forgot Password ?</Text>
          </View>

          <View>
            <Button style={styles.button1} title="Log In" />
          </View>

          <View>
            <Text style={styles.loginWith}>Login With</Text>
          </View>

          <View style={styles.socialMediaButtons}>
            <TouchableOpacity style={styles.socialButton}>
              <FontAwesomeIcon icon={faFacebook} color="#0044FF" size={20} />
              <Text style={styles.textStyle}>Facebook</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.socialButton}>
              <FontAwesomeIcon icon={faTwitter} color="#0091FF" size={20} />
              <Text style={styles.textStyle}>Twitter</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  fontAwesStyle: {
    marginLeft: 20,
    marginTop: 10,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoStyle: {
    alignSelf: 'center',
    height: 150,
    width: 150,
    marginBottom: 50,
    borderRadius: 75,
  },
  directions: {
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 30,
  },
  textStyle: {
    color: 'black',
    alignSelf: 'center',
    marginLeft: 10,
    fontWeight: '200',
  },
  input: {
    height: 50,
    width: 300,
    fontSize: 18,
    color: 'white',
    fontWeight: '300',
    fontFamily: 'Tamil Sangam MN',
    borderColor: 'white',
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
  frgtpasswordText: {
    color: 'white',
    fontWeight: '300',
  },
  loginWith: {
    margin: 15,
    font: 15,
    justifyContent: 'center',
    fontWeight: '300',
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
    flexDirection: 'row',
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
  },
});
