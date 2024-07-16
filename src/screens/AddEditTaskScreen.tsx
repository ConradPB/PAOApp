import React from 'react';
// eslint-disable-next-line prettier/prettier
import { View, Text, StyleSheet } from 'react-native';

const AddEditTaskScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add/Edit Task</Text>
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

export default AddEditTaskScreen;
