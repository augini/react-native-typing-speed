import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ResultCard from '../components/Card/ResultCard';
import Screen from '../components/Screen';

const ResultScreen = () => {
  return (
    <Screen>
      <Text style={styles.header}>Result Screen</Text>
      <Text style={styles.status}>100 WPM</Text>
      <View style={styles.container}>
        <View style={styles.subcontainer}>
          <ResultCard title="Record" data={0} stat={240} up={false} />
          <ResultCard title="WPM" data={546} stat={100} up={true} />
          <ResultCard title="Accuracy" data={89} stat={120} up={false} />
          <ResultCard title="Error" data={10} stat={20} up={false} />
        </View>
      </View>
    </Screen>
  );
};

export default ResultScreen;

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    flex: 1,
    backgroundColor: 'coral',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '40%',
    margin: '10%',
  },
  subcontainer: {
    height: '90%',
    justifyContent: 'space-between',
  },
  status: {
    alignSelf: 'center',
    marginTop: 20,
  },
  header: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: '600',
  },
});
