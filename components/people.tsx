import { View } from "react-native";

import ImageCmp from "./image-cmp";

import { assets } from "@/constants";

const People = () => {
  return (
    <View className="flex-row">
      {[assets.person02, assets.person03, assets.person04].map(
        (imgUrl, index) => (
          <ImageCmp imgUrl={imgUrl} index={index} key={`People-${index}`} />
        ),
      )}
    </View>
  );
};

export default People;
