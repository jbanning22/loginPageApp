import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = () => {
  return (
    <View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Let's Go !</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 30,
    width: 300,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    fontFamily: 'Tamil Sangam MN',
    color: 'orangered',
    alignSelf: 'center',
    paddingTop: 5,
    fontWeight: '300',
  },
});
