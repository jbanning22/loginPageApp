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
    <SafeAreaView style={styles.screen}>
      <ImageBackground source={require(image)} style={{flex: 1}}>
        <View style={styles.container}>
          <Image
            style={styles.logoStyle}
            source={require('./src/img/logo.jpg')}
          />
          <View style={styles.directions}>
            <Text>Log into your acccount.</Text>
          </View>

          {/* <View style={styles.input}> */}
          {/* <FontAwesomeIcon icon="fa-solid fa-user" /> */}
          <TextInput placeholder="Username" style={styles.input} />
          {/* </View> */}

          {/* <View style={styles.input}> */}
          {/* <FontAwesomeIcon icon="fa-solid fa-lock" /> */}
          <TextInput placeholder="Passsword" style={styles.input} />
          {/* </View> */}

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
    marginTop: 100,
  },
  directions: {
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 30,
  },
  input: {
    height: 50,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    padding: 5,
    fontFamily: 'Tamil Sangam MN',
    borderRadius: 30,
    borderColor: 'white',
    marginVertical: 20,
  },
  button1: {
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
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor: 'red',

    width: 20,
  },
});
