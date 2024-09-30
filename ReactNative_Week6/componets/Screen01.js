import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'

const Screen01 = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: '#1BA9FF'}}>
        {/* <View></View> */}
      </View>
      <View style={{flex: 10, backgroundColor: 'white'}}></View>
      <View style={{flex: 1, backgroundColor: '#1BA9FF'}}></View>
    </SafeAreaView>
  )
}

export default Screen01

const styles = StyleSheet.create({})