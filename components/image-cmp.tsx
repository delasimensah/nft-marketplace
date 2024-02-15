import { Image } from "react-native";
import { SIZES } from "@/constants";

interface ImageCmpProps {
  imgUrl: any;
  index: number;
}

const ImageCmp = ({ imgUrl, index }: ImageCmpProps) => {
  return (
    <Image
      source={imgUrl}
      resizeMode="contain"
      className="h-[48px] w-[48px]"
      style={{
        marginLeft: index === 0 ? 0 : -SIZES.font,
      }}
    />
  );
};

export default ImageCmp;
