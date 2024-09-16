import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
const Screen_2b = () => {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }}>

                {/* View - 1 */}
                <View style={{ flex: 2 }}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ width: '30%', justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require('../assets/icons/usb.jpg')} style={{ width: 120, height: 120 }}></Image>
                        </View>

                        <View style={{ width: '70%', justifyContent: 'center'}}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 10 }}>USB Bluetooth Music Receiver
                                HJX-001- Biến loa thường thành loa
                                bluetooth</Text>
                        </View>
                    </View>

                    {/* Đánh giá - 5 Sao */}
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 10 }}>Cực kỳ hài long</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={require('../assets/icons/star32.png')} style={{ marginRight: 10 }}></Image>
                            <Image source={require('../assets/icons/star32.png')} style={{ marginRight: 10 }}></Image>
                            <Image source={require('../assets/icons/star32.png')} style={{ marginRight: 10 }}></Image>
                            <Image source={require('../assets/icons/star32.png')} style={{ marginRight: 10 }}></Image>
                            <Image source={require('../assets/icons/star32.png')} style={{ marginRight: 10 }}></Image>
                        </View>
                    </View>

                    {/* Add - Ảnh sản phẩm */}
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ width: '90%', height: '70%', borderColor: 'blue', borderWidth: 2, borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={require('../assets/icons/camera32.png')} style={{ width: 32, height: 32, }}></Image>
                            <Text style={{ fontSize: 30, fontWeight: 'bold', marginLeft: 10 }}>Thêm hình ảnh</Text>
                        </View>
                    </View>
                </View>

                {/* View - 2 */}
                <View style={{ flex: 2 }}>

                    {/* Textinput - Đánh giá sản phẩm  */}
                    <View style={{ flex: 4, justifyContent: 'center', alignItems: 'center' }}>
                        <TextInput style={{ width: '90%', height: '90%', borderWidth: 2, borderRadius: 10, borderColor: 'gray', textAlignVertical: 'top', padding: 10, fontSize: 24 }} placeholder='Hãy chia sẽ những điều mà bạn thích về sản phẩm'></TextInput>
                    </View>

                    {/* Button - Gửi */}
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ width: '90%', height: '70%', backgroundColor: '#0D5DB6', borderRadius: 10 }}>
                            <TouchableOpacity style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontSize: 25, color: 'white', fontWeight: 'bold' }}>Gửi</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default Screen_2b

const styles = StyleSheet.create({})