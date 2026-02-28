import React from "react";
import { Image, ImageSourcePropType, Pressable, StyleSheet, Text, View } from "react-native";
import { theme } from "../styles/theme";
import { useRouter } from "expo-router";

type AppPostProps = {
	userName: string;
	userHandle: `@${string}`;
	postContent: string;
	profileImage: ImageSourcePropType;
};

const CardPost = ({ userName, userHandle, postContent }: AppPostProps) => {
  const router = useRouter();

  return (
    <Pressable onPress={() => router.push({ pathname: "/post-detail", params: { userName, userHandle, postContent } })}>
      <View style={styles.container}>
        <View style={styles.avatar}>
          <Text style={styles.avatarInitial}>{userName.charAt(0)}</Text>
        </View>

        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.userName}>{userName}</Text>
            <Text style={styles.userHandle}>{userHandle}</Text>
          </View>
          <Text style={styles.postContent}>{postContent}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default CardPost;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    gap: 12,
  },
	avatar: {
  width: 46,
  height: 46,
  borderRadius: 23,
  backgroundColor: "#333",
  alignItems: "center",
  justifyContent: "center",
},
  content: {
    flex: 1,
    gap: 4,
  },
  header: {
    flexDirection: "row",
    alignContent: "center",
    gap: 6,
  },
  userName: {
    fontWeight: "700",
    fontSize: 15,
    color: "black",
  },
  userHandle: {
    fontSize: 14,
    color: "gray",
  },
  postContent: {
    fontSize: 15,
    lineHeight: 22,
    color: "black",
  },
  avatarInitial: {
    color: "white",
    fontWeight: "700",
    fontSize: 17,
  },
});
