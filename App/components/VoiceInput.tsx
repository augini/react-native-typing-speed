import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';

import Voice, {
  SpeechRecognizedEvent,
  SpeechResultsEvent,
  SpeechErrorEvent,
} from '@react-native-community/voice';
import TTText from './TTText';
import ScrollText from './ScrollText';

const VoiceInput = () => {
  const [recognized, setRecognized] = useState('');
  const [error, setError] = useState('');
  const [end, setEnd] = useState('');
  const [started, setStarted] = useState('');
  const [results, setResults] = useState([]) as any;
  const [partialResults, setPartialResults] = useState([]) as any;


  Voice.onSpeechStart = (e: any) => {
    console.log('onSpeechStart: ', e);
    setStarted('√');
  };

  Voice.onSpeechRecognized = (e: SpeechRecognizedEvent) => {
    console.log('onSpeechRecognized: ', e);
    setRecognized('√');
  };

//   Voice.onSpeechEnd = (e: any) => {
//     console.log('onSpeechEnd: ', e);
//     setEnd('√');
//     setStarted('');
//   };

  Voice.onSpeechError = (e: SpeechErrorEvent) => {
    console.log('onSpeechError: ', e);
    setError(JSON.stringify(e.error));
  };

  Voice.onSpeechResults = (e: SpeechResultsEvent) => {
    console.log('onSpeechResults: ', e);
    setResults(e.value);
  };

  Voice.onSpeechPartialResults = (e: SpeechResultsEvent) => {
    console.log('onSpeechPartialResults: ', e);
    setPartialResults(e.value);
  };

  const _startRecognizing = async () => {
    setRecognized('');
    setError('');
    setStarted('');
    setResults([]);
    setPartialResults([]);
    setEnd('');

    try {
      await Voice.start('en-US');
    } catch (e) {
      console.error(e);
    }
  };

  const _stopRecognizing = async () => {
    try {
      await Voice.stop();
    } catch (e) {
      console.error(e);
    }
    setStarted('');
  };

  const _cancelRecognizing = async () => {
    try {
      await Voice.cancel();
    } catch (e) {
      console.error(e);
    }
  };

  const _destroyRecognizer = async () => {
    try {
      await Voice.destroy();
    } catch (e) {
      console.error(e);
    }
    setRecognized('');
    setError('');
    setStarted('');
    setResults([]);
    setPartialResults([]);
    setEnd('');
  };

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Custom Test Creator</Text>
        <Text style={styles.instructions}> Press the button and start speaking.</Text>
        <Text style={styles.stat}>{error}</Text>
        <ScrollText text={results.length != 0 ? results[0] : partialResults} fontSize={ 32 } />

        <TouchableHighlight onPress={_startRecognizing}>
          <Image style={styles.button} source={require('./button.png')} />
        </TouchableHighlight>
        <TouchableHighlight onPress={_stopRecognizing}>
          <Text style={styles.action}>Stop</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={_destroyRecognizer}>
          <Text style={styles.action}>Delete</Text>
        </TouchableHighlight>
      </View>
    );
}

const styles = StyleSheet.create({
  button: {
    width: 70,
    height: 70,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    fontWeight:  'bold',
  },
  action: {
    textAlign: 'center',
    color: '#0000FF',
    marginVertical: 5,
    fontWeight: 'bold',
    fontSize: 24,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    fontSize: 24,
  },
  stat: {
    textAlign: 'center',
    color: '#B0171F',
    marginBottom: 1,
  },
  textInput: {
    fontSize: 22,
  }
});

export default VoiceInput;