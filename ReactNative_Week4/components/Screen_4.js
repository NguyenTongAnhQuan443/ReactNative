import { StyleSheet, Text, View, TouchableOpacity, Button, TextInput, Image } from 'react-native'
import React from 'react'

const Screen_4 = () => {
  return (
    <View style={styles.container}>
      {/* View - 1 - sản phẩm */}
      <View style={{ flex: 2 }}>
        {/* Ảnh sản phẩm - tên sản phẩm */}
        <View style={{ flex: 1, backgroundColor: 'yellow' }}></View>

        <View style={{ flex: 1, backgroundColor: 'red', flexDirection: 'column' }}>
          <View style={{ flex: 1, backgroundColor: 'green', flexDirection: 'column' }}>
            <View style={{ flex: 1, flexDirection: 'row', marginLeft: 10, marginRight: 10, alignItems:'center' }}>
              <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>Mã giảm giá đã lưu</Text>
              <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'blue', marginLeft: 20 }}>Nhấn vào đây?</Text>
            </View>
          </View>

          {/* Mã giảm giá */}
          <View style={{ alignItems: 'center', justifyContent: 'space-around', flex: 1, backgroundColor: 'white', flexDirection: 'row' }}>
            <TextInput style={{
              paddingLeft: 40,
              height: 55, width: "60%", borderColor: 'black', borderWidth: 2, borderRadius: 5, paddingHorizontal: 10, fontSize: 20
            }} placeholder='Mã giảm giá' />

            <View style={{ position: 'absolute', marginLeft: 10 }}>
              <Image source={require('../assets/icons/voucher24.png')}></Image>
            </View>
            {/* Button - Áp dụng */}
            <TouchableOpacity style={{ width: "30%", height: 55, backgroundColor: "blue", alignItems: 'center', justifyContent: "center", borderRadius: 5 }}>
              <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }}>Áp dụng</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* View - 2 */}
      <View style={{ flex: 2, backgroundColor: 'gray' }}>

        {/* Phiếu quà tặng */}
        <View style={{ height: 70, backgroundColor: 'white', marginBottom: 20, marginTop: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginLeft: 10, marginRight: 10 }}>
            <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>Bạn có phiếu quà tặng Tiki/Got it/Urbox?</Text>
            <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'blue' }}>Nhấn vào đây?</Text>
          </View>
        </View>

        {/* Tạm tính */}
        <View style={{ backgroundColor: 'white', flexDirection: 'row', height: 70, alignItems: 'center' }}>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginLeft: 10, marginRight: 10 }}>
            <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'gray' }}>Tạm tính</Text>
            <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'red' }}>141.800đ</Text>
          </View>
        </View>

        {/* Vùng trống màu gray */}
        <View style={{ flex: 1, backgroundColor: 'gray' }}></View>

        {/* Button Thanh Toán */}
        <View style={{ flexDirection: 'column', flex: 1, backgroundColor: 'white' }}>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginLeft: 10, marginRight: 10 }}>
            <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'gray' }}>Thành Tiền</Text>
            <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'red' }}>141.800đ</Text>
          </View>

          <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
            <TouchableOpacity style={{ width: "95%", height: 50, backgroundColor: "red", alignItems: 'center', justifyContent: "center", borderRadius: 10 }}>
              <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }}>TIẾN HÀNH ĐẶT HÀNG</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Screen_4

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})