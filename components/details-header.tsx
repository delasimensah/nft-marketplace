import { View, Image } from "react-native";
import { router } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { CircleButton } from "@/components/buttons";

import { assets } from "@/constants";

import { Data } from "@/types";

interface DetailsHeaderProps {
  data: Data;
}

const DetailsHeader = ({ data }: DetailsHeaderProps) => {
  const insets = useSafeAreaInsets();
  return (
    <View className="h-[373px] w-full">
      <Image source={data.image} resizeMode="cover" className="h-full w-full" />

      <CircleButton
        imgUrl={assets.left}
        handlePress={() => router.back()}
        left={15}
        top={insets.left + 15}
      />

      <CircleButton imgUrl={assets.heart} right={15} top={insets.left + 15} />
    </View>
  );
};

export default DetailsHeader;
