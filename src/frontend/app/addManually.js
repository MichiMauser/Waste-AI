import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, Redirect } from 'expo-router'



const AddManuallyScreen = () => {
    const [name, setName] = useState('');
    const [note, setNote] = useState('');

    const handleAdd = () => {
        // TODO: Implement add logic
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 10 }}>
                    <Text style={{ marginRight: 10 }}>Name:</Text>
                    <TextInput
                        style={{
                            backgroundColor: '#FFFFFF',
                            borderWidth: 1,
                            borderColor: 'black',
                            shadowOpacity: 0.05,
                            textAlign: 'center',
                            alignContent: 'center',
                            width: 200,
                            height: 50,
                            alignSelf: 'center',
                            borderRadius: 30,
                        }}
                        placeholder="Name"
                        value={name}
                        onChangeText={setName}
                    />
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, justifyContent:'center' }}>
                    <Text style={{ marginRight: 10 }}>Note:</Text>
                    <TextInput
                        style={{
                            backgroundColor: '#FFFFFF',
                            borderWidth: 1,
                            borderColor: 'black',
                            textAlign: 'center',
                            shadowOpacity: 0.05,
                            alignContent: 'center',
                            width: 200,
                            height: 50,
                            alignSelf: 'center',
                            borderRadius: 30,
                        }}
                        placeholder="Note"
                        value={note}
                        onChangeText={setNote}
                    />
                </View>

                <TouchableOpacity
                    onPress={handleAdd}
                    style={{
                        alignSelf: 'center',
                        backgroundColor: '#fbb02d',
                        padding: 10,
                        borderRadius: 30,
                        marginTop: 10,
                        width: 200,
                    }}
                >
                    <Text style={{ color: 'white', alignSelf: 'center' }}>Add</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
    }
    export default AddManuallyScreen;

