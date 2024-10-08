import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

import Screen02 from './Screen02';
const Screen01 = ({ navigation, route }) => {

    const [name, setName] = useState('');

    return (
        <SafeAreaView style={{ flex: 1 }}>

            {/* View 1 */}
            <View style={{ flex: 8 }}>
                {/* View - Image  bock*/}
                <View style={{ flex: 6, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={require('../assets/image/Image 95.png')} style={{ width: 271, height: 271 }} />
                </View>

                {/* View -  Text MANAGER YOUR TASK*/}
                <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: '#8353E2', fontSize: 30, fontWeight: 'bold', width: 250, textAlign: 'center' }}>MANAGER YOUR TASK</Text>
                </View>
            </View>

            {/* View - 2 */}
            <View style={{ flex: 6 }}>

                {/* View - TextInput */}
                <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                    <TextInput style={{ borderWidth: 2, width: '80%', height: 50, borderRadius: 15, fontSize: 18, paddingLeft: 45 }} placeholder='Enter your name'
                        onChangeText={setName}
                        value={name}
                    />

                    <Image source={require('../assets/icons/Frame.png')} style={{ position: 'absolute', left: 55 }} />
                </View>

                <View style={{ flex: 4, justifyContent: 'center', alignItems: 'center' }}>

                    {/* Button - GET STARTED*/}
                    <View style={{ width: '50%', height: 50, backgroundColor: '#00BDD6', borderRadius: 15, justifyContent: 'center', alignItems: 'center', fontSize: 20 }}>

                        <TouchableOpacity style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
                            onPress={() => navigation.navigate('Screen02', { userName: name })}
                        >
                            <Text style={{ color: 'white', fontSize: 18 }}>GET STARTED</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}
export default Screen01

const styles = StyleSheet.create({})