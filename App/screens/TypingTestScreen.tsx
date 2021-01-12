import React from 'react'
import { Button,StyleSheet, Text, TextInput, View } from 'react-native'

import TTTextInput from '../components/TTTextInput'
import TTText from '../components/TTText'
import TTTimer from '../components/TTTimer'

const TypingTestScreen = () => {
  return (
    <View>
      <Text>Typing Test</Text>
      <TTTimer duration={ 60 } />
      <TTText text='random words generator here' fontSize={ 20 } />
      <TTTextInput autoFocus={ true } numberOfLines={ 1 } placeholder='start typing ... ' />
    </View>
  )
}

export default TypingTestScreen
