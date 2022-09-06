import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import PickerSelect from "react-native-picker-select";

import Database from "../../Database";

function Register({ route, navigation }) {
  const id = route.params ? route.params.id : undefined;
  const [descricao, setDescricao] = useState("");
  const [quantidade, setQuantidade] = useState("");

  useEffect(() => {
    if (!route.params) return;
    setDescricao(route.params.descricao);
    setQuantidade(route.params.quantidade.toString());
  }, [route]);

  setTipoUnidade(route.params.tipoUnidade ? route.params.tipoUnidade : "Un");
  const [tipoUnidade, setTipoUnidade] = useState("Un");

  function handleDescriptionChange(descricao) {
    setDescricao(descricao);
  }

  function handleQuantifyChange(quantidade) {
    setQuantidade(quantidade);
  }

  function handleTipoUnidade(unidade) {
    setTipoUnidade(unidade);
  }
  tipoUnidade: tipoUnidade;

  async function handleButtonPress() {
    const listItem = {
      descricao,
      quantidade: parseInt(quantidade),
    };
    Database.saveItem(listItem, id).then((_response) =>
      navigation.navigate("List", listItem)
    );

    handleDescriptionChange("");
    handleQuantifyChange("");
    handleTipoUnidade("Un");

    navigation.setParams({
      quantidade: "",
      descricao: "",
      id: undefined,
    });
    tipoUnidade: "Un";
  }

  const checkFields = () => {
    if (descricao.length === 0 || quantidade.length === 0) {
      return true;
    }
    return false;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Items to buy</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={handleDescriptionChange}
          placeholder="What's missing at home?"
          clearButtonMode="always"
          value={descricao}
        />
        <PickerSelect
          onValueChange={(value) => handleTipoUnidade(value)}
          items={[
            { label: "Unidade", value: "Un" },
            { label: "Quilos", value: "Kg" },
          ]}
        />
        <TextInput
          style={styles.input}
          onChangeText={handleQuantifyChange}
          placeholder="Enter the quantity"
          keyboardType={"numeric"}
          clearButtonMode="always"
          value={quantidade.toString()}
        />
        <TouchableOpacity
          disabled={checkFields()}
          style={{
            ...styles.button,
            backgroundColor: checkFields() ? "grey" : "blue",
          }}
          onPress={handleButtonPress}
        >
          <View style={styles.buttonContainer}>
            <Icon name="save" size={22} color="white" />
            <Text style={styles.buttonText}>Save</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D93600",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 50,
  },
  inputContainer: {
    marginTop: 30,
    width: "90%",
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: "stretch",
    backgroundColor: "#fff",
  },
  input: {
    marginTop: 10,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 24,
    fontSize: 16,
    alignItems: "stretch",
  },
  button: {
    marginTop: 10,
    height: 60,
    borderRadius: 10,
    paddingHorizontal: 24,
    fontSize: 16,
    alignItems: "center",
    justifyContent: "center",
    elevation: 20,
    shadowOpacity: 20,
    shadowColor: "#ccc",
  },

  buttonContainer: {
    flexDirection: "row",
  },

  buttonText: {
    marginLeft: 10,
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default Register;
