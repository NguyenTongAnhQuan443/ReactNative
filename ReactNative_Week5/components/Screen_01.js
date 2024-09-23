import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import Screen_02 from './Screen_02';
const Screen_01 = ({route, navigation}) => {

    const dataDefault = {
        "id": 1,
        "name": "Điện Thoại Vsmart Joy 3 Hàng chính hãng - Màu Silver",
        "color": "Silver",
        "supplier": "Tiki Tradding",
        "price": "1.790.000 đ",
        "priceold": "1.790.000 đ",
        "image": "vs_1.png"
    }

    let dataCurrunt = route.params;

    if(dataCurrunt == null){
        dataCurrunt = dataDefault
    }
    
    return (
        <SafeAreaView style={{ flex: 1 }}>
            {/* View 1- Hình Điện thoại */}
            <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ width: '90%', height: '90%', justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={{uri:`http://localhost:8081/assets/image/${dataCurrunt.image}`}} style={{ resizeMode: 'cover', width: '100%', height: '100%' }}></Image>
                </View>
            </View>

            {/* View 2 - Thông tin điện thoại */}
            <View style={{ flex: 2 }}>

                {/* View - Thông tin tổng quát điện thoại */}
                <View style={{ flex: 5 }}>

                    {/* View - Tên điện thoại */}
                    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
                        <Text style={{ fontSize: 20 }}>{dataCurrunt.name}</Text>
                    </View>

                    {/* View - 5 sao */}
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ flex: 2, flexDirection: 'row', paddingLeft: 10, justifyContent: 'flex-start' }}>
                            <Image source={require("../assets/icon/star.png")} style={{ width: 25, height: 25 }}></Image>
                            <Image source={require("../assets/icon/star.png")} style={{ width: 25, height: 25 }}></Image>
                            <Image source={require("../assets/icon/star.png")} style={{ width: 25, height: 25 }}></Image>
                            <Image source={require("../assets/icon/star.png")} style={{ width: 25, height: 25 }}></Image>
                            <Image source={require("../assets/icon/star.png")} style={{ width: 25, height: 25 }}></Image>
                        </View>

                        {/* View - Xem đánh giá */}
                        <View style={{ flex: 3, paddingLeft: 20 }}>
                            <Text style={{ fontSize: 18 }}>(Xem 828 đánh giá)</Text>
                        </View>
                    </View>

                    {/* View - Giá */}
                    <View style={{ flex: 1, flexDirection: 'row' }}>

                        {/* View - Giá hiện tại */}
                        <View style={{ flex: 2, flexDirection: 'row', paddingLeft: 10, justifyContent: 'flex-start' }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>1.790.000 đ</Text>
                        </View>

                        {/* View - Giá gốc */}
                        <View style={{ flex: 3, paddingLeft: 20 }}>
                            <Text style={{ fontSize: 18, color: 'grey', textDecorationLine: 'line-through' }}>1.790.000 đ</Text>
                        </View>
                    </View>

                    {/* View - Ở đâu rẻ hơn */}
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ color: 'red', fontWeight: 'bold', paddingLeft: 10, fontSize: 16 }}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
                        <Image source={require('../assets/icon/Group 1.png')} style={{ marginLeft: 10 }}></Image>
                    </View>

                    {/* View - Chọn màu */}
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }} onPress={ () => {
                            navigation.navigate('Screen_02')
                        }}>
                            <View style={{ flex: 1, width: '90%', height: '100%', borderRadius: 10, borderWidth: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                                <Text style={{ fontSize: 18 }}>4 Màu - Chọn màu</Text>
                                <Image source={require('../assets/icon/Vector.png')} style={{ position: 'absolute', right: 20 }}></Image>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Button chọn mua */}
                <View style={{ flex: 2, paddingBottom: 10, justifyContent: 'flex-end', alignItems: 'center' }}>
                    <View style={{ width: '90%', height: '50%', backgroundColor: 'red', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white' }}>CHỌN MUA</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Screen_01

const styles = StyleSheet.create({})