import React from 'react';
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {Dimensions} from 'react-native';
import {height} from '../config/globalStyles';

interface ScreenProps {
  style?: object;
}

const Screen: React.FC<ScreenProps> = ({children, style}) => {
  return (
    <SafeAreaView style={[styles.container, style]}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
      <View style={styles.main}>{children}</View>
    </SafeAreaView>
  );
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? height * 45 : height * 5,
    flex: 1,
  },
  main: {
    flex: 1,
  },
});
