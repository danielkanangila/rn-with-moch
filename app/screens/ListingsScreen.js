import React from "react";
import { StyleSheet, FlatList } from "react-native";

import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";

const listings = [
  {
    id: 1,
    title: "Red jacket for sale",
    price: 100,
    image: require("./../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch in great condition",
    price: 1000,
    image: require("./../assets/couch.jpg"),
  },
];

const ListingsScreen = () => {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card {...item} subTitle={`$${item.price}`} />
        )}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
    padding: 20,
  },
});

export default ListingsScreen;
