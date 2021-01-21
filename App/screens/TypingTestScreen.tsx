import React, { useState, useContext, useEffect, Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
const randomWords = require('random-words');

import TTTextInput from '../components/TTTextInput';
import TTText from '../components/TTText';
import TTTimer from '../components/TTTimer';
import { AppContext } from '../context/AppProvider';

// interface TypingTestProps {
//   difficulty: number,
//   timer: number,
// }

export interface displayWords {
  text: string;
  done: boolean;
  correct: boolean;
  index: number;
  key?: string;
}

interface TypingTestProps {
  difficulty: number;
  timer: number;
}

const TypingTestScreen: React.FC<TypingTestProps> = () => {
  //context data
  const [context, setContext] = useContext(AppContext) as any;
  const { difficulty, timer, customText } = context;
  //word count states
  const [wordIndex, setWordIndex] = useState<number>(0);
  const [wordError, setWordError] = useState<boolean>(false);
  const [input, setInput] = useState<string>('');
  const [typedWords, setTypedWords] = useState<string[]>([]);
  const [randomText, setRandomText] = useState<displayWords[]>([]);
  const [taps, setTaps] = useState<number>(0);
  const [testTimer, setTestTimer] = useState<number>(timer);
  const [editable, setEditable] = useState<boolean>(true);

  useEffect(() => {
    switch (difficulty) {
      case -1: 
        // console.log('customText: ', customText);
        // console.log('[customText]: ', [customText]);
        handleRandomWords(customText.split(" "));
        break;
      case 0: 
        handleRandomWords(randomWords({ exactly: 300, maxLength: 5 }));
        break;
      case 1:
        handleRandomWords(randomWords({ exactly: 300, maxLength: 10 }));
        break;
    }
  }, []);

  const handleRandomWords = (randomWordsArry: string[]) => {
    console.log('randomWordsArry: ', randomWordsArry);
    let displayWordsStructure = { text: '', done: false, correct: false };
    setRandomText(
      randomWordsArry.map((w: string, index) => {
        return {
          ...displayWordsStructure,
          text: w,
          index,
        };
      }),
    );
  };

  const RestartButton: () => JSX.Element = () => {
    return (
      <Button
        title="restart"
        onPress={() => {
          handleRandomWords(randomWords({ exactly: 300, maxLength: 5 }));
          setTypedWords([]);
          setInput('');
          setTaps(0);
          setWordIndex(0);
          setWordError(false);
          setTestTimer(30);
        }}
      />
    );
  };

  const handleComplete = () => {
    setEditable(false);
  };

  return (
    <View>
      <TTText
        wordsArr={randomText}
        fontSize={20}
        typingWordIndex={wordIndex}
        wordError={wordError}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingRight: 20,
        }}>
        <View style={styles.dataContainer}>
          <Text style={styles.text}>{'Tap: ' + String(taps)}</Text>
          <Text style={styles.text}>
            {'Words: ' + String(typedWords.length)}
          </Text>
          <Text style={[styles.text, { color: 'green' }]}>
            {'Correct: ' + String(typedWords.length)}
          </Text>
          <Text style={[styles.text, { color: 'red' }]}>
            {'Mistakes: ' + String(typedWords.length)}
          </Text>
        </View>

        <View style={{ margin: 5, marginLeft: 10 }}>
          <TTTimer
            duration={testTimer}
            onFinish={() => true}
            onPress={() => {
              console.log('this is pressed');
            }}
            onComplete={handleComplete}
          />
        </View>
      </View>
      <TTTextInput
        inputValue={input}
        autoFocus={true}
        numberOfLines={1}
        placeholder="Start typing ... "
        onChangeText={(text) => {
          setInput(text);
          setTaps(taps + 1);
          //handle error || true case
          if (randomText[wordIndex].text.includes(text, 0)) {
            setWordError(false);
          } else {
            setWordError(true);
          }

          if (text[text.length - 1] == ' ') {
            setInput('');
            setWordIndex(wordIndex + 1);
            setTypedWords([...typedWords, text]);
            if (wordError) {
              randomText[wordIndex].correct = false;
            } else {
              randomText[wordIndex].correct = true;
            }
            randomText[wordIndex].done = true;
            setRandomText(randomText);
          }
        }}
        onSubmitEditing={() => {
          console.log(typedWords);
          console.log('RETURN PRESSED');
        }}
        editable={editable}
        onKeyPress={({ nativeEvent }) => {
          console.log(nativeEvent.key);
        }}
      />
      <RestartButton />
    </View>
  );
};

export default TypingTestScreen;

const styles = StyleSheet.create({
  dataContainer: {
    paddingLeft: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
  },
});
