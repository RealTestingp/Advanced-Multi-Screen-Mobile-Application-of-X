import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { theme } from "../../../styles/theme";

const SearchTabs = ["For You", "Trending", "News", "Sports", "Entertainment"];

const Trending = [
	{ id: "1", rank: 1, category: "Politics · Trending", topic: "Trending #1" },
	{ id: "2", rank: 2, category: "Politics · Trending", topic: "Trending #2" },
	{ id: "3", rank: 3, category: "Sports · Trending", topic: "Trending #3" },
	{ id: "4", rank: 4, category: "Politics · Trending", topic: "Trending #4" },
	{ id: "5", rank: 5, category: "Trending in Canada", topic: "Trending #5" },
	{ id: "6", rank: 6, category: "Politics · Trending", topic: "Trending #6" },
	{ id: "7", rank: 7, category: "Politics · Trending", topic: "Trending #7" },
	{ id: "8", rank: 8, category: "Politics · Trending", topic: "Trending #8" },
];

export default function Search() {
	const [activeTab] = useState("Trending");
	const [query, setQuery] = useState("");

	return (
		<View style={styles.screen}>
			<View style={styles.topBar}>
				<View style={styles.avatar}>
					<Text style={styles.avatarText}>ME</Text>
				</View>
				<View style={styles.searchBox}>
					<Ionicons name="search-outline" size={18} color="#71767b" />
					<TextInput
						style={styles.searchInput}
						placeholder="Search X"
						value={query}
						onChangeText={setQuery}
					/>
				</View>
				<Ionicons name="settings-outline" size={24} />
			</View>

			{/* Tabs within Search */}
			<ScrollView
				horizontal
				showsHorizontalScrollIndicator={false}
				style={styles.tabsRow}
				contentContainerStyle={styles.tabsContent}
			>
				{SearchTabs.map((tab) => (
					<TouchableOpacity key={tab} style={styles.tabButton}>
						<Text
							style={[
								styles.tabText,
								activeTab === tab && styles.tabTextActive,
							]}
						>
							{tab}
						</Text>
						{activeTab === tab && <View style={styles.tabUnderLine} />}
					</TouchableOpacity>
				))}
			</ScrollView>
			<FlatList
				data={Trending}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => (
					<View>
						<View>
							<Text>
								{item.rank} · {item.category}
							</Text>
							<Text>{item.topic}</Text>
						</View>
						<Ionicons name="ellipsis-vertical" size={18} />
					</View>
				)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		backgroundColor: theme.colors.bg,
	},
	topBar: {
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 16,
		paddingTop: 52,
		paddingBottom: 12,
		gap: 10,
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
		color: "white",
		fontWeight: "700",
		fontSize: 14,
	},
	searchBox: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		borderRadius: 30,
		paddingHorizontal: 14,
		paddingVertical: 9,
		gap: 8,
	},
	searchInput: {
		flex: 1,
		color: "#e7e9ea",
		fontSize: 16,
	},
	tabsRow: {
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderBottomColor: "#2f3336",
		flexGrow: 0,
	},
	tabsContent: {
		paddingHorizontal: 8,
	},
	tabButton: {
		paddingHorizontal: 16,
		paddingVertical: 14,
		alignItems: "center",
	},
	tabText: {
		color: "#71767b",
		fontSize: 15,
		fontWeight: "600",
	},
	tabTextActive: {
		color: "#e7e9ea",
	},
	tabUnderLine: {
		position: "absolute",
		bottom: 0,
		left: 16,
		right: 16,
		height: 3,
		borderRadius: 2,
		backgroundColor: "#1d9bf0",
	},
});
