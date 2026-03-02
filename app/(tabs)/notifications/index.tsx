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
			"Lorem ipsum dolor sit amet.",
		sub: "Lorem ipsum dolor sit amet,  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
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
				<View style={styles.topBar}>
					<View style={styles.avatar}>
						<Text style={styles.avatarText}>ME</Text>
					</View>
					<Text style={styles.notificationheader}>Notifications</Text>
					<Ionicons name="settings-outline" size={24} color="white"/>
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
							{activeTab === tab && <View style={styles.tabUnderline} />}
						</TouchableOpacity>
					))}
				</View>
			</View>

			<ScrollView>
				{NOTIFICATIONS.map((item) => (
					<View key={item.id} style={styles.container}>
						{item.isEmoji ? (
							<Text>{item.icon}</Text>
						) : (
							<Ionicons name="logo-windows" size={24} />
						)}
						<View style={styles.content}	>

							<View style={styles.header}>
							<Text style={styles.title}>{item.title}</Text>
							{item.time && <Text style={styles.time}>{item.time}</Text>}
							</View>
							{item.sub && <Text style={styles.sub}>{item.sub}</Text>}
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

	topBar:{
	flexDirection:"row",
	justifyContent: "space-between",
	position: "relative",
	alignItems: "center",
	paddingHorizontal: 16,
	paddingTop: 52,
	paddingBottom: 12,
	},

	notificationheader: {
		color: "white",
		fontSize: 15,
		fontWeight: "700",
		position: "absolute",
		left:0,
		right:0,
		textAlign: "center",
	},

	title: {
		flex:1,
		marginRight:6,
		fontSize: 15,
		color: "white",
	},

	header: {
		flexDirection: "row",
		alignItems: "flex-start",
		
	},
	

	sub: {
		fontSize: 14,
		color: "#71767b",
		
	},


	container: {
		flexDirection: "row",
		paddingHorizontal: 16,
		paddingVertical: 12,
		borderBottomWidth: 1,
		borderBottomColor: "#2f3336",
		gap: 12,	
		
	},


	content:{
		flex: 1,
		gap: 4,
	},


	time:{
		fontSize: 14,
		color: "#71767b",
	}
});
