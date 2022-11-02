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
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Button from './src/components/Button';

const image = './src/img/bgImage.png';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <ImageBackground source={require(image)} resizeMode="cover">
          <Image
            style={styles.logoStyle}
            source={require('./src/img/logo.jpg')}
          />
          <View style={styles.directions}>
            <Text>Log into your acccount.</Text>
          </View>

          <View style={styles.box1}>
            {/* <FontAwesomeIcon icon="fa-solid fa-user" /> */}
            <TextInput style={{placeholder: 'Username'}}>Username</TextInput>
          </View>

          <View style={styles.box2}>
            {/* <FontAwesomeIcon icon="fa-solid fa-lock" /> */}
            <Text>Password</Text>
          </View>

          <View style={styles.frgtPassword}>
            <Text>Forgot Password?</Text>
          </View>

          <View>
            <Button style={styles.button1} title="Log In" />
          </View>

          <View>
            <Text style={styles.loginWith}>Login With</Text>
          </View>

          <View style={styles.socialMediaButtons}>
            <TouchableOpacity>
              {/* <FontAwesomeIcon icon="fa-brands fa-facebook" /> */}
              <Text>Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              {/* <FontAwesomeIcon icon="fa-brands fa-twitter" /> */}
              <Text>Twitter</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
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
    marginTop: 100,
  },
  directions: {
    alignSelf: 'center',
    marginTop: 30,
  },
  box1: {
    height: 50,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
    marginTop: 200,
    marginBottom: 30,
    padding: 5,
    fontFamily: 'Tamil Sangam MN',
    borderRadius: 30,
    borderColor: 'white',
  },
  box2: {
    height: 50,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
    marginBottom: 10,
    fontFamily: 'Tamil Sangam MN',
    borderRadius: 30,
    borderColor: 'white',
  },
  button1: {
    flex: 1,
    backgroundColor: 'green',
    height: 40,
    width: 75,
  },
  frgtPassword: {
    alignSelf: 'flex-end',
    marginRight: 25,
  },
  loginWith: {
    margin: 15,
    font: 15,
    justifyContent: 'center',
    alignSelf: 'center',
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
  socialMediaButtons: {
    flexDirection: 'row',
    width: 20,
  },
});
