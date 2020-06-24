import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import {
  ListItem,
  ListItemDeleteAction,
  ListItemSeparator,
} from "../components/lists";
import Screen from "../components/Screen";

const initialMessages = [
  {
    id: 1,
    title: "Text1",
    description: "Description",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "Text2",
    description: "Description",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 3,
    title: "Text3",
    description:
      "This library provides an API that exposes mobile platform specific native capabilities of touch & gesture handling and recognition. It allows for defining complex gesture handling and recognition logic that runs 100% in native thread and is therefore deterministic",
    image: require("../assets/mosh.jpg"),
  },
];

const MessagesScreen = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = ({ id }) => {
    // delete message form state
    setMessages(messages.filter((m) => m.id != id));
  };

  // fetching data from api
  const fetchData = () => {};

  // message item click handler
  const handleClick = (item) => {
    console.log(item.title);
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(messages) => messages.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            {...item}
            onPress={() => handleClick(item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
            showChevron
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={fetchData}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({});
export default MessagesScreen;
