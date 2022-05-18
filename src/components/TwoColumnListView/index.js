import React from "react";
import { FlatList } from "react-native";
import { Divider } from "react-native-paper";

import ItemView from "./ItemView";

export default function TwoColumnListView({ listStyle, itemList }) {
  return (
    <FlatList
      style={listStyle}
      ListHeaderComponent={
        <ItemView
          style={{ marginBottom: 10, borderBottomWidth: 2 }}
          item={{ name: "Name", measure: "Measure" }}
        />
      }
      data={itemList}
      renderItem={ItemView}
      keyExtractor={(item, index) => index}
      ItemSeparatorComponent={() => <Divider />}
    />
  );
}
