import { View, FlatList, TouchableOpacity } from "react-native";
import TopTrekersHomeCard from "./TopTrekersHomeCard";
import SectionHeader from "../headers/SectionHeader";

import { getFullName } from "@acme/utils/src/strings";
import { IMAGE_PLACEHOLDER } from "../../constants";
import { trpc } from "../../utils/trpc";

import type { FC } from "react";
import { useNavigation } from "@react-navigation/native";

const TopTrekersHomeSection: FC = () => {
  const { data: topTrekers } = trpc.user.getTop.useQuery();

  const navigation = useNavigation();

  if (!topTrekers) {
    return <></>;
  }

  return (
    <View>
      <SectionHeader
        title="Top Trekers"
        hasViewAll={true}
        onViewAllPress={() => {
          navigation.navigate("ViewAll", { fetchedData: "topTrekers" });
        }}
      />
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={topTrekers.map((treker) => ({
          id: treker.id,
          name: getFullName(treker.firstName, treker.lastName),
          imageSource: treker.imageUrl,
        }))}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <TopTrekersHomeCard
              imageSource={{
                uri: item.imageSource ?? IMAGE_PLACEHOLDER,
              }}
              name={item.name}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default TopTrekersHomeSection;
