/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../types';


type Props = StackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View>
      <Text>Login</Text>
      <Button title="Go to Sign Up" onPress={() => navigation.navigate('SignUp')} />
    </View>
  );
};

export default LoginScreen;
