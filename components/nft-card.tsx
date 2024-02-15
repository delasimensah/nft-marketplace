import { View, Text, Image } from "react-native";

import { CircleButton } from "@/components";

import { COLORS, SIZES, SHADOWS, assets } from "../constants";

interface NFTCardProps {
  data: {
    id: string;
    name: string;
    creator: string;
    price: number;
    description: string;
    image: any;
    bids: {
      id: string;
      name: string;
      price: number;
      image: any;
      date: string;
    }[];
  };
}

const NFTCard = ({ data }: NFTCardProps) => {
  return (
    <View
      className={`m-2 mb-6 bg-white`}
      style={{ borderRadius: SIZES.font, ...SHADOWS.dark }}
    >
      <View className="h-[250px] w-full">
        <Image
          source={data.image}
          resizeMode="cover"
          className="h-full w-full"
          style={{
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />

        <CircleButton imgUrl={assets.heart} right={10} top={10} />
      </View>
    </View>
  );
};

export default NFTCard;
