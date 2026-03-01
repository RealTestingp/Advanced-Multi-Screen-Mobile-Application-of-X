import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { theme } from "../../../styles/theme";

const NotificationTabs = ["All", "Mentions"];

const NOTIFICATIONS = [
	{
		id: "1",
		icon: "logo-x",
		isEmoji: false,
		title:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		time: "4d",
	},
	{
		id: "2",
		icon: "⚡",
		isEmoji: true,
		title:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		sub: "Lorem ipsum dolor sit amet.",
		time: "3w",
	},
	{
		id: "3",
		icon: "🎉",
		isEmoji: true,
		title: "It's your X anniversary! Celebrate with a special post",
		time: null,
	},
];

export default function Notifications() {
	const [activeTab] = useState("All");

	return (
		<View style={styles.screen}>
			<View>
				<View>
					<View style={styles.avatar}>
						<Text style={styles.avatarText}>Y</Text>
					</View>
					<Text>Notifications</Text>
					<Ionicons name="settings-outline" size={24} />
				</View>

				<View style={styles.tabsRow}>
					{NotificationTabs.map((tab) => (
						<TouchableOpacity key={tab} style={styles.tabButton}>
							<Text
								style={[
									styles.tabText,
									activeTab === tab && styles.tabTextActive,
								]}
							>
								{tab}
							</Text>
						</TouchableOpacity>
					))}
				</View>
			</View>

			<ScrollView>
				{NOTIFICATIONS.map((item) => (
					<View key={item.id}>
						{item.isEmoji ? (
							<Text>{item.icon}</Text>
						) : (
							<Ionicons name="logo-windows" size={24} />
						)}
						<View>
							<Text>{item.title}</Text>
							{item.time && <Text>{item.time}</Text>}
							{item.sub && <Text>{item.sub}</Text>}
						</View>
					</View>
				))}
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		backgroundColor: theme.colors.bg,
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
	tabsRow: {
		flexDirection: "row",
		borderBottomWidth: 1,
		borderBottomColor: "#2f3336",
	},
	tabButton: {
		flex: 1,
		alignItems: "center",
		paddingVertical: 14,
	},
	tabText: {
		color: "#71767b",
		fontSize: 15,
		fontWeight: "600",
	},
	tabTextActive: {
		color: "#e7e9ea",
	},
	tabUnderline: {
		position: "absolute",
		bottom: 0,
		left: "25%",
		right: "25%",
		height: 3,
		borderRadius: 2,
		backgroundColor: "#1d9bf0",
	},
});
