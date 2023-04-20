import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import CalcKeys from "./component/CalcKeys";
import OperatorKeys from "./component/OperatorKeys";

const App = () => {
  const [state, setState] = useState<any>({
    display: "",
    numerator: "",
    denominator: "",
    operator: "",
    switchFractionSection: false,
  });

  const clear = () => {
    setState((prevState: any) => ({ ...prevState, display: "" }));
  };

  const evaluate = (x: any, y: any, operator: any) => {
    // ...evaluation logic
    const newState = { ...state, switchFractionSection: false };
    switch (operator) {
      case "+":
        newState.display = parseInt(x) + parseInt(y);
        break;
      case "x":
        newState.display = parseInt(x) * parseInt(y);
        break;
      default:
        break;
    }

    // Clear state for next operation
    newState.denominator = "";
    newState.numerator = "";
    setState(newState);
  };

  const addNumber = (x: any) => {
    // ...add number logic
    const newState = { ...state, display: state.display + x };
    if (state.switchFractionSection) {
      newState.denominator = state.denominator + x;
    } else {
      newState.numerator = state.numerator + x;
    }
    setState(newState);
  };

  const operatorSymbol = (x: any) => {
    // ...operator symbol logic
    const newState = {
      ...state,
      display: state.display + x,
      operator: x,
      switchFractionSection: true,
    };

    if (state.numerator === "" && !state.switchFractionSection) {
      newState.numerator = state.display;
    }

    setState(newState);
  };

  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: "#54B435", padding: 50, width: '100%', height: 170 }}>
        <Text style={styles.title}>Calculator</Text>
      </View>
      <View style={{ flex: 1, backgroundColor: "#D6E4E5", position: 'absolute', top: 130, height: '100%', width: '100%', padding: 30, borderTopLeftRadius: 30, borderTopRightRadius: 30 }}>
        <View style={styles.display}>
          <Text style={styles.input}>{state.display}</Text>
        </View>
        <View style={styles.calcKeyRow}>
          <CalcKeys displayKey="1" onClick={() => addNumber("1")} />
          <CalcKeys displayKey="2" onClick={() => addNumber("2")} />
          <CalcKeys displayKey="3" onClick={() => addNumber("3")} />
        </View>
        <View style={styles.calcKeyRow}>
          <CalcKeys displayKey="4" onClick={() => addNumber("4")} />
          <CalcKeys displayKey="5" onClick={() => addNumber("5")} />
          <CalcKeys displayKey="6" onClick={() => addNumber("6")} />
        </View>
        <View style={styles.calcKeyRow}>
          <CalcKeys displayKey="7" onClick={() => addNumber("7")} />
          <CalcKeys displayKey="8" onClick={() => addNumber("8")} />
          <CalcKeys displayKey="9" onClick={() => addNumber("9")} />
        </View>
        <View style={styles.calcKeyRow}>
          <CalcKeys displayKey="0" onClick={() => addNumber("0")} />
          <CalcKeys onClick={() => clear()} displayKey="C" />
          <CalcKeys
            displayKey="="
            onClick={() =>
              evaluate(state.numerator, state.denominator, state.operator)
            }
          />
        </View>
        <View style={styles.calcKeyRow}>
          <OperatorKeys displayKey="+" onClick={() => operatorSymbol("+")} />
          <OperatorKeys displayKey="x" onClick={() => operatorSymbol("x")} />
        </View>
      </View>
      <View style={{ position: 'absolute', bottom: 0, backgroundColor: "#54B435", height: 30, width: "100%", alignItems: "center", padding: 5 }}>
        <Text style={{ color: 'white', textAlign: "center" }}>© 2023 Supriadi. All rights reserved.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    backgroundColor: '#ffff',
    // alignItems: 'center',
    // justifyContent: "space-around",
  },

  display: {
    backgroundColor: "#FFDCB6",
    width: "100%",
    height: "10%",
    borderRadius: 10,
    marginBottom: 20,
    justifyContent: "center"
  },

  title: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 36,
  },
  input: {
    color: "#4d4d4d",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 36,
  },

  calcKeyRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  }
});

export default App;
