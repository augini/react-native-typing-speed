import React, { useState } from 'react';
import { Animated, TouchableOpacity } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import { useNavigation } from '@react-navigation/native';

interface TimerProps {
  duration: number;
  onFinish: () => any;
  onPress?: () => any;
  onComplete?: () => void;
}

const TTTimer: React.FC<TimerProps> = ({
  duration,
  onFinish,
  onPress,
  onComplete,
}) => {
  const [timer, setTimer] = useState<number>(duration);

  return (
    <TouchableOpacity
      onPress={() => {
        setTimer(30);
      }}>
      <CountdownCircleTimer
        size={42}
        strokeWidth={4}
        onComplete={onComplete}
        isPlaying
        duration={timer}
        colors={[
          ['#004777', 0.4],
          ['#F7B801', 0.4],
          ['#A30000', 0.2],
        ]}>
        {({ remainingTime, animatedColor }) => {
          // console.log('REMAINGING TIME', remainingTime)
          if (remainingTime == 0) onFinish();
          return (
            <Animated.Text style={{ color: animatedColor }}>
              {remainingTime}
            </Animated.Text>
          );
        }}
      </CountdownCircleTimer>
    </TouchableOpacity>
  );
};

export default TTTimer;
