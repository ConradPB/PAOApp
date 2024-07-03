import React from 'react';
// eslint-disable-next-line prettier/prettier
import { View, Text, Button } from 'react-native';

// eslint-disable-next-line prettier/prettier
const WelcomeScreen = ({ navigation }) => (
  <View>
    <Text>Welcome Screen</Text>
    <Button title="Login" onPress={() => navigation.navigate('Login')} />
    <Button title="Sign Up" onPress={() => navigation.navigate('SignUp')} />
  </View>
);

export default WelcomeScreen;
