import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
  View,
  Image,
} from "react-native";

const CategoryButton = ({ title, onPress, image }) => (
  <View>
    {/* <ScrollView> */}
    <TouchableOpacity style={styles.buts} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
      {image && <Image source={image} style={styles.image} />}
    </TouchableOpacity>
    {/* </ScrollView> */}
  </View>
);

const styles = StyleSheet.create({
  buts: {
    backgroundColor: "#FBF9F7",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 800,
  },
  buttonText: {
    color: "black",
    fontSize: 16,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10, // Space between image and text
  },
});

export default CategoryButton;
