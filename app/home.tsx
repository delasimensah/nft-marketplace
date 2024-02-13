import { View, Text } from "react-native";
import { Link } from "expo-router";

const HomeScreen = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>HomeScreen</Text>

      <Link href={{ pathname: "details", params: { name: "Bacon" } }}>
        Go to Details
      </Link>
    </View>
  );
};

export default HomeScreen;
