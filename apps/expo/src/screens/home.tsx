import React from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DiscoverHomeSection from "../components/discover/DiscoverHomeSection";
import TopTrekersHomeSection from "../components/top-trekers/TopTrekersHomeSection";
import MainHeader from "../components/headers/MainHeader";
import PlayQuiz from "../components/playquiz/PlayQuiz";
import Footer from "../components/Footer";

export const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MainHeader />
      <ScrollView>
        <PlayQuiz />
        <DiscoverHomeSection />
        <TopTrekersHomeSection />
      </ScrollView>
      <Footer />
    </SafeAreaView>
  );
};
