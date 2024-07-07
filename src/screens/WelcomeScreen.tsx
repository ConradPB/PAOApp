/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

type RootStackParamList = {
  Welcome: undefined;
  SignUp: undefined;
  Login: undefined;
  // other screens...
};

type Props = StackScreenProps<RootStackParamList, 'Welcome'>;

const WelcomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View>
      <Text>Welcome to PÃO</Text>
      <Button title="Sign Up" onPress={() => navigation.navigate('SignUp')} />
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

export default WelcomeScreen;
