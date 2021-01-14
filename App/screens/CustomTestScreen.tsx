import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from '../components/Button';

import TTText from '../components/TTText'
import VoiceInput from '../components/VoiceInput';

const CustomTestScreen = () => {
    const [customList, setCustomList] = useState([]);
    const [listening, setListening] = useState(false);
    const [error, setError] = useState('');



    return (
        <>
            <VoiceInput />
            <Button>Finished? Click here</Button>
            <Button>Or click here!</Button>
        </>
    )
}

const styles = StyleSheet.create({

    container: {
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow'
    },
    testWords: {
        padding: 10,

    },
    text: {
        fontSize: 24,
        fontWeight: 'bold'
    },
})

export default CustomTestScreen
