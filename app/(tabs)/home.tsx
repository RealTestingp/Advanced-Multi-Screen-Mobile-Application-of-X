import UserProfile from "@/components/user-profile";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const Home = () => {
	return (
		<ScrollView style={styles.container}>
			<UserProfile />
		</ScrollView>
	);
};

export default Home;

const styles = StyleSheet.create({});
