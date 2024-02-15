import { useState } from "react";
import { View, Text } from "react-native";

import EthPrice from "./eth-price";
import NFTTitle from "./nft-title";

import { SIZES } from "@/constants";

import { Data } from "@/types";

interface DetailsDescProps {
  data: Data;
}

const DetailsDesc = ({ data }: DetailsDescProps) => {
  const [text, setText] = useState(data.description.slice(0, 100));
  const [readMore, setReadMore] = useState(false);

  return (
    <>
      <View className="w-full flex-row items-center justify-between">
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.extraLarge}
          subTitleSize={SIZES.font}
        />

        <EthPrice price={data.price} />
      </View>

      <View style={{ marginVertical: SIZES.extraLarge * 1.5 }}>
        <Text className="text-primary font-inter-regular text-[14px]">
          Description
        </Text>

        <View className="mt-2">
          <Text className="text-secondary font-inter-regular text-xs">
            {text}

            {!readMore && "..."}

            <Text
              className="text-primary font-inter-semi-bold text-xs"
              onPress={() => {
                if (!readMore) {
                  setText(data.description);
                  setReadMore(true);
                } else {
                  setText(data.description.slice(0, 100));
                  setReadMore(false);
                }
              }}
            >
              {readMore ? " Show Less" : " Read More"}
            </Text>
          </Text>
        </View>
      </View>
    </>
  );
};

export default DetailsDesc;
