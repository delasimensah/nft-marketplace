import { View, Text, Image, TextInput } from "react-native";

import { assets } from "../constants";

interface HomeHeaderProps {
  onSearch: (text: string) => void;
}

const HomeHeader = ({ onSearch }: HomeHeaderProps) => {
  return (
    <View className="bg-primary p-[14px]">
      <View className="flex-row items-center justify-between">
        <Image
          source={assets.logo}
          resizeMode="contain"
          className="h-[25px] w-[90px]"
        />

        <View className="h-[45px] w-[45px]">
          <Image
            source={assets.person01}
            resizeMode="contain"
            className="h-full w-full"
          />

          <Image
            source={assets.badge}
            resizeMode="contain"
            className="absolute bottom-0 right-0 h-[15px] w-[15px]"
          />
        </View>
      </View>

      <View className="my-[14px]">
        <Text className="font-inter-regular text-xs text-white">
          Hello Delasi 👋
        </Text>

        <Text className="mt-[4px] font-inter-bold text-lg text-white">
          Let’s find masterpiece Art
        </Text>
      </View>

      <View className="mt-[14px]">
        <View className="bg-gray w-full flex-row items-center rounded-[14px] px-[14px] py-[10px]">
          <Image
            source={assets.search}
            resizeMode="contain"
            className="mr-2 h-[20px] w-[20px]"
          />

          <TextInput
            placeholder="Search NFTs"
            className="flex-1"
            onChangeText={onSearch}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;
