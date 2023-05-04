import { StyleSheet, Text as Tex, View as Vew } from 'react-native'
import {styled} from 'nativewind'
import React from 'react'

const View=styled(Vew)
const Text=styled(Tex)

type Props = {}
const Links:any =[
    "messaging","feedback", "assistance"
]
const Header = (props: Props) => {
  return (
    <View>
        <head >
            <title>React app boi</title>
            
        </head>
        <figure>
            <View className='flex-col'> <Text className='text-red-500 font-bold' >Brooooooo it finally wqorks</Text>
            <View className='flex-row space-x-3'>
                <View className='flex-1'>lets see how this looks</View>
                <View className='flex-2'>Yes lets see how it looiks</View>
            </View>
            <View className='bg-gradient-to-r from-green-300 to-yellow-400 flex'>  <Text className='p-1 text-block h-64 text-center text-lg font-bold'>Hellooooooo Candaceeee</Text></View>
        </View>
     </figure>
 </View>);
  
}

export default Header

const styles = StyleSheet.create({})