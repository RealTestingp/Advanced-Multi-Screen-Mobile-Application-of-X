import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { theme } from "@/styles/theme";

export default function TabLayout() {
	return (
		<Tabs
			screenOptions={{
				headerShown: false,
				tabBarStyle: { height: 60, backgroundColor: theme.colors.bg },
				tabBarActiveTintColor: "white",
				tabBarInactiveTintColor: "gray",
				tabBarShowLabel: false,
			}}
		>
			<Tabs.Screen
				name="home"
				options={{
					title: "Home",
					tabBarIcon: ({ color, size, focused }) => (
						<Ionicons
							name={focused ? "home" : "home-outline"}
							size={size}
							color={color}
						/>
					),
				}}
			/>

			<Tabs.Screen
				name="search"
				options={{
					title: "Search",
					tabBarIcon: ({ color, size, focused }) => (
						<Ionicons
							name={focused ? "search" : "search-outline"}
							size={size}
							color={color}
						/>
					),
				}}
			/>

			<Tabs.Screen
				name="notifications"
				options={{
					title: "Notifications",
					tabBarIcon: ({ color, size, focused }) => (
						<Ionicons
							name={focused ? "notifications" : "notifications-outline"}
							size={size}
							color={color}
						/>
					),
				}}
			/>
		</Tabs>
	);
}
