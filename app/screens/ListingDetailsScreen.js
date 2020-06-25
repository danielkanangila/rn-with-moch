import React from "react";
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { Image } from "react-native-expo-image-cache";

import AppText from "./../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/lists/ListItem";
import ContactSellerForm from "../components/ContactSellerForm";

const ListingDetailsScreen = ({ route }) => {
  const listing = route.params;

  return (
    <ScrollView style={styles.container}>
      <KeyboardAvoidingView>
        <Image
          style={styles.image}
          preview={{ uri: listing.images[0].thumbnailUrl }}
          tint="light"
          uri={listing.images[0].url}
        />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{listing.title}</AppText>
          <AppText style={styles.subTitle}>${listing.price}</AppText>
          <View style={styles.userContainer}>
            <ListItem
              image={require("./../assets/mosh.jpg")}
              title="Mosh Hamedani"
              description="5 listings"
            />
          </View>
          <ContactSellerForm listing={listing} />
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
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
