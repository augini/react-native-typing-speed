import React from 'react'
import { TextInput, View, StyleSheet } from 'react-native'

interface textInputProps {
  numberOfLines?: number,
  placeholder: string,
  autoFocus?: boolean,
}

const TTTextInput: React.FC<textInputProps>= ({ numberOfLines=1, placeholder, autoFocus }) => {
  if(numberOfLines == 1) {
    return (
      <View style={{ borderWidth: 1, borderColor: 'black' }}>
        <TextInput autoFocus={ autoFocus } numberOfLines={ numberOfLines } placeholder={ placeholder } />
      </View>
    )
  }
  return (
    <View style={ styles.container }>
      <TextInput  numberOfLines={ numberOfLines } placeholder={ placeholder } />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: '100%',
    borderWidth: 1,
    borderColor: 'black'
  }
})

export default TTTextInput