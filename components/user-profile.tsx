import { StyleSheet, Text, View, ImageSourcePropType } from 'react-native'
import React from 'react'
import CardPost from './card-post'

const UserProfile = () => {
  const user1 = {
    userName: "John Doe",
    userHandle: "@johndoe" as `@${string}`,
    postContent: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    profileImage: require('../assets/images/splash-icon.png') as ImageSourcePropType,
  }
  const user2 = {
    userName: "Jane Smith",
    userHandle: "@janesmith" as `@${string}`,
    postContent: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    profileImage: require('../assets/images/android-icon-foreground.png') as ImageSourcePropType,
  }
  const user3 = {
    userName: "Alice Johnson",
    userHandle: "@alicejohnson" as `@${string}`,
    postContent: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    profileImage: require('../assets/images/android-icon-monochrome.png') as ImageSourcePropType,
  }
  const user4 = {
    userName: "Bob Brown",
    userHandle: "@bobbrown" as `@${string}`,
    postContent: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    profileImage: require('../assets/images/react-logo.png') as ImageSourcePropType,
  }

  return (
    <View>
      <CardPost {...user1} />
      <CardPost {...user2} />
      <CardPost {...user3} />
      <CardPost {...user4} />
    </View>
  )
}

export default UserProfile

const styles = StyleSheet.create({})