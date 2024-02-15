import { View, Text } from "react-native";

import { SIZES, SHADOWS } from "@/constants";

const EndDate = () => {
  return (
    <View
      className="max-w-[50%] items-center justify-center bg-white px-[14px] py-2"
      style={{
        borderRadius: SIZES.font,
        ...SHADOWS.light,
        elevation: 1,
      }}
    >
      <Text className="text-primary font-inter-regular text-xs">Ending in</Text>

      <Text className="text-primary font-inter-semi-bold text-base">
        12h 30m
      </Text>
    </View>
  );
};

export default EndDate;
