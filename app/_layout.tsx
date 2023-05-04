import {Link,Stack} from 'expo-router'
import {Text as Tex, View as Vew,Pressable, TouchableOpacity,Image} from 'react-native'
import {styled, withExpoSnack} from 'nativewind'
import Providers from './providers'
import Header from './header'
import Home from './indextemp'
import React from 'react'
const Text=styled(Tex)
const View =styled(Vew)
const img=styled(Image)
const RootLayout=({children}:any)=>{
    return(
        <Providers><Header />
              
        </Providers>

    );
}
export default withExpoSnack(RootLayout);