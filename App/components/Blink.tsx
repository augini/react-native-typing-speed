import React, { Component, useState, useEffect } from "react";
import { Text, View } from "react-native";

type BlinkProps = {
  text: string;
};

type BlinkState = {
  isShowingText: boolean;
};

const Blink = ({ text }: BlinkProps) => {
  const [isShowingText, setIsShowingText] = useState(true) // state's type is inferred to be boolean
  // with other types it is helpful to explicitly specify the state's type
  // const [isShowingText, setIsShowingText] = useState<BlinkState>({ isShowingText: true})
  useEffect(() => {
    let interval = setInterval(() => (
      setIsShowingText(previousState => !previousState)
    ), 1000);
    return () => clearInterval(interval) // class component forgot to cleanup the interval
  })

  if (isShowingText) return null

  return (
    <Text>{text}</Text>
  );
}

export default Blink;