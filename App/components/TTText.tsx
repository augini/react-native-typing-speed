import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface TextProps {
  text: string,
  fontSize?: number,

}

const TTText: React.FC<TextProps> = ({ text, fontSize=14 }) => {
  return (
    <View style={ styles.container }>
      <Text>{ text }</Text>
    </View>
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