import UserPost from "@/components/user-post";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { theme } from "../../styles/theme";

const Home = () => {
	return (
		<View style={styles.screen}>
			<View style={styles.header}>
				<View style={styles.avatar}>
					<Text style={styles.avatarText}>ME</Text>
				</View>
				<Text style={styles.logo}>X</Text>
				<Ionicons name="sparkles-outline" size={22} color="white"/>
			</View>

			<ScrollView style={styles.container}>
				<UserPost />
			</ScrollView>
		</View>
	);
};

export default Home;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		backgroundColor: theme.colors.bg
	},
	header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 52,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#2f3336",
  },
  avatar: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#333",
    alignItems: "center",
    justifyContent: "center",
  },
  avatarText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 14,
  },
  logo: {
    color: "#e7e9ea",
    fontSize: 22,
    fontWeight: "800",
  },
});
