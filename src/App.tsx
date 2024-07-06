import 'react-native-gesture-handler';
import React from 'react';
// eslint-disable-next-line prettier/prettier
import { NavigationContainer } from '@react-navigation/native';
// eslint-disable-next-line prettier/prettier
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
// eslint-disable-next-line prettier/prettier
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// eslint-disable-next-line prettier/prettier
import { RouteProp } from '@react-navigation/native';
import WelcomeScreen from './screens/WelcomeScreen';
import SignUpScreen from './screens/SignUpScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import SettingsScreen from './screens/SettingsScreen';
import TaskListScreen from './screens/TaskListScreen';
import TaskDetailsScreen from './screens/TaskDetailsScreen';
import AddEditTaskScreen from './screens/AddEditTaskScreen';

// eslint-disable-next-line prettier/prettier
import { RootStackParamList } from './types';

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
    <Tab.Screen name="Settings" component={SettingsScreen} />
  </Tab.Navigator>
);

const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeTabNavigator} />
      <Stack.Screen name="TaskList" component={TaskListScreen} />
      <Stack.Screen name="TaskDetails" component={TaskDetailsScreen} />
      <Stack.Screen name="AddEditTask" component={AddEditTaskScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
