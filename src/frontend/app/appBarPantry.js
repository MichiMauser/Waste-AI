import React, { useState } from 'react';
import { View, ImageBackground, TouchableOpacity, Text, Modal } from 'react-native';
import { Link,  } from 'expo-router'

const AppBarPantry = () => {

    const [isModalVisible, setModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const items = ['Vegetables', 'Fruits', 'Animal products'];

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    }

    const handleItemSelected = (item) => {
        setSelectedItem(item),
        toggleModal();
    };

    return (
        <View style={{flexDirection:'row', justifyContent:'space-between', borderRadius:30, backgroundColor: '#DE0C0C', alignItems:'center', marginHorizontal:1 }}>
                <Link href="/" style={{marginLeft:10, marginVertical:10}}>
                    <View style={{borderRadius:100, backgroundColor:'black', width:50, height:50, borderRadius:100 }}>
                        <ImageBackground source={require('./backIcon.png')} resizeMode="cover"
                        style={{flex:1, justifyContent:'center'}}/>
                    </View>
                </Link>

                <View style={{backgroundColor:'#FFFFFF',borderRadius:30, paddingVertical:10,
            paddingHorizontal:20}}>
                    <Text style={{borderColor:'#ffffff', fontSize:18, fontWeight:'700'}}>Pantry</Text>
                </View>

                <View>
                    <TouchableOpacity onPress={toggleModal} style = {{ paddingVertical:12,
                    paddingHorizontal:20, borderRadius:30,backgroundColor:'#ffffff', borderColor: '#ccc',alignItems: 'center', marginRight:10,
                    width:160 }}>
                        <Text>{selectedItem || 'Sort by'}</Text>
                    </TouchableOpacity>

                    <Modal
                        animationType='slide'
                        transparent={true}
                        visible={isModalVisible}
                        onRequestClose={toggleModal}
                        
                    >

                        <View style={{
                            position:'absolute',
                            top:60,
                            right:0,
                        }}>
                            {items.map((item,index) => (
                                <TouchableOpacity key={index} onPress={
                                        () => handleItemSelected(item)
                                    }
                                    style={{ paddingVertical:12,
                                        paddingHorizontal:20, borderRadius:30,backgroundColor:'#ffffff', borderColor: '#ccc',alignItems: 'center', marginRight:10,
                                        width:160, borderWidth:1, borderRadius:20, }}
                                >
                                    <Text style={{textAlign:'center'}}>{item}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </Modal>
                </View>
            </View>
    )
}

export default AppBarPantry;