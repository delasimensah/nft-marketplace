import { useState } from "react";
import { View, SafeAreaView, FlatList } from "react-native";

import { HomeHeader, NFTCard, FocusedStatusBar } from "@/components";

import { NFTData, COLORS } from "@/constants";

const HomeScreen = () => {
  const [nftData, setNftData] = useState(NFTData);

  const handleSearch = (value: string) => {
    if (value.length === 0) {
      setNftData(NFTData);
    }

    const filteredData = NFTData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase()),
    );

    if (filteredData.length === 0) {
      setNftData(NFTData);
    } else {
      setNftData(filteredData);
    }
  };

  return (
    <SafeAreaView className="flex-1">
      <FocusedStatusBar backgroundColor={COLORS.primary} />

      <View className="flex-1">
        <FlatList
          data={nftData}
          renderItem={({ item }) => <NFTCard data={item} />}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
        />
      </View>

      <View className="absolute bottom-0 left-0 right-0 top-0 -z-10">
        <View className="bg-primary h-[300px]" />

        <View className="flex-1 bg-white" />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
