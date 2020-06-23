import React from "react";
import { View, StyleSheet, Image } from "react-native";

import AppText from "./../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/ListItem";

const ListingDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("./../assets/jacket.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red jacket for sale</AppText>
        <AppText style={styles.subTitle}>$100</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("./../assets/mosh.jpg")}
            title="Mosh Hamedani"
            subTitle="5 listings"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    marginBottom: 7,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
