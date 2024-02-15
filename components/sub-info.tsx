import { View } from "react-native";

import People from "./people";
import EndDate from "./end-date";

const SubInfo = () => {
  return (
    <View className="-mt-6 w-full flex-row justify-between px-[14px]">
      <People />
      <EndDate />
    </View>
  );
};

export default SubInfo;
