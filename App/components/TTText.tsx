import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import { displayWords } from '../screens/TypingTestScreen';

interface TextProps {
  wordsArr: displayWords[];
  fontSize?: number;
  typingWordIndex?: number;
  wordError: boolean;
}

const TTText: React.FC<TextProps> = ({
  wordError,
  wordsArr,
  typingWordIndex = 0,
  fontSize = 12,
}) => {
  console.log({ wordsArr });
  console.log({ typingWordIndex });
  return (
    <ScrollView style={[styles.container]}>
      <Text style={{ fontSize }}>
        {wordsArr.map((t: displayWords, index: number) => {
          t.key = String(index);

          if (t.index === typingWordIndex) {
            console.log({ wordError });
            return (
              <Text
                key={t.key}
                style={{
                  color: 'black',
                  backgroundColor: wordError ? 'red' : '#cccccc',
                }}>
                {t.text + ' '}
              </Text>
            );
          } else if (index < typingWordIndex) {
            console.log({ t });
            console.log({ index });
            console.log({ typingWordIndex });
            console.log('second if condition');
            return (
              <Text key={t.key} style={{ color: t.correct ? 'green' : 'red' }}>
                {t.text + ' '}
              </Text>
            );
          } else return <Text key={t.key}>{t.text + ' '}</Text>;
        })}
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 270,
    width: '100%',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'black',
    paddingHorizontal: 10,
  },
});

export default TTText;
