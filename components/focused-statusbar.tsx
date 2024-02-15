import { View, Text, StatusBar } from "react-native";
import React from "react";
import { useIsFocused } from "@react-navigation/core";

interface FocusedStatusBarProps {
  backgroundColor: string;
}

const FocusedStatusBar = ({ backgroundColor }: FocusedStatusBarProps) => {
  const isFocused = useIsFocused();

  return isFocused ? (
    <StatusBar animated backgroundColor={backgroundColor} />
  ) : null;
};

export default FocusedStatusBar;
