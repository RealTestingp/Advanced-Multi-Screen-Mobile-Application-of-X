import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import {
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";

export default function PostDetail() {
	const router = useRouter();
	const [liked, setLiked] = useState(false);
	const { userName, userHandle, postContent } = useLocalSearchParams<{
		userName: string;
		userHandle: string;
		postContent: string;
	}>();

	const timeString = "10:00 AM";
	const dateString = "28 Feb 26";

	return (
		<View style={styles.screen}>
			{/* Top bar */}
			<View style={styles.topBar}>
				<TouchableOpacity onPress={() => router.back()}>
					<Ionicons name="arrow-back" size={24} color="#e7e9ea" />
				</TouchableOpacity>
				<Text style={styles.postheader}>Post</Text>
			</View>

			<ScrollView>
				<View>
					{/* Post Author */}
					<View style={styles.authorRow}>
						<View style={styles.authorAvatar}>
							<Text style={styles.avatarInitial}>
								{userName?.charAt(0) ?? "?"}
							</Text>
						</View>
						<View style={styles.nameSection}>
							<View style={styles.nameRow}>
								<Text style={styles.username}>{userName}</Text>
								<Ionicons name="checkmark-circle" size={16} color="#1d9bf0" />
							</View>
							<Text style={styles.sub}>{userHandle}</Text>
						</View>
						<TouchableOpacity style={styles.followbutton}>
							<Text style={styles.buttonText}	>Follow</Text>
						</TouchableOpacity>
						<Ionicons name="ellipsis-vertical" size={20} color="#71767b" />
					</View>

					{/* Post body */}
					<Text style={styles.posttext}>{postContent}</Text>

					{/* Timestamp & views */}
					<Text style={styles.text}>
						{timeString} · {dateString} · 69 Views
					</Text>

					{/* Stats */}
					<Text style={styles.posttext}>1 Like</Text>

					{/* Action bar */}
					<View style={styles.actionrow}>
						<TouchableOpacity>
							<Ionicons name="chatbubble-outline" size={24} color="#71767b"/>
						</TouchableOpacity>
						<TouchableOpacity>
							<Ionicons name="repeat-outline" size={24} color="#71767b" />
						</TouchableOpacity>
						<TouchableOpacity onPress={() => setLiked((l) => !l)}>
							<Ionicons
									name={liked ? "heart" : "heart-outline"}
								size={24}
								color={liked ? "#f91880" : "#71767b"}
							/>
						</TouchableOpacity>
						<TouchableOpacity>
							<Ionicons  name="bookmark-outline" size={24} color="#71767b"/>
						</TouchableOpacity>
						<TouchableOpacity>
							<Ionicons name="share-social-outline" size={24} color="#71767b"/>
						</TouchableOpacity>
					</View>

					{/* Most relevant replies */}
					<View>
						<TouchableOpacity style={styles.replyRow}>
							<Text style={styles.sub}>Most relevant replies</Text>
							<Ionicons name="chevron-down" size={18} color="#71767b"/>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>

			{/* Reply bar */}
			<View style={styles.postreplay}>
				<Text style={styles.reply}>Post your reply</Text>
				<Ionicons name="camera-outline" size={24} color= "#1d9bf0" />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({

	screen: {
			flex: 1,
			backgroundColor:"#0e1117",
			//backgroundColor: theme.colors.bg,
		},
	authorAvatar: {
		width: 46,
		height: 46,
		borderRadius: 23,
		backgroundColor: "#333",
		alignItems: "center",
		justifyContent: "center",
	},
	avatarInitial: {
		color: "white",
		fontWeight: "700",
		fontSize: 17,
	},

	topBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 52,
    paddingBottom: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#2f3336",
	},

	postheader: {
		color: "white",
		fontSize: 15,
		fontWeight: "700",
		position: "absolute",
		left:0,
		right:0,
		textAlign: "center",
	},

	actionrow:{
	flexDirection: "row",
	justifyContent: "space-around",
	alignItems: "center",
	paddingVertical: 12,
	paddingHorizontal: 14,
	borderTopWidth: StyleSheet.hairlineWidth,
	borderTopColor: "#2f3336",
	borderBottomWidth: StyleSheet.hairlineWidth,
	borderBottomColor: "#2f3336",
	marginTop: 12,
	marginBottom: 12,
	marginRight: 16,
	marginLeft: 16,
	},


	username:{
		color: "white",
		fontWeight: "700",
		fontSize: 16,
		paddingTop: 20,
	},

	sub:{
		color: "#71767b",
		fontSize: 16,
	
	},

	followbutton:{
		borderRadius: 20,
		paddingHorizontal: 14,
		paddingVertical: 6,
		borderWidth: 1,
		backgroundColor:"white",
		alignItems: "center",
		justifyContent: "center",

	},

	buttonText:{
		color: "#0e1117",
		fontWeight: "600",
		fontSize: 14,
	},

	authorRow:{
		flexDirection: "row",
		alignItems: "center",
		gap: 12,
		marginBottom: 12,
		paddingHorizontal: 16,
	},
	nameRow:{
	flexDirection: "row",
	alignItems: "center",
	gap: 6,
	},
	
	nameSection:{
		flex:1,
	},
	
	posttext:{ 
		color: "white",
		fontSize: 18,
		lineHeight: 20,

		marginBottom: 12,
		marginRight: 16,
		marginLeft: 16,
		borderBottomWidth:StyleSheet.hairlineWidth,	
		borderBottomColor: "#2f3336",
		paddingBottom: 12,
		
	},
	
	text:{
		color: "#71767b",
		fontSize:16,
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderBottomColor: "#2f3336",
		paddingBottom: 12,
		marginBottom: 12,
		marginRight: 16,
		marginLeft: 16,
	},

	replyRow:{
		flexDirection: "row",
		alignItems: "center",
		gap: 6,
		paddingHorizontal: 16,
		paddingVertical: 12,
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderBottomColor:  "#2f3336",
		marginLeft: 16,
		marginRight: 16,
	},

	postreplay:{
		flexDirection: "row",
		alignItems: "flex-start",
		paddingHorizontal: 16,
		paddingVertical: 12,
		borderTopWidth: StyleSheet.hairlineWidth,
		borderTopColor: "#204d4d",
	},

	reply:{
		flex:1,
		color: "#7a8086",
		fontSize: 16,
	},






});
