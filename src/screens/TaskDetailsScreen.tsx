import React from 'react';
// eslint-disable-next-line prettier/prettier
import { View, Text, StyleSheet } from 'react-native';

const TaskDetailsScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task Details</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default TaskDetailsScreen;
