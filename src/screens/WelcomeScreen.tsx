import React from 'react';
// eslint-disable-next-line prettier/prettier
import { View, Text, Button } from 'react-native';
// eslint-disable-next-line prettier/prettier
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Welcome to PAO - Break Bread</Text>
      <Button title="Sign Up" onPress={() => navigation.navigate('SignUp')} />
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

export default WelcomeScreen;

