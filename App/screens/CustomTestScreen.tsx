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
        <View style={styles.container}>
            <VoiceInput />
            <Button>Finished? Click here</Button>
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
