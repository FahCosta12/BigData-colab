import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import Item from "../../components/Item";
import Database from "../../Database";

function List({ route, navigation }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    Database.getItems().then((items) => {
      setItems(items);
    });
  }, [route]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Buy list</Text>
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.itemsContainer}
      >
        {items.length === 0 && <Text>List's empty</Text>}
        {items.map((item) => {
          return (
            <Item
              key={item.id}
              id={item.id}
              item={`${item.quantidade} de ${item.descricao}`}
              navigation={navigation}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D93600",
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 20,
  },

  scrollContainer: {
    flex: 1,
    width: "90%",
  },

  itemsContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: "#fff",
  },
});

export default List;
