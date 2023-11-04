import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const index = () => {
  return (
    <View>
      <Text>index</Text>

    <Link href ="/home">Go home</Link>
      <Link href ="/scanner">Go Scanner</Link>
      <Link href ="/login">Go login</Link>
      <Link href ="/signUp">Go SignUp</Link>
    </View>
  )
}

export default index

const styles = StyleSheet.create({})
