
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, Redirect } from 'expo-router'

function postUserLogIn() {

    let formData = new FormData();    //formdata object

    formData.append('username', userName);   //append the values with key, value pair
    formData.append('password', password);

    axios
    .post(baseURL+"/token", formData, {
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    })
    .then((response) => {
        console.log(response.data);
        const token = response.data.access_token;
        const userID = response.data.user_id;
        console.log(token);
        console.log(userID);

        localStorage.setItem("token", token);
        localStorage.setItem("userID", userID);

        setAuthToken(token);

        navigate("/account");
    }).catch(error => {
        setError(error);
        console.log(error.message);
    });
}

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        postUserLogIn();
    };
    const handleFrogotPass = () => {
        // TODO: Implement forgot password logic
    };


    return (
        <SafeAreaView style = {{flex:1}}>
            <View style={{alignItems:'center', marginTop:50}}>
                <Image source={require('../assets/icoana.jpg')} style={{width: 200, height: 200}} />
            </View>

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
