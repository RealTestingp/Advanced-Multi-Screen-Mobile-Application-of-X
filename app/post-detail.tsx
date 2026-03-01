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
		<View>
			{/* Top bar */}
			<View>
				<TouchableOpacity onPress={() => router.back()}>
					<Ionicons name="arrow-back" size={24} />
				</TouchableOpacity>
				<Text>Post</Text>
			</View>

			<ScrollView>
				<View>
					{/* Post Author */}
					<View>
						<View style={styles.authorAvatar}>
							<Text style={styles.avatarInitial}>
								{userName?.charAt(0) ?? "?"}
							</Text>
						</View>
						<View>
							<View>
								<Text>{userName}</Text>
								<Ionicons name="checkmark-circle" size={16} />
							</View>
							<Text>{userHandle}</Text>
						</View>
						<TouchableOpacity>
							<Text>Follow</Text>
						</TouchableOpacity>
						<Ionicons name="ellipsis-horizontal" size={20} />
					</View>

					{/* Post body */}
					<Text>{postContent}</Text>

					{/* Timestamp & views */}
					<Text>
						{timeString} · {dateString} · 69 Views
					</Text>

					{/* Stats */}
					<Text>1 Like</Text>

					{/* Action bar */}
					<View>
						<TouchableOpacity>
							<Ionicons name="chatbubble-outline" size={24} />
						</TouchableOpacity>
						<TouchableOpacity>
							<Ionicons name="repeat-outline" size={24} />
						</TouchableOpacity>
						<TouchableOpacity onPress={() => setLiked((l) => !l)}>
							<Ionicons
								name={liked ? "heart" : "heart-outline"}
								size={24}
								color={liked ? "#f91880" : undefined}
							/>
						</TouchableOpacity>
						<TouchableOpacity>
							<Ionicons name="bookmark-outline" size={24} />
						</TouchableOpacity>
						<TouchableOpacity>
							<Ionicons name="share-social-outline" size={24} />
						</TouchableOpacity>
					</View>

					{/* Most relevant replies */}
					<View>
						<Text>Most relevant replies</Text>
						<Ionicons name="chevron-down" size={18} />
					</View>
				</View>
			</ScrollView>

			{/* Reply bar */}
			<View>
				<Text>Post your reply</Text>
				<Ionicons name="camera-outline" size={24} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
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
});
