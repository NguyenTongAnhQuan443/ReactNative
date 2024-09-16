import { StyleSheet, Text, View, TouchableOpacity, Button, TextInput, Image } from 'react-native'
import { React, useState } from 'react'

const Screen_4 = () => {
  const [number, setNumber] = useState(1);
  return (
    <View style={styles.container}>

      {/* View - 1 - sản phẩm */}
      <View style={{ flex: 2 }}>

        {/* Ảnh sản phẩm - tên sản phẩm */}
        <View style={{ flex: 1, backgroundColor: 'yellow', flexDirection: 'row', marginTop: 50 }}>

          {/* Ảnh sản phẩm */}
          <View style={{ width: "40%", backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
            <Image style={{ width: 130, height: 180, borderRadius: 10 }} source={{ uri: 'https://i1-giaitri.vnecdn.net/2018/03/20/mat-biec-9626-1521549733.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=GxJJnUFjSZ_tgofI-2ZzDA' }} />
          </View>

          {/* Tên sản phẩm - v.v */}
          <View style={{ width: "60%", backgroundColor: 'white', flexDirection: 'column', paddingLeft: 30 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 5 }}>Tên sách: Mắt biết</Text>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 5 }}>Cung cấp bởi : Tiki Trading</Text>
            <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'red', marginBottom: 5 }}>141.800đ</Text>
            <Text style={{ fontSize: 16, color: 'gray', textDecorationLine: 'line-through', marginBottom: 15 }}>200.000đ</Text>

            {/* Tăng giảm sản phẩm */}
            <View style={{ flexDirection: 'row' }}>

              <View style={{ width: '70%', flexDirection: 'row' }}>
                {/* btn - giảm */}
                <View style={{ width: 25, height: 25, backgroundColor: 'gray', justifyContent: 'center', alignItems: 'center' }}>
                  <TouchableOpacity style={{ width: '100%', height: '100%' }} onPress={() => {
                    setNumber(number - 1);
                  }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>-</Text>
                  </TouchableOpacity>
                </View>

                {/* Textinput - số lượng sản phẩm */}
                <TextInput style={{ width: 50, height: 25, borderWidth: 1, marginLeft: 5, marginRight: 5, fontSize: 16 }} value={number.toString()} />

                {/* btn - Tăng */}
                <View style={{ width: 25, height: 25, backgroundColor: 'gray', justifyContent: 'center', alignItems: 'center' }}>
                  <TouchableOpacity style={{ width: '100%', height: '100%' }} onPress={() => {
                    setNumber(number + 1);
                  }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>

              {/* Text - mua sau */}
              <View style={{ width: '30%' }}>
                <Text style={{ color: 'blue', fontWeight: 'bold' }}>Mua sau</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Text - Mã giảm giá */}
        <View style={{ flex: 1, backgroundColor: 'red', flexDirection: 'column' }}>
          <View style={{ flex: 1, backgroundColor: 'white', flexDirection: 'column' }}>
            <View style={{ flex: 1, flexDirection: 'row', marginLeft: 10, marginRight: 10, alignItems: 'center' }}>
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