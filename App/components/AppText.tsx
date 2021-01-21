import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface AppTextProps {
  text: string;
  size?: number;
  bold?: boolean;
}

const AppText: React.FC<AppTextProps> = ({text, size = 12, bold = false}) => {
  return (
    <View>
      <Text style={{fontSize: size, fontWeight: bold ? '900' : '200'}}>
        {text}
      </Text>
    </View>
  );
};

export default AppText;

const styles = StyleSheet.create({});
