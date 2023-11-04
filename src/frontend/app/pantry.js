import * as React from 'react';
import { View, SafeAreaView, ImageBackground, TouchableOpacity } from 'react-native';
import ProductText from './productText.js';

const PantryScreen = () => {
    return (
        <SafeAreaView>
            
            
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
