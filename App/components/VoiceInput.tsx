import React, { useContext, useEffect, useState } from 'react';
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
import { AppContext } from '../context/AppProvider';

const VoiceInput = () => {
  const [recognized, setRecognized] = useState('');
  const [error, setError] = useState('');
  const [end, setEnd] = useState('');
  const [started, setStarted] = useState('');
  const [results, setResults] = useState([]) as any;
  const [partialResults, setPartialResults] = useState([]) as any;
  const [textSegments, setTextSegments] = useState([]) as any;

  const [context, setContext] = useContext(AppContext) as any;

  useEffect(() => {
    const { testTime } = context;
    setContext({
      difficulty: -1,
      timer: testTime,
      customText: [...textSegments].join(' '),
    });
  }, [textSegments]);

  Voice.onSpeechStart = (e: any) => {
    // console.log('onSpeechStart: ', e);
    // setStarted('√');
  };

  Voice.onSpeechRecognized = (e: SpeechRecognizedEvent) => {
    // console.log('onSpeechRecognized: ', e);
    setRecognized('√');
  };

  Voice.onSpeechEnd = (e: any) => {
    const { timer } = context;
    // setContext({...context , customText: displayText});
    // console.log('NEWCONTEXT: ', context)
  };

  Voice.onSpeechError = (e: SpeechErrorEvent) => {
    // console.log('onSpeechError: ', e);
    setError(JSON.stringify(e.error));
  };

  Voice.onSpeechResults = (e: SpeechResultsEvent) => {
    // console.log('onSpeechResults: ', e);
    console.log('STARTING:')
    setStarted('');
    setResults(e.value);
    // console.log('results:', results);
    if (e && e.value && e.value[0]) {
      setTextSegments((textSegments : any) => [...textSegments, e.value![0]]);
    }
  };

  Voice.onSpeechPartialResults = (e: SpeechResultsEvent) => {
    setStarted('√');
    // console.log('onSpeechPartialResults: ', e);
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
      // console.error(e);
    }
  };

  const _stopRecognizing = async () => {
    try {
      await Voice.stop();
    } catch (e) {
      // console.error(e);
    }
    setStarted('');
    setEnd('');
    console.log("textSegments: ", textSegments)
  };

  const _cancelRecognizing = async () => {
    try {
      await Voice.cancel();
    } catch (e) {
      // console.error(e);
    }
  };
  
  let displayText = (
    started != ''
    ? [...textSegments].join(' ') + ' ' + partialResults[0]
    : [...textSegments].join(' ')
  );

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
    setTextSegments([]);
  };


  console.log('displayText:', displayText)


    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Custom Test Creator</Text>
        <Text style={styles.instructions}> Press the button and start speaking.</Text>
        <Text style={styles.stat}>{error}</Text>
        <ScrollText text={displayText} fontSize={ 24 }/>

        <TouchableHighlight onPress={_startRecognizing}>
          <Image style={styles.button} source={require('./button.png')} />
        </TouchableHighlight>
        <TouchableHighlight onPress={_destroyRecognizer} style={styles.delete}>
          <Text style={styles.action}>Delete</Text>
        </TouchableHighlight>
      </View>
    );
}

const styles = StyleSheet.create({
  button: {
    width: 70,
    height: 70,
    marginVertical: 30,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    width: '100%',
  },
  delete: {
    marginBottom: 30,
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