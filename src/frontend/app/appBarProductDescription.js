import React from 'react';
import { View, ImageBackground, Text, TouchableOpacity } from 'react-native';
import { Link,  } from 'expo-router'

const AppBarProductDescription = ({name}) => {


    return (
        <View style={{flexDirection:'row', justifyContent:'flex-start', borderRadius:30, backgroundColor: '#DE0C0C', alignItems:'center', marginHorizontal:1 }}>
                <Link href="/pantry" style={{marginLeft:10, marginVertical:10, marginRight:35}}>
                    <View style={{borderRadius:100, backgroundColor:'black', width:50, height:50, borderRadius:100 }}>
                        <ImageBackground source={require('../assets/backIcon.png')} resizeMode="cover"
                        style={{flex:1, justifyContent:'center'}}/>
                    </View>
                </Link>

                <View style={{backgroundColor:'#FFFFFF',borderRadius:30, paddingVertical:10,
                    paddingHorizontal:20, marginLeft:35}}>
                    <Text style={{borderColor:'#ffffff', fontSize:18, fontWeight:'700'}}>{name}</Text>
                </View>
            </View>
    )
}

export default AppBarProductDescription;