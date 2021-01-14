import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'

interface TextProps {
  text: string[],
  fontSize?: number,
  typingWordIndex?: number,
  wordError: boolean
}

const TTText: React.FC<TextProps> = ({ wordError, text, typingWordIndex = 0, fontSize = 14 }) => {

  useEffect(() => {

  }, [])
  return (
    <ScrollView style={[styles.container]}>
      <Text style={{ fontSize }}>
        {/* <Text style={{ color: 'red' }}>{typingWord + ' '}</Text> */}
        {text.map(t => {
          if (t == text[typingWordIndex]) return <Text style={{ color: wordError ? 'red' : 'green' }}>{t + ' '}</Text>
          else return <Text>{t + ' '}</Text>
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