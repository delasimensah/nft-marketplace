import { View, Text } from "react-native";
import { Link } from "expo-router";

const HomeScreen = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="font-inter-bold text-3xl">HomeScreen</Text>

      <Link
        className="text-2xl"
        href={{ pathname: "details", params: { name: "Bacon" } }}
      >
        Go to Details
      </Link>
    </View>
  );
};

export default HomeScreen;
