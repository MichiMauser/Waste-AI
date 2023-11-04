
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // TODO: Implement login logic
    };

    const handleSignUp = () => {
        // TODO: Implement register logic
    };

    const handleFrogotPass = () => {
        // TODO: Implement forgot password logic
    };
    

    return (
        <SafeAreaView style = {{flex:1,justifyContent:'center'}}>
            <TextInput style = {{backgroundColor:'#FFFFFF', borderWidth:1, borderColor:'black', shadowOpacity:0.05, textAlign:'center',alignContent:'center', width:350, height:50, alignSelf:'center',marginBottom:10,borderRadius: 10}}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            
            <TextInput style = {{backgroundColor:'#FFFFFF', borderWidth:1, borderColor:'black', textAlign:'center', shadowOpacity:0.05, alignContent:'center', width:350, height:50, alignSelf:'center',borderRadius: 10}}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            
                <TouchableOpacity style={{marginRight:16, alignSelf:'center'}}  onPress={handleFrogotPass}>
                    <Text>Forgot Password?</Text>
                </TouchableOpacity>
            <TouchableOpacity onPress={handleLogin}
            style = {{alignSelf:'center', backgroundColor:'#fbb02d', padding:10, borderRadius:5, marginTop:10}}>
                <Text style={{color:'white'}}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSignUp}
            style = {{alignSelf:'center', backgroundColor:'#87b38d', padding:10, borderRadius:5, marginTop:10}}>
                <Text style={{color:'white'}}>SignUp</Text>
            </TouchableOpacity>


        </SafeAreaView>
    );
};
        
export default LoginScreen;
