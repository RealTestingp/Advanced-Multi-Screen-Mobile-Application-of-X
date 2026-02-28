import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

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
    <ScrollView>
      <View>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} />
        </TouchableOpacity>
        <Text>{userName}</Text>
        <Text>{userHandle}</Text>
        <Text>{postContent}</Text>
        <Text>{timeString}</Text>
        <Text>{dateString}</Text>

        <TouchableOpacity>
          <Ionicons name="chatbubble-outline" size={24} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Ionicons name="repeat-outline" size={24} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setLiked(!liked)}>
          <Ionicons name={liked ? "heart" : "heart-outline"} size={24} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Ionicons name="bookmark-outline" size={24} />
        </TouchableOpacity>
        
        <TouchableOpacity>
          <Ionicons name="share-social-outline" size={24} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
};
