import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, Redirect } from 'expo-router'

    const home = () => {
      return (
      <SafeAreaView style = {{flex:1}}>
        
        <View style = {{alignItems: 'center', justifyContent: 'flex-start', flex: 1}}>
            <Image source={require('../assets/icoana.jpg')} style={{ width: 200, height: 200 }} />
          </View>

<<<<<<< HEAD
    <Link href ="/home">Go home</Link>
      <Link href ="/scanner">Go Scanner</Link>
      <Link href ="/login">Go login</Link>
      <Link href ="/signUp">Go SignUp</Link>
      <Link href ="/pantry">Go Pantry</Link>
      <Link href ="/addproduct">Go AddProduct</Link>
    </View>
  )
}
=======
          <Link href ="/pantry"
          style = {{alignSelf:'center', backgroundColor:'#DE0C0C', padding:15, borderRadius:30 ,marginTop:10,width:200,textAlign:'center'}}>
            <Text style={{color:'white', alignSelf:'center', textAlign:'center'}}>Pantry</Text>
          </Link>
>>>>>>> 242a5d8a6c4f92a1d9e8bb352e20b80d747a603b

          <Link href ="/scanner"
          style = {{alignSelf:'center', backgroundColor:'#DE0C0C', padding:15, borderRadius:30, marginTop:20,width:200,marginBottom:10,textAlign:'center'}}>
            <Text style={{color:'white', alignSelf:'center', textAlign:'center'}}>Scanner</Text>
          </Link>

          <Link href ="/offers"
          style = {{alignSelf:'center', backgroundColor:'#DE0C0C', padding:15, borderRadius:30, marginTop:10,width:200,marginBottom:10,textAlign:'center'}}>
            <Text style={{color:'white', alignSelf:'center', textAlign:'center'}}>Offers</Text>
          </Link>

          <Link href ="/recipes"
          style = {{alignSelf:'center', backgroundColor:'#DE0C0C', padding:15, borderRadius:30, marginTop:10,width:200,marginBottom:10,textAlign:'center'}}>
            <Text style={{color:'white', alignSelf:'center', textAlign:'center'}}>Recipes</Text>
          </Link>

          <Link href ="/login"
          style = {{alignSelf:'center', backgroundColor:'#DE0C0C', padding:15, borderRadius:30, marginTop:10,width:200,marginBottom:250,textAlign:'center'}}>
            <Text style={{color:'white', alignSelf:'center', textAlign:'center'}}>Login</Text>
          </Link>
      </SafeAreaView>
      );
    };

    export default home
