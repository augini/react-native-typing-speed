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
  StatusBar,
} from 'react-native';
import StartScreen from './screens/StartScreen';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" hidden />
      <SafeAreaView>
          <StartScreen />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({

});

export default App;
