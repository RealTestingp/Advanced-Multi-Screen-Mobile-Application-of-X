import React from "react";
import { StyleSheet, View } from "react-native";
import CardPost from "./card-post";

const UserPost = () => {
	const user1 = {
		userName: "John Doe",
		userHandle: "@johndoe" as `@${string}`,
		postContent:
			"lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	
	};
	const user2 = {
		userName: "Jane Smith",
		userHandle: "@janesmith" as `@${string}`,
		postContent:
			"lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
	};
	const user3 = {
		userName: "Alice Johnson",
		userHandle: "@alicejohnson" as `@${string}`,
		postContent:
			"lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	};
	const user4 = {
		userName: "Bob Brown",
		userHandle: "@bobbrown" as `@${string}`,
		postContent:
			"lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.t enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
	};

	return (
		<View>
			<CardPost {...user1} />
			<CardPost {...user2} />
			<CardPost {...user3} />
			<CardPost {...user4} />
		</View>
	);
};

export default UserPost;

const styles = StyleSheet.create({

});
