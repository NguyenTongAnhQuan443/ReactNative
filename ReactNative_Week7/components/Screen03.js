import { StyleSheet, Text, View, TouchableOpacity, TextInput, SafeAreaView, Image } from 'react-native'
import React from 'react'

import { Ionicons } from '@expo/vector-icons'


const Screen03 = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 6 }}>

                {/* View user */}
                <View style={{ flex: 2, flexDirection: 'row' }}>
                    {/* Left */}
                    <View style={{ width: '70%', flexDirection: 'row' }}>
                        {/* Image user */}
                        <View style={{ width: '30%', justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={{ uri: 'https://mcdn.coolmate.me/image/March2023/meme-meo-cute-hai-huoc-1297_421.jpg' }} style={{ width: 70, height: 70, borderRadius: 100 }} />
                        </View>

                        {/* Name user */}
                        <View style={{ width: '70%', justifyContent: 'center', alignItems: 'flex-start', paddingLeft: 10 }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Hi Cat</Text>
                            <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'grey' }}>have afrate day a head</Text>
                        </View>
                    </View>

                    {/* Right */}
                    <View style={{ width: '30%', justifyContent: 'center', alignItems: 'flex-end', paddingRight: 30 }}>
                        <Ionicons name='arrow-back-outline' size={30} style={{}} />
                    </View>
                </View>

                {/* View text */}
                <View style={{ flex: 2, justifyContent: 'flex-end', alignItems: 'center' }}>
                    <Text style={{ color: 'black', fontSize: 40, fontWeight: 'bold' }}>ADD YOUR JOB</Text>
                </View>

                {/* View textInput */}
                <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                    <TextInput style={{ borderWidth: 1, height: 55, width: '90%', borderRadius: 10, fontSize: 20, paddingLeft: 40 }} placeholder='Input your job'></TextInput>
                    <Ionicons name='clipboard-outline' size={25} color='#1DD75B' style={{ position: 'absolute', left: 30 }} />
                </View>
            </View>

            {/* View - 2 */}
            <View style={{ flex: 8 }}>

                {/* Button */}
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ width: '50%', height: '90%', backgroundColor: '#26C3D9', borderRadius: 10 }}>
                        <TouchableOpacity style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                            <Text style={{ color: 'white', fontSize: 20 }}>FINSH</Text>
                            <Ionicons name='arrow-forward-outline' size={20} color={'white'} style={{ paddingLeft: 10 }} />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Image bock */}
                <View style={{ flex: 7, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={require('../assets/image/Image 95.png')} style={{ width: 271, height: 271 }} />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Screen03

const styles = StyleSheet.create({})