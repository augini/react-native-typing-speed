// export {default} from '../storybook';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Blink from './components/Blink';
import Hello from './components/Hello';
import FetchExample from './components/Networking'
import CustomTestScreen from './screens/CustomTestScreen';

// screen
import TypingTestScreen from './screens/TypingTestScreen'

export interface User {
  id: string;
  name: string;
  city: string;
}

let users: User[] = [
  { id: '2134', name: 'user 1', city: 'Tokyo' },
  { id: '434', name: "user 2", city: 'Seoul' },
  { id: '434fs', name: "user 3", city: 'Incheon' }
]

const App = () => {
  return (
    <>
        <CustomTestScreen />
      
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
