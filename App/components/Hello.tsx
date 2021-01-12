import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { User } from '../index'

export interface HelloProps {
  users: User[] | undefined;
}

const Hello = ({ users }: HelloProps) => {
  let myName: string = "Student"

  return (
    <View>
      <Text>{myName}</Text>
      <Text>I will be printing name variable </Text>
      <FlatList
        data={users}
        renderItem={({ item }) => (
          <View>
            <Text>
              {item.name}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default Hello;

const styles = StyleSheet.create({});
