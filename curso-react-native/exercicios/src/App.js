import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Simples from "./components/Simples";
import ParImpar from "./components/ParImpar";
import { Inverter, MegaSena } from "./components/Multi";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Simples texto="Flexivel!!" />
        <ParImpar numero={16} />
        <Inverter texto="React Nativo!" />
        <MegaSena numeros={6} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
