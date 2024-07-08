/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../types';

type Props = StackScreenProps<RootStackParamList, 'SignUp'>;

const SignUpScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Placeholder function for sign-up logic
    // In a real app, you would call your backend API to create the user
    console.log('Signing up:', { email, password });
    // Navigate to another screen after sign up, e.g., Home
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Sign Up" onPress={handleSignUp} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default SignUpScreen;

