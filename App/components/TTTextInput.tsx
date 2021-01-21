import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

interface textInputProps {
  numberOfLines?: number;
  placeholder: string;
  autoFocus?: boolean;
  onChangeText: (text: string) => any;
  onSubmitEditing: any;
  inputValue: string;
  editable: boolean;
}

const TTTextInput: React.FC<textInputProps> = ({
  numberOfLines = 1,
  placeholder,
  autoFocus,
  onChangeText,
  onSubmitEditing,
  inputValue,
  editable,
}) => {
  return (
    <View
      style={{ borderWidth: StyleSheet.hairlineWidth, borderColor: 'black' }}>
      <TextInput
        style={styles.input}
        autoFocus={autoFocus}
        numberOfLines={numberOfLines}
        placeholder={placeholder}
        // returnKeyType="next"
        autoCorrect={false}
        autoCapitalize="none"
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        value={inputValue}
        editable={editable}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: '100%',
    borderWidth: 1,
    borderColor: 'black',
  },
  input: {
    fontSize: 18,
    paddingHorizontal: 10,
  },
});

export default TTTextInput;
