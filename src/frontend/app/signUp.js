import {Link} from 'expo-router';
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const signUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = () => {
        // TODO: Implement register logic
    };
    

    return (
        <SafeAreaView style = {{flex:1}}>
            <View style={{alignItems:'center', marginTop:50}}>
                <Image source={require('../assets/icoana.jpg')} style={{width: 200, height: 200}} />
            </View>
            <View style={{flex:1, flexDirection: 'column', justifyContent:'center'}}></View>
            <View style={{flex:1,justifyContent:'center'}}>
            <TextInput style = {{backgroundColor:'#FFFFFF', borderWidth:1, borderColor:'black', textAlign:'center', shadowOpacity:0.05, alignContent:'center', width:350, height:50, alignSelf:'center',borderRadius: 30, marginBottom:10}}
                placeholder="Username"
                value={name}
                onChangeText={setName}
                secureTextEntry
            />
            <TextInput style = {{backgroundColor:'#FFFFFF', borderWidth:1, borderColor:'black', shadowOpacity:0.05, textAlign:'center',alignContent:'center', width:350, height:50, alignSelf:'center',marginBottom:10,borderRadius: 30}}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            
            <TextInput style = {{backgroundColor:'#FFFFFF', borderWidth:1, borderColor:'black', textAlign:'center', shadowOpacity:0.05, alignContent:'center', width:350, height:50, alignSelf:'center',marginBottom:10,borderRadius: 30}}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <TouchableOpacity onPress={handleSignUp}
            style = {{alignSelf:'center', backgroundColor:'#DE0C0C', padding:10, width:200, borderRadius:30, marginTop:10}}>
                <Text style={{color:'white',alignSelf:'center'}}>SignUp</Text>
            </TouchableOpacity>
            </View>
            <View style={{flex:1, justifyContent:'flex-end'}}>
            <Text style={{alignSelf:'center'}}>Already have an account?</Text>
            <Link href ="/login"
            style = {{backgroundColor:'grey', padding:10, alignSelf:'center', borderRadius:30, marginBottom:50,width:200,textAlign:'center'}}>
                <Text style={{color:'white', textAlign:'center'}}>Login</Text>
            </Link>
                </View>

        </SafeAreaView>
    );
};
        
export default signUp;
