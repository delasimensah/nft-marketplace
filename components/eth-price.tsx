import { View, Image, Text } from "react-native";

import { assets } from "../constants";

interface EthPriceProps {
  price: number;
}

const EthPrice = ({ price }: EthPriceProps) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image
        source={assets.eth}
        resizeMode="contain"
        className="mr-[2px] h-[20px] w-[20px]"
      />
      <Text className="text-primary font-inter-medium text-[14px]">
        {price}
      </Text>
    </View>
  );
};

export default EthPrice;
