import React, { useContext, useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Button} from '../components/Button';
import { AppContext } from '../context/AppProvider';

interface StartProps {
  navigation: {
    navigate: () => void;
  };
}

const StartScreen: React.FC<StartProps> = ({navigation}) => {
  const [difficulty, setDifficulty] = useState(0);
  const [testTime, setTestTime] = useState(60);

  const [context, setContext] = useContext(AppContext) as any;
  console.log('context: ', context)

  const difficultyText = difficulty === 0 ? 'Normal' : 'Hard';

  const handleDifficulty = () => {
    if (difficulty === 0) return setDifficulty(1);
    setDifficulty(0);
  };

  const handleTestTime = () => {
    switch (testTime) {
      case 30:
        setTestTime(60);
        break;
      case 60:
        setTestTime(90);
        break;
      case 90:
        setTestTime(120);
        break;
      case 120:
        setTestTime(30);
        break;
    }
  };

  const handleStartTest = () => {
    setContext({
      difficulty: difficulty,
      timer: testTime,
    });
    navigation.navigate('Test');
  };

  const handleHistory = () => {
    navigation.navigate('Result');
  };

  const handleCustomTest = () => {
    navigation.navigate('CustomText');
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo.png')} />
      <Button onPress={handleStartTest}>Start Test!</Button>
      <Button onPress={handleDifficulty}>Difficulty: {difficultyText}</Button>
      <Button onPress={handleTestTime}>Time: {testTime} seconds</Button>
      <Button onPress={handleHistory}>History</Button>
      <Button onPress={handleCustomTest}>
        Custom Input
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  logo: {
    marginBottom: 50,
  },
});

export default StartScreen;
