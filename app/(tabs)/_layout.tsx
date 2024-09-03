import { Tabs, Redirect } from "expo-router";
import { View, Text, Image } from "react-native";

import { icons } from "../../constants";

export default function TabsLayout() {
	const TabIcon = ({ color, icon, focused, name }) => {
		return (
			<View className='items-center justify-center gap-2'>
				<Image
					source={icon}
					resizeMode='contain'
					tintColor={color}
					className='w-6 h-6'
				/>
				<Text
					className={`${focused ? `font-psemibold` : `font-pregular`} text-xs`}
					style={{ color: color }}>
					{name}
				</Text>
			</View>
		);
	};

	return (
		<>
			<Tabs
				screenOptions={{
					tabBarShowLabel: false,
					tabBarActiveTintColor: "#FFA001",
					tabBarInactiveTintColor: "#CDCDE0",
					tabBarStyle: {
						backgroundColor: "#161622",
						borderTopWidth: 1,
						borderTopColor: "#232533",
						height: 84,
					},
				}}>
				<Tabs.Screen
					name='home'
					options={{
						title: "Home",
						headerShown: false,

						tabBarIcon: ({ color, focused }) => (
							<TabIcon
								icon={icons.home}
								color={color}
								name='Home'
								focused={focused}
							/>
						),
					}}
				/>
				<Tabs.Screen
					name='Community'
					options={{
						title: "Community",
						headerShown: false,

						tabBarIcon: ({ color, focused }) => (
							<TabIcon
								icon={icons.community}
								color={color}
								name='Community'
								focused={focused}
							/>
						),
					}}
				/>
				<Tabs.Screen
					name='community'
					options={{
						title: "community",
						headerShown: false,

						tabBarIcon: ({ color, focused }) => (
							<TabIcon
								icon={icons.community}
								color={color}
								name='Community'
								focused={focused}
							/>
						),
					}}
				/>
				<Tabs.Screen
					name='creat'
					options={{
						title: "Create",
						headerShown: false,

						tabBarIcon: ({ color, focused }) => (
							<TabIcon
								icon={icons.create}
								color={color}
								name='Create'
								focused={focused}
							/>
						),
					}}
				/>
				<Tabs.Screen
					name='profile'
					options={{
						title: "Profile",
						headerShown: false,

						tabBarIcon: ({ color, focused }) => (
							<TabIcon
								icon={icons.profile}
								color={color}
								name='Profile'
								focused={focused}
							/>
						),
					}}
				/>
			</Tabs>
		</>
	);
}
