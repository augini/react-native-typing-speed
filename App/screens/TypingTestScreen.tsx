import React, { useState, useContext, useEffect } from 'react'
import { Button, StyleSheet, Text, TextInput, View, ScrollView } from 'react-native'
const randomWords = require('random-words');

import TTTextInput from '../components/TTTextInput'
import TTText from '../components/TTText'
import TTTimer from '../components/TTTimer'
import { AppContext } from '../context/AppProvider';

// interface TypingTestProps {
//   difficulty: number,
//   timer: number,
// }


// const TypingTestScreen: React.FC<TypingTestProps> = ({ difficulty = 0, timer = 30 }) => {
  const TypingTestScreen = () => {

  const [typedWords, setTypedWords] = useState<string[]>([])
  const [input, setInput] = useState<string>('')
  const [randomText, setRandomText] = useState<string>('')
  const [taps, setTaps] = useState<number>(0)
  const [wordIndex, setWordIndex] = useState<number>(0)
  const [wordError, setWordError] = useState<boolean>(false)

  const [context, setContext] = useContext(AppContext) as any;
  console.log('context: ', context)

  const { difficulty, timer, customText } = context;

  useEffect(() => {
    // difficulty 0 = normal, 1 = hard, -1 = custom
    switch (difficulty) {
      case -1: setRandomText(customText); break;
      case 0: setRandomText(randomWords({ exactly: 300, maxLength: 5, join: ' ' })); break;
      case 1: setRandomText(randomWords({ exactly: 300, maxLength: 10, join: ' ' })); break;
    }
  }, []);

  return (
    <View>
      <Text>Typing Test</Text>
      <Text>{'tapCount: ' + String(taps)}</Text>
      <Text>{'wordCount: ' + String(typedWords.length)}</Text>
      <TTTimer duration={timer} />
      <TTText text={randomText.split(' ')} fontSize={24} typingWordIndex={wordIndex} wordError={wordError} />
      {/* <Text
        style={{
          color: wordError == 'error' ? 'red' : 'green'
        }}
      >
        {randomText.split(' ')[wordIndex]}
      </Text> */}
      <TTTextInput
        inputValue={input}
        autoFocus={true}
        numberOfLines={1}
        placeholder='start typing ... '
        onChangeText={text => {
          if (text != randomText.split(' ')[wordIndex]) setWordError(true)
          else setWordError(false)
          setTaps(taps + 1)
          if (text[text.length - 1] == ' ') {
            console.log('NEXT WORD')
            setInput('')
            setWordIndex(wordIndex + 1)
            setTypedWords([...typedWords, text])
            return
          }
          setInput(text)
          console.log(text)
        }}
        onSubmitEditing={() => {
          console.log(typedWords)
          console.log('RETURN PRESSED')
        }}
      />
    </View>
  )
}

export default TypingTestScreen
