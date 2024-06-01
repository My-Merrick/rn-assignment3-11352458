import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";

const TaskItem = ({ title, image }) => (
  <View>
    <ScrollView>
      <View style={styles.taskItem}>
        <Image
          source={{ uri: "https://via.placeholder.com/30" }}
          //   style={styles.icon}
        />
        <Text style={styles.taskText}>{title}</Text>
      </View>
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  taskItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 30,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    // elevation: 5,
    marginHorizontal: 10,
    marginTop: 10,
  },

  taskText: {
    fontSize: 18,
  },
});

export default TaskItem;
