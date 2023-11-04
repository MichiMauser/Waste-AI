
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, Redirect } from 'expo-router'


const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // TODO: Implement login logic
    };
    const handleFrogotPass = () => {
        // TODO: Implement forgot password logic
    };


    return (
        <SafeAreaView style = {{flex:1}}>

            <View style={{flex:1,justifyContent:'center'}}>
            <TextInput style = {{backgroundColor:'#FFFFFF', borderWidth:1, borderColor:'black', shadowOpacity:0.05, textAlign:'center',alignContent:'center', width:350, height:50, alignSelf:'center',marginBottom:10,borderRadius: 30}}
                placeholder="Email/Username"
                value={email}
                onChangeText={setEmail}
            />
            
            <TextInput style = {{backgroundColor:'#FFFFFF', borderWidth:1, borderColor:'black', textAlign:'center', shadowOpacity:0.05, alignContent:'center', width:350, height:50, alignSelf:'center',borderRadius: 30, marginBottom:10}}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            
                <TouchableOpacity style={{alignSelf:'center',marginBottom:10}}  onPress={handleFrogotPass}>
                    <Text style={{fontSize:16}}>Forgot Password?</Text>
                </TouchableOpacity>
            <TouchableOpacity onPress={handleLogin}
            style = {{alignSelf:'center', backgroundColor:'#DE0C0C', padding:10, borderRadius:30, marginTop:10,width:200}}>
                <Text style={{color:'white', alignSelf:'center'}}>Login</Text>
            </TouchableOpacity>
            <Link href ="/signUp"
            style = {{alignSelf:'center', backgroundColor:'#DE0C0C', padding:10, borderRadius:30, marginTop:10,width:200,marginBottom:10,textAlign:'center'}}>
                <Text style={{color:'white', alignSelf:'center', textAlign:'center'}}>SignUp</Text>
            </Link>
            </View>

        </SafeAreaView>
    );
};
        
export default LoginScreen;
