import React, { useState } from 'react';
import { Image, StyleSheet, View } from "react-native";
import { Button } from '../components/Button';

function StartScreen() {
    const [difficulty, setDifficulty] = useState(0);
    const [testTime, setTestTime] = useState(60);

    const difficultyText = difficulty === 0 ? 'Normal' : 'Hard';

    const handleDifficulty = () => {
        if (difficulty === 0) return setDifficulty(1);
        setDifficulty(0);
    }

    const handleTestTime = () => {
        switch (testTime) {
            case 30: setTestTime(60);
                break;
            case 60: setTestTime(90);
                break;
            case 90: setTestTime(120);
                break;
            case 120: setTestTime(30);
                break;
        }
    }

    return (
        <View style={styles.container}>
            <Image 
                style={styles.logo}
                source={require('../assets/logo.png')}
            />
            <Button>Start Test!</Button>
            <Button onPress={handleDifficulty}>Difficulty: {difficultyText}</Button>
            <Button onPress={handleTestTime}>Time: {testTime} seconds</Button>
            <Button>History</Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
    },
    logo: {
        marginBottom: 50,
    }
})

export default StartScreen;