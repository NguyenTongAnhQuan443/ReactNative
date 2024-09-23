import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import Screen_01 from './Screen_01'

import phone from '../data/phone.json'

const Screen_02 = ({ navigation }) => {
    
    const [color, setColor] = useState(1);
    const [selected, setSelected] = useState(1);

    return (
        <SafeAreaView style={{ flex: 1 }}>

            {/* View 1 */}
            <View style={{ flex: 3, flexDirection: 'row' }}>
                {/* View - Ảnh điện thoại */}
                <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>

                    <View style={{ position: 'absolute', top: -10, left: 15 }}>
                        <TouchableOpacity onPress={ () => {
                            navigation.navigate('Screen_01')
                        }}>
                            <Image source={require('../assets/icon/back.png')} style={{ height: 24, width: 24 }}></Image>
                        </TouchableOpacity>
                    </View>


                    <View style={{ width: '90%', height: '90%' }}>
                        <Image source={require('../assets/image/vs_1.png')} style={{ width: '100%', height: '100%', resizeMode: 'contain' }}></Image>
                    </View>
                </View>

                {/* View - Thông tin điện thoại */}
                <View style={{ flex: 3, paddingLeft: 20, paddingTop: 16 }}>
                    {/* Tên điện thoại */}
                    <Text style={{ fontSize: 18, marginTop: 10 }}>Điện Thoại Vsmart Joy 3
                        Hàng chính hãng</Text>

                    {/* Màu */}
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <Text style={{ fontSize: 18 }}>Màu</Text>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 20 }}>Đen</Text>
                    </View>

                    {/* Cung cấp bởi */}
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <Text style={{ fontSize: 18 }}>Cung cấp bởi</Text>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 10 }}>Tiki Tradding</Text>
                    </View>

                    {/* Giá bán */}
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', }}>1.790.000 đ</Text>

                    </View>

                </View>
            </View>

            {/* View - 2 */}
            <View style={{ flex: 8, flexDirection: 'column', justifyContent: 'space-around', backgroundColor: '#C4C4C4' }}>

                {/* Text chọn màu */}
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 20, marginTop: 20, marginLeft: 10 }}>Chọn một màu bên dưới:</Text>
                </View>

                {/* Màu 1 */}
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <TouchableOpacity style={[{width: '20%', height: '80%', backgroundColor: '#C5F1FB', justifyContent: 'center', alignItems: 'center'}, selected === 1 ? { borderColor: 'yellow', borderWidth: 3 } : { borderWidth: 0 }]} onPress={
                        () => setSelected(1)
                    }>

                    </TouchableOpacity>
                </View>

                {/* Màu 2 */}
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity style={[{width: '20%', height: '80%', backgroundColor: '#F30D0D', justifyContent: 'center', alignItems: 'center'}, selected === 2 ? { borderColor: 'yellow', borderWidth: 3 } : { borderWidth: 0 }]} onPress={
                        () => setSelected(2)
                    }>

                    </TouchableOpacity>
                </View>

                {/* Màu 3 */}
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity style={[{width: '20%', height: '80%', backgroundColor: '#000000', justifyContent: 'center', alignItems: 'center'}, selected === 3 ? { borderColor: 'yellow', borderWidth: 3 } : { borderWidth: 0 }]} onPress={
                        () => setSelected(3)
                    }>

                    </TouchableOpacity>
                </View>

                {/* Màu 4 */}
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity style={[{width: '20%', height: '80%', backgroundColor: '#234896', justifyContent: 'center', alignItems: 'center'}, selected === 4 ? { borderColor: 'yellow', borderWidth: 2 } : { borderWidth: 0 }]} onPress={
                        () => setSelected(4)
                    }>

                    </TouchableOpacity>
                </View>

                {/* Button chọn */}
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ width: '90%', height: '50%', backgroundColor: '#234896', borderRadius: 10 }}>
                        <TouchableOpacity style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }} onPress={
                            () => {
                                if(selected == 1){
                                    console.log(selected)
                                    navigation.navigate('Screen_01', phone[0])
                                }else if(selected == 2){
                                    console.log(selected)
                                    navigation.navigate('Screen_01', phone[1])
                                }else if(selected == 3){
                                    console.log(selected)
                                    navigation.navigate('Screen_01', phone[2])
                                }else if(selected == 4){
                                    console.log(selected)
                                    navigation.navigate('Screen_01', phone[3])
                                }
                            }
                        }>
                            <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white' }}>XONG</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Screen_02

const styles = StyleSheet.create({})