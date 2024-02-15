import { View, Image } from "react-native";
import { router } from "expo-router";

import SubInfo from "./sub-info";
import EthPrice from "./eth-price";
import NFTTitle from "./nft-title";
import { CircleButton, RectButton } from "./buttons";

import { SIZES, SHADOWS, assets } from "@/constants";

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
      className="m-2 mb-6 bg-white"
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

      <SubInfo />

      <View className="w-full p-[14px]">
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.large}
          subTitleSize={SIZES.small}
        />

        <View className="mt-[14px] flex-row items-center justify-between">
          <EthPrice price={data.price} />

          <RectButton
            minWidth={120}
            fontSize={SIZES.font}
            handlePress={() =>
              router.push({ pathname: "details/[id]", params: { id: data.id } })
            }
          />
        </View>
      </View>
    </View>
  );
};

export default NFTCard;
