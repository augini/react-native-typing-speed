import React, { useRef } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

interface TextProps {
  text: string,
  fontSize?: number,

}

const ScrollText: React.FC<TextProps> = ({ text, fontSize=14 }) => {
    const scrollViewRef = useRef<null | ScrollView>(null);

    const handleScroll = () => {
        if (scrollViewRef && scrollViewRef.current) {
            scrollViewRef.current.scrollToEnd();
        }
    };

  return (
    <ScrollView 
        ref={scrollViewRef}
        onContentSizeChange={() => handleScroll()}
        style={ styles.container } 
    >
      <Text style={{fontSize: fontSize}}>{ text }</Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: '95%',
    borderWidth: 1,
    borderColor: 'black',
    // overflow: 'scroll',
  }
})

export default ScrollText