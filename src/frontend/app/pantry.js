import React, { useState } from 'react';
import { View, SafeAreaView, ImageBackground, TouchableOpacity, Text, Modal } from 'react-native';
import ProductText from './productText.js';
import AppBarPantry from './appBarPantry.js'
import { Link, Redirect } from 'expo-router'

const PantryScreen = () => {

    return (
        <SafeAreaView>
            <AppBarPantry></AppBarPantry>
            <View>
                <ProductText productName={"Ana"} type={1} expirationDate={"2023-01-01"}></ProductText>
                <ProductText productName={"Ana"} type={2} expirationDate={"2123"}></ProductText>
                <ProductText productName={"Ana"} type={3} expirationDate={"2123"}></ProductText>
                <ProductText productName={"Ana"} type={4} expirationDate={"2123"}></ProductText>
            </View>
        </SafeAreaView>
    )
}

export default PantryScreen;
