import React from 'react'
import { Animated, Text, View } from 'react-native'
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import { useNavigation } from '@react-navigation/native';

interface TimerProps {
  duration: number,
}

const TTTimer: React.FC<TimerProps> = ({ duration }) => {
  const navigation = useNavigation();

  return (
    <CountdownCircleTimer
      isPlaying
      duration={duration}
      colors={[
        ['#004777', 0.4],
        ['#F7B801', 0.4],
        ['#A30000', 0.2],
      ]}
    >
      {({ remainingTime, animatedColor }) => {
        // console.log(remainingTime)
        if (remainingTime <= 0) {
          console.log('BANG');
          navigation.navigate('Result');
        }
        return (
          <Animated.Text style={{ color: animatedColor }}>
            {remainingTime}
          </Animated.Text>
        )
      }
      }
    </CountdownCircleTimer>
  )
}

export default TTTimer