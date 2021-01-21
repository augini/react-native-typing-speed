import React, { useContext, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button } from '../components/Button';

import VoiceInput from '../components/VoiceInput';
import { AppContext } from '../context/AppProvider';

const CustomTestScreen = ({ navigation }) => {
    const [testTime, setTestTime] = useState(30);

    const [context, setContext] = useContext(AppContext) as any;

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

    const handleStartCustomTest = () => {
        const { customText } = context;
        console.log('timer(screen): ', testTime);
        setContext({
            difficulty: -1,
            timer: testTime,
            customText: customText,
        });
        console.log('FINISHED CONTEXT: ', context);
        navigation.navigate("Test");
    }

    return (
        <View style={styles.container}>
            <VoiceInput />
            <Button onPress={handleTestTime}>Time: {testTime} seconds</Button>
            <Button onPress={handleStartCustomTest}>Finished? Click here</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default CustomTestScreen
