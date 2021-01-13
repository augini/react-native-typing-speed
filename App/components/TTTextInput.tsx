import React from 'react'
import { TextInput, View, StyleSheet } from 'react-native'

interface textInputProps {
  numberOfLines?: number,
  placeholder: string,
  autoFocus?: boolean,
  onChangeText: (text: string) => any,
  onSubmitEditing: any,
  inputValue: string,
}

const TTTextInput: React.FC<textInputProps> = ({ numberOfLines = 1, placeholder, autoFocus, onChangeText, onSubmitEditing, inputValue }) => {
  return (
    <View style={{ borderWidth: 1, borderColor: 'black' }}>
      <TextInput
        autoFocus={autoFocus}
        numberOfLines={numberOfLines}
        placeholder={placeholder}
        // returnKeyType="next"
        autoCorrect={false}
        autoCapitalize='none'
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        value={inputValue}
      />
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