import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Image, Pressable } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import store, { increment, decrement } from "./Store";

export default function NumControler() {
  const count = useSelector((state) => state.counter.value); // Access the count state
  const dispatch = useDispatch(); // Get the dispatch function

  return (
    <View style={styles.iconscontainer}>
      <Pressable onPress={() => dispatch(decrement())}>
        <Image
          style={styles.icon1}
          source={require("../assests/minus.png")}
        ></Image>
      </Pressable>
      <Text style={styles.text}>{count}</Text>
      <Pressable onPress={() => dispatch(increment())}>
        <Image
          style={styles.icon1}
          source={require("../assests/plus.png")}
        ></Image>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  iconscontainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    flexDirection: "row",
    padding: 10,
  },

  icon1: {
    padding: 30,
    width: "10",
    height: "10",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: { fontSize: 24, textAlign: "center", padding: 30 },
});
