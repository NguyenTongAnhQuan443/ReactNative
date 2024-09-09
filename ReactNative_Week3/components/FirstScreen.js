import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FirstScreen = () => {
    return (
        <View style={{ flex: 1, backgroundColor: '#00CCF9' }}>

            <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ width: 200, height: 200, borderRadius: 100, borderWidth: 10, borderColor: 'black' }}></View>
            </View>

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 25, fontWeight: 'bold' }}>GROW</Text>
                <Text style={{ fontSize: 25, fontWeight: 'bold' }}>YOUR BUSINESS</Text>
            </View>

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 15, fontWeight: 'bold', textAlign: 'center' }}>We will help you to grow your business using
                    online server</Text>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                <TouchableOpacity style={{ width: 119, height: 48, backgroundColor: 'yellow', borderWidth: 1, borderRadius: 10, borderColor: 'gray', justifyContent: 'center', alignItems: 'center' }} onPress={{}}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>LOGIN</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ width: 119, height: 48, backgroundColor: 'yellow', borderWidth: 1, borderRadius: 10, borderColor: 'gray', justifyContent: 'center', alignItems: 'center' }} onPress={{}}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>LOGIN</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default FirstScreen

const styles = StyleSheet.create({})