import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

const featuredPosts = [
  {
    id: "1",
    title: "Exploring React Native",
    description: "Learn how to build amazing mobile apps with React Native.",
    time: "2 hours ago",
    image: require("../assets/img1.jpg"),
  },
  {
    id: "2",
    title: "UI/UX Design Tips",
    description:
      "Discover the best practices for designing user-friendly interfaces.",
    time: "5 hours ago",
    image: require("../assets/img2.jpg"),
  },
  {
    id: "3",
    title: "State Management in React",
    description:
      "A deep dive into state management using Redux and Context API.",
    time: "1 day ago",
    image: require("../assets/img3.jpg"),
  },
];

export default function HomeScreen() {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = featuredPosts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {showSearchBar ? (
          <View style={styles.searchBarContainer}>
            <TextInput
              style={styles.searchBar}
              placeholder="Search posts..."
              placeholderTextColor="#999"
              value={searchQuery}
              onChangeText={setSearchQuery}
              autoFocus={true}
            />
          </View>
        ) : (
          <Text style={styles.headerTitle}>Featured Posts</Text>
        )}
        <TouchableOpacity
          onPress={() => {
            setShowSearchBar((prevState) => !prevState);
            setSearchQuery("");
          }}
        >
          <Ionicons
            name={showSearchBar ? "close" : "search"}
            size={24}
            color="#3c2eff"
          />
        </TouchableOpacity>
      </View>

      <FlatList
        data={filteredPosts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.postCard}>
            <Image source={item.image} style={styles.postImage} />
            <View style={styles.postContent}>
              <Text style={styles.postTitle}>{item.title}</Text>
              <Text style={styles.postDescription}>{item.description}</Text>
              <View style={styles.postFooter}>
                <Ionicons name="time" size={16} color="#666" />
                <Text style={styles.postTime}>{item.time}</Text>
              </View>
            </View>
          </View>
        )}
        contentContainerStyle={styles.postList}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No posts found.</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#3c2eff",
  },
  searchBarContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
  searchBar: {
    flex: 1,
    height: 40,
    borderColor: "#3c2eff",
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 15,
    marginRight: 10,
    fontSize: 16,
    color: "#333",
  },
  postList: {
    padding: 20,
  },
  postCard: {
    backgroundColor: "#fff",
    borderRadius: 15,
    marginBottom: 20,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  postImage: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  postContent: {
    padding: 15,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  postDescription: {
    fontSize: 14,
    color: "#666",
    marginBottom: 10,
  },
  postFooter: {
    flexDirection: "row",
    alignItems: "center",
  },
  postTime: {
    fontSize: 12,
    color: "#666",
    marginLeft: 5,
  },
  emptyText: {
    textAlign: "center",
    fontSize: 16,
    color: "#666",
    marginTop: 20,
  },
});
