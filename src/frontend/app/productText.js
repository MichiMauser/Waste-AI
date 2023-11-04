import React from 'react';
import { View, Text } from 'react-native';
import * as Constants from './constants';

const ProductText = ({ productName, type, expirationDate }) => {

    let borderColor = '#4D4D4D';
    if (type === 1) {
        borderColor = '#3C6A06';
    } else if (type === 2) {
        borderColor = '#116380';
    } else if (type === 3) {
        borderColor = '#A85353';
    }
  return (
    <View style={{marginVertical: 15,
    borderWidth:3, marginHorizontal:30, paddingVertical:10,
    borderRadius:30, borderColor: borderColor}}>
        <View style={{paddingHorizontal:20, flexDirection: 'row', justifyContent:'space-between'}}>
            <Text>{productName}</Text>
            <Text>{expirationDate}</Text>
        </View>
    </View>
  );
};

export default ProductText;