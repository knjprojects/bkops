import { StyleSheet, Text as Tex, View as Vew } from 'react-native'
import React from 'react'
import { styled } from 'nativewind'
type Props = {}
const Text=styled(Tex)
const View=styled(Vew)
const Home = (props: Props) => {
  return (
    <View>
      <Text className='bg-red-300 font-bold text-black'>home</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})