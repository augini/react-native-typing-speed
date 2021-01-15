import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'

import { displayWords } from '../screens/TypingTestScreen'


interface TextProps {
  wordsArr: displayWords[],
  fontSize?: number,
  typingWordIndex?: number,
  wordError: boolean
}

const TTText: React.FC<TextProps> = ({ wordError, wordsArr, typingWordIndex = 0, fontSize = 14 }) => {

  useEffect(() => {

  }, [])
  return (
    <ScrollView style={[styles.container]}>
      <Text style={{ fontSize }}>
        {wordsArr.map((t: displayWords, index: number) => {
          t.key = String(index)
          // console.log(t.correct)
          if (t.index == typingWordIndex) return <Text key={t.key} style={{ color: wordError ? 'red' : 'green' }}>{t.text + ' '}</Text>
          else if (index < typingWordIndex) return <Text key={t.key} style={{ color: t.correct ? 'green' : 'red' }}>{t.text + ' '}</Text>
          else return <Text key={t.key}>{t.text + ' '}</Text>

        })}
      </Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: '100%',
    borderWidth: 1,
    borderColor: 'black',
  }
})

export default TTText