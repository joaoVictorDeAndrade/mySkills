import React from "react";
import { SafeAreaView, View, Dimensions } from "react-native";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

const width = Dimensions.get("window").width

export default function HomeSkeletonPage({ backgroundColor }) {
  return (
    <SafeAreaView style={{flex: 1}} >
      <SkeletonPlaceholder>
        <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 10, paddingTop: 50}}>
          <View style={{ marginLeft: 20 }}>
            <View
              style={{ marginTop: 6, width: 0.4 * width, height: 25, borderRadius: 4 }}
            />
            <View
              style={{ marginTop: 30, width: 0.85 * width, height: 43, borderRadius: 4 }}
            />
            <View
              style={{ marginTop: 6, width: 0.85 * width, height: 43, borderRadius: 4 }}
            />
            <View
              style={{ marginTop: 55, width: 0.3 * width, height:25, borderRadius: 4 }}
            />
          </View>
        </View>
      </SkeletonPlaceholder>
    </SafeAreaView>
  )
}
