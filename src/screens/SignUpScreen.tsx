/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../types';

type Props = StackScreenProps<RootStackParamList, 'SignUp'>;

const SignUpScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View>
      <Text>Sign Up Screen</Text>
    </View>
  );
};

export default SignUpScreen;
