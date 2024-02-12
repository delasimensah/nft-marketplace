import { Text, View } from "react-native";

export { ErrorBoundary } from "expo-router";

const RootLayout = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>Root Layout</Text>
    </View>
  );
};

export default RootLayout;
