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

// const TypingTestScreen: React.FC<TypingTestProps> = ({ difficulty = 0, timer = 30 }) => {
const TypingTestScreen: React.FC<TypingTestProps> = () => {
  //context data
  const [context, setContext] = useContext(AppContext) as any;
  const { difficulty, timer, customText } = context;

  const [typedWords, setTypedWords] = useState<string[]>([]);
  const [input, setInput] = useState<string>('');
  const [randomText, setRandomText] = useState<displayWords[]>([]);
  const [taps, setTaps] = useState<number>(0);
  const [wordIndex, setWordIndex] = useState<number>(0);
  const [wordError, setWordError] = useState<boolean>(false);
  const [testTimer, setTestTimer] = useState<number>(timer);

  console.log('context: ', context);

  useEffect(() => {
    difficulty == 0
      ? handleRandomWords(randomWords({ exactly: 300, maxLength: 5 }))
      : handleRandomWords(randomWords({ exactly: 300, maxLength: 10 }));
  }, []);

  const handleRandomWords = (randomWordsArry: string[]) => {
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

  return (
    <View>
      <Text>Typing Test</Text>
      <Text>{'tapCount: ' + String(taps)}</Text>
      <Text>{'wordCount: ' + String(typedWords.length)}</Text>
      <TTTimer
        duration={testTimer}
        onFinish={() => true}
        onPress={() => {
          console.log('this is pressed');
        }}
      />
      <TTText
        wordsArr={randomText}
        fontSize={24}
        typingWordIndex={wordIndex}
        wordError={wordError}
      />
      <TTTextInput
        inputValue={input}
        autoFocus={true}
        numberOfLines={1}
        placeholder="start typing ... "
        onChangeText={(text) => {
          setInput(text);
          setTaps(taps + 1);
          if (text != randomText[wordIndex].text) setWordError(true);
          else setWordError(false);

          if (text[text.length - 1] == ' ') {
            setInput('');
            setWordIndex(wordIndex + 1);
            setTypedWords([...typedWords, text]);
            if (wordError) {
              randomText[wordIndex].correct = false;
              randomText[wordIndex].done = true;
            } else {
              randomText[wordIndex].correct = true;
              randomText[wordIndex].done = true;
            }
            setRandomText(randomText);
          }
        }}
        onSubmitEditing={() => {
          console.log(typedWords);
          console.log('RETURN PRESSED');
        }}
      />
      <RestartButton />
    </View>
  );
};

export default TypingTestScreen;
