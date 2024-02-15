import { TouchableOpacity, Text, Image } from "react-native";

import { COLORS, SIZES, FONTS, SHADOWS } from "../constants";

interface RectButtonProps {
  minWidth: number;
  fontSize: number | undefined;
  handlePress: () => void;
}

interface CircleButtonProps {
  imgUrl: any;
  handlePress?: () => void;
  right: number;
  top: number;
}

export const RectButton = (props: RectButtonProps) => {
  const { minWidth, handlePress, fontSize } = props;

  return (
    <TouchableOpacity
      className="bg-primary p-3"
      style={{
        borderRadius: SIZES.extraLarge,
        minWidth,
      }}
      onPress={handlePress}
    >
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: fontSize,
          color: COLORS.white,
          textAlign: "center",
        }}
      >
        Place a bid
      </Text>
    </TouchableOpacity>
  );
};

export const CircleButton = ({
  imgUrl,
  handlePress,
  ...props
}: CircleButtonProps) => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: "absolute",
        borderRadius: SIZES.extraLarge,
        alignItems: "center",
        justifyContent: "center",
        ...SHADOWS.light,
        ...props,
      }}
      onPress={handlePress}
    >
      <Image
        source={imgUrl}
        resizeMode="contain"
        style={{ width: 24, height: 24 }}
      />
    </TouchableOpacity>
  );
};
