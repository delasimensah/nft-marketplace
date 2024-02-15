import { StatusBar, StatusBarStyle } from "react-native";
import { useIsFocused } from "@react-navigation/core";

interface FocusedStatusBarProps {
  backgroundColor: string;
  barStyle?: StatusBarStyle | null | undefined;
  translucent?: boolean;
}

const FocusedStatusBar = ({
  backgroundColor,
  barStyle,
  translucent,
}: FocusedStatusBarProps) => {
  const isFocused = useIsFocused();

  return isFocused ? (
    <StatusBar
      animated
      backgroundColor={backgroundColor}
      barStyle={barStyle}
      translucent={translucent}
    />
  ) : null;
};

export default FocusedStatusBar;
