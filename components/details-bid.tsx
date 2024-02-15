import { View, Text, Image } from "react-native";

import EthPrice from "./eth-price";

interface DetailsBidProps {
  bid: {
    id: string;
    name: string;
    price: number;
    image: any;
    date: string;
  };
}

const DetailsBid = ({ bid }: DetailsBidProps) => {
  return (
    <View className="my-2 w-full flex-row items-center justify-between px-2">
      <Image
        source={bid.image}
        resizeMode="contain"
        className="h-[48px] w-[48px]"
      />

      <View className="flex-1 items-center px-2">
        <Text className="text-primary font-inter-semi-bold text-xs">
          Bid placed by {bid.name}
        </Text>

        <Text className="text-secondary mt-[3px] font-inter-regular text-[10px]">
          {bid.date}
        </Text>
      </View>

      <EthPrice price={bid.price} />
    </View>
  );
};

export default DetailsBid;
