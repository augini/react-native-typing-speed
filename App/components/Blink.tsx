import React, { Component, useState, useEffect } from "react";
import { Text, View } from "react-native";

type BlinkProps = {
  text: string;
};

type BlinkState = {
  isShowingText: boolean;
};

type StudentState = {
  firstName: string;
  lastName: string;
  age: number;
  school?: string;
}

const Blink = ({ text }: BlinkProps) => {
  const [isShowingText, setIsShowingText] = useState(true) // state's type is inferred to be boolean
  // with other types it is helpful to explicitly specify the state's type
  const [student, setStudent] = useState<StudentState>({ firstName: "John", lastName: "Doe", age: 24 })
  const [input, setInput] = useState<string>("")

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