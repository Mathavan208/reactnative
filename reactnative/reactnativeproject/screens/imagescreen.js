import React, { Component } from "react";
import { Image, View, StyleSheet, Text } from "react-native";
function ImageScreen(props) {
  return (
    <View
      style={{ backgroundColor: "#000", flex: 1, justifyContent: "center" }}
    >
      <View style={styles.close}></View>
      <View style={styles.back}></View>
      <Image
        resizeMode="contain"
        source={require("../assets/food.jpg")}
      ></Image>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
  close: {
    width: 50,
    height: 50,
    position: "absolute",
    backgroundColor: "fc5c65",
    top: 20,
    left: 20,
  },
  back: {
    width: 50,
    height: 50,
    position: "absolute",
    backgroundColor: "lightblue",
    top: 20,
    right: 20,
  },
});
export default ImageScreen;
