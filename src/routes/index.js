import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo as Icon, FontAwesome as ListIcon } from "@expo/vector-icons";

import Register from "../screens/Register";
import List from "../screens/List";

const Tab = createBottomTabNavigator();

const Routes = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Register") {
            iconName = focused ? "add-to-list" : "pluscircle";
          } else if (route.name === "List") {
            iconName = focused ? "list-alt" : "basket-outline";
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        headerShown: false,
        tabBarActiveTintColor: "#32264d",
        tabBarInactiveTintColor: "#c1bccc",
        tabBarActiveBackgroundColor: "#ebebf5",
        tabBarInactiveBackgroundColor: "#fafafc",
      })}
    >
      <Tab.Screen
        name="Register"
        component={Register}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="add-to-list" size={24} color={color} />
          ),
          tabBarLabel: "Add",
        }}
      />

      <Tab.Screen
        name="List"
        component={List}
        options={{
          tabBarIcon: ({ color, size }) => (
            <ListIcon name="list-alt" size={24} color={color} />
          ),
          tabBarLabel: "Buy",
        }}
      />
    </Tab.Navigator>
  );
};

export default Routes;
