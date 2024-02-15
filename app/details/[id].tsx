import { View, Text, SafeAreaView, FlatList } from "react-native";
import { useLocalSearchParams } from "expo-router";

import { RectButton } from "@/components/buttons";
import {
  SubInfo,
  DetailsDesc,
  DetailsBid,
  FocusedStatusBar,
  DetailsHeader,
} from "@/components";

import { SIZES, SHADOWS, NFTData } from "@/constants";

const DetailsScreen = () => {
  const { id } = useLocalSearchParams();

  const data = NFTData.filter((item) => item.id === id)[0];

  return (
    <SafeAreaView className="flex-1">
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />

      <View
        className="absolute bottom-0 w-full items-center justify-center py-[14px]"
        style={{
          backgroundColor: "rgba(255,255,255,0.5)",
          zIndex: 1,
        }}
      >
        <RectButton
          minWidth={170}
          fontSize={SIZES.large}
          style={{ ...SHADOWS.dark }}
        />
      </View>

      <FlatList
        data={data.bids}
        renderItem={({ item }) => <DetailsBid bid={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: SIZES.extraLarge * 3,
        }}
        ListHeaderComponent={() => (
          <>
            <DetailsHeader data={data} />

            <SubInfo />

            <View className="p-[14px]">
              <DetailsDesc data={data} />

              {data.bids.length > 0 && (
                <Text className="text-primary font-inter-semi-bold text-[14px]">
                  Current Bid
                </Text>
              )}
            </View>
          </>
        )}
      />
    </SafeAreaView>
  );
};

export default DetailsScreen;
