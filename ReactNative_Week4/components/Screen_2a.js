import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient'

const Screen_2a = () => {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }}>
                <LinearGradient colors={['#F9C901', '#C29C01']} style={{ flex: 1 }}>

                    {/* View - 1 */}
                    <View style={{ flex: 3 }}>

                        {/* Text - Login */}
                        <View style={{ flex: 1, justifyContent: 'center' }}>
                            <Text style={{ fontSize: 40, fontWeight: 'bold' }}>LOGIN</Text>
                        </View>

                        {/* Textinput */}
                        <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center' }}>
                            <TextInput style={{ width: '90%', height: '30%', borderWidth: 1, borderRadius: 10, marginTop: 25, fontSize: 20, paddingLeft: 50 }} placeholder='Name'></TextInput>
                            <View style={{position:'absolute', left: 30, top: 60}}>
                                <Image source={require('../assets/icons/user32.png')}/>
                            </View>

                            <TextInput style={{ width: '90%', height: '30%', borderWidth: 1, borderRadius: 10, marginBottom: 25, fontSize: 20, paddingLeft: 50 }} placeholder='Password'></TextInput>
                            <View style={{position:'absolute', left: 30, top: 170}}>
                                <Image source={require('../assets/icons/lock32.png')}/>
                            </View>

                        </View>
                    </View>

                    {/* View - 2 */}
                    <View style={{ flex: 2 }}>

                        {/* Button - Login */}
                        <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ width: '90%', height: '50%' }}>
                                <TouchableOpacity style={{ width: '100%', height: '100%', backgroundColor: 'black', justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                                    <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }}>LOGIN</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* Text - Forgot */}
                        <View style={{ flex: 4, alignItems: 'center' }}>
                            <Text style={{ fontSize: 30, fontWeight: 'bold', }}>Forgot your password</Text>
                        </View>
                    </View>

                </LinearGradient>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default Screen_2a

const styles = StyleSheet.create({})