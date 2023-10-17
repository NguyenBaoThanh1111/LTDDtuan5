import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import logo from "../Facebook/assets/round.png";

export default function a1() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#C7F4F6", "#D1F4F6", "#E5F4F5", "#00CCF9"]}
        locations={[0, 0.3, 0.85, 1]}
        style={styles.container}
      />
      <View style={styles.logo}>
        <img src={logo} alt="Logo" />
      </View>
      <View style={styles.TextSlogan}>
        <Text style={{ fontSize: 25, fontWeight: "bold", textAlign: "center" }}>
          GROW {"\n"} YOUR BUSINESS
        </Text>
      </View>
      <View style={styles.Text}>
        <Text style={{ fontSize: 13, fontWeight: "bold", textAlign: "center" }}>
          We will help you to grow your business using {"\n"} online server{" "}
        </Text>
      </View>
      <View style={styles.Button}>
        <Button title="LOGIN" color="#E3C000"></Button>
        <Button title="SIGN UP" color="#E3C000"></Button>
      </View>
      <view style={styles.question}>
        <Text style={{ fontWeight: "bold", fontSize: "25px" }}>
          HOW WE WORK?
        </Text>
      </view>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#00CCF9",
    alignItems: "center",
    justifyContent: "flex-start",
    width: 400
  },
  TextSlogan: {
    flex: 2,
    fontFamily: "Arial",
    justifyContent: "center",
    alignItems: "center",
  },
  Text: {
    flex: 2,
    fontWeight: "bold",
    fontFamily: "Arial",
    fontSizeL: "55px",
    justifyContent: "center",
  },
  Button: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "200px",
  },
});