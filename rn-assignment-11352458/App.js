import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  StyleSheet,
  Button,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";

// Custom components
import CategoryButton from "./components/CategoryButton";
import TaskItem from "./components/TaskItem";

const categories = [
  "Exercise",
  "Study",
  "Code",
  "Cook",
  "Read",
  "Travel",
  "Work",
  "Meditate",
];
const CatImages = {
  Exercise: require("./assets/woman.png"),
  Study: require("./assets/young woman working at desk.png"),
  Code: require("./assets/coding.jpg"),
  Cook: require("./assets/cook.jpg"),
  Read: require("./assets/reading.jpg"),
  Travel: require("./assets/traveling.jpg"),
  Work: require("./assets/working.jpg"),
  Meditate: require("./assets/meditating.jpg"),
};
const tasks = [
  {
    id: "1",
    title: "Mobile App Development",
    category: "code",
    image: require("./assets/woman.png"),
  },
  {
    id: "2",
    title: "React Natwoman",
    category: "Study",
    CatImages: require("./assets/young woman working at desk.png"),
  },
  { id: "3", title: "Build a To-Do App", category: "code" },
  { id: "4", title: "Cook Dinner", category: "Cook" },
  { id: "5", title: "Read a Book", category: "Read" },
  { id: "6", title: "Plan Vacation", category: "Travel" },
  { id: "7", title: "Complete Project Report", category: "Work" },
  { id: "8", title: "Evening Meditation", category: "Meditate" },
  { id: "9", title: "Gym Workout", category: "Exercise" },
  { id: "10", title: "JavaScript Study", category: "Study" },
  { id: "11", title: "Code Review", category: "Code" },
  { id: "12", title: "Bake Cookies", category: "Cook" },
  { id: "13", title: "Finish Novel", category: "Read" },
  { id: "14", title: "Book Flights", category: "Travel" },
  { id: "15", title: "Team Meeting", category: "Work" },
];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredTasks =
    selectedCategory === "All"
      ? tasks
      : tasks.filter((task) => task.category === selectedCategory);

  return (
    <View style={styles.container}>
      <View style={styles.headT}>
        <View style={styles.headText}>
          <Text style={styles.header}>Hello, Devs</Text>

          <Text style={styles.subHeader}>14 Tasks today</Text>
        </View>
        <Image source={require("./assets/Profile.png")} style={styles.image} />
      </View>

      <View style={styles.searchBox}>
        <View style={styles.searchIcon}>
          <Image
            source={require("./assets/search1.png")}
            style={styles.searches}
          />
          <TextInput
            type="text"
            placeholder="Search"
            placeholderTextColor="gray"
            style={styles.search}
          ></TextInput>
        </View>
        <TouchableOpacity style={styles.clicks}>
          <Image
            source={require("./assets/bx_slider.png")}
            style={styles.sls}
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.catsText}>categories</Text>
      <ScrollView horizontal style={styles.categoryContainer}>
        <CategoryButton
          title="All"
          image={require("./assets/all.png")}
          onPress={() => setSelectedCategory("All")}
        />
        {categories.map((category, index) => (
          <CategoryButton
            key={index}
            title={category}
            image={CatImages[category]}
            onPress={() => setSelectedCategory(category)}
          />
        ))}
      </ScrollView>
      {/* item list codes */}
      <Text>Ongoing task</Text>

      <FlatList
        data={filteredTasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TaskItem title={item.title} />}
        contentContainerStyle={styles.taskList}
      />
      <TextInput style={styles.input} placeholder="Add new task" />

      <Button title="Add Task" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#E8D1BA",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    display: "flex",
    flexDirection: "column",
  },
  headText: {
    display: "flex",
  },
  subHeader: {
    display: "block",
    fontSize: 12,
    color: "#666",
    marginBottom: 15,
  },
  headT: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  categoryContainer: {
    marginBottom: 10,
  },
  taskList: {
    marginBottom: 20,
  },
  input: {
    height: 60,
    borderColor: "#ccc",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderBlockColor: "#fff",
    backgroundColor: "pink",
  },
  image: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: 50,
    height: 50,
  },
  search: {
    height: 40,
    borderColor: "#FBF9F7",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 10,
    width: 250,
    marginRight: 20,
    paddingLeft: 40,
    fontWeight: "bold",
  },

  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    justifyContent: "space-between",
  },
  clicks: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 14,
    backgroundColor: "#F0522F",
    width: 50,
    top: 15,
  },
  catsText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  searches: {
    width: 30,
    height: 30,
    marginRight: 10,
    left: 10,
    top: 35,
  },
  searchIcon: {
    display: "flex",
  },
});
/* Task */
