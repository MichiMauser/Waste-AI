
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
            <TextInput style = {{backgroundColor:'#F2F2F2', borderWidth:1, borderColor:'black', shadowOpacity:0.05, alignContent:'center', width:350, height:50, alignSelf:'center',marginBottom:10}}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            
            <TextInput style = {{backgroundColor:'#F2F2F2', borderWidth:1, borderColor:'black', shadowOpacity:0.05, alignContent:'center', width:350, height:50, alignSelf:'center'}}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            
                <TouchableOpacity style={{marginRight:16, alignSelf:'center'}}  onPress={handleFrogotPass}>
                    <Text>Forgot Password?</Text>
                </TouchableOpacity>
            <TouchableOpacity onPress={handleLogin}
            style = {{alignSelf:'center', backgroundColor:'#D2DE32', padding:10, borderRadius:5, marginTop:10}}>
                <Text style={{color:'white'}}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSignUp}
            style = {{alignSelf:'center', backgroundColor:'#61A3BA', padding:10, borderRadius:5, marginTop:10}}>
                <Text style={{color:'white'}}>SignUp</Text>
            </TouchableOpacity>


        </SafeAreaView>
    );
};
        
export default LoginScreen;
