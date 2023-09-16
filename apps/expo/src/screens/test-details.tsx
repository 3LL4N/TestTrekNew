import React from "react";
import { SafeAreaView } from "react-native";
import TestDetailsHeader from "../components/headers/TestDetailsHeader";
import TestDetailsImage from "../components/test-details/TestDetailsContent";
import { RootStackScreenProps } from "../types";
import { trpc } from "../utils/trpc";

export const TestDetailsScreen = ({
  route,
}: RootStackScreenProps<"TestDetails">) => {
  const { testId } = route.params;

  const { data: testDetails } = trpc.test.getById.useQuery({ testId });

  if (!testDetails) {
    return null;
  }

  return (
    <SafeAreaView className="flex-1 flex-col">
      <TestDetailsHeader />
      <TestDetailsImage testDetails={testDetails} />
    </SafeAreaView>
  );
};
