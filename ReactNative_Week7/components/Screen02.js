import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput, Image, ScrollView, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Ionicons } from '@expo/vector-icons'

import Screen03 from './Screen03'

import { fetchItems, deleteItem, AddItem } from '../services/Services'

const Screen02 = ({ navigation, route }) => {

    const { userName } = route.params

    // API
    const [data, setData] = useState([])

    useEffect(() => {
        fetchItems(setData);
    }, [data])
    // API

    const renderItem = ({ item }) => (
        <View style={{ width: '90%', height: 65, backgroundColor: '#D8DADD', borderRadius: 30, marginBottom: 15, borderRadius: 50, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

            {/* Icon check */}
            <TouchableOpacity>
                <Ionicons name='checkmark-done-outline' size={35} color='#369F5B' style={{ left: 10 }} />
            </TouchableOpacity>


            {/* Text note */}
            <View style={{ width: '75%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{item.note}</Text>
            </View>

            {/* Icon edit */}
            <TouchableOpacity>
                <Ionicons name='create-outline' size={35} color='#E06F70' style={{ right: 10 }} />
            </TouchableOpacity>

            {/* Icon delete */}
            <TouchableOpacity
                onPress={() => {
                    deleteItem(item.id)
                }}
            >
                <Ionicons name='close-circle-outline' size={35} color='#E06F70' style={{ right: 10 }} />
            </TouchableOpacity>

        </View>
    )

    return (
        <SafeAreaView style={{ flex: 1 }}>

            {/* View - 1 */}
            <View style={{ flex: 4, flexDirection: 'column' }}>

                {/* Icon back - Username*/}
                <View style={{ flex: 2, flexDirection: 'row', alignItems: 'center' }}>

                    {/* Icon Back */}
                    <View style={{ width: '40%', justifyContent: 'center', paddingLeft: 20 }}>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.goBack()
                            }}
                        >
                            <Ionicons name='arrow-back' size={25} />
                        </TouchableOpacity>
                    </View>

                    {/* Image - User */}
                    <View style={{ width: '60%', flexDirection: 'row', alignItems: 'center' }}>

                        {/* View - Image */}
                        <View style={{ width: 70, height: 70, justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={{ uri: 'https://www.thepoetmagazine.org/wp-content/uploads/2024/06/meo-mat-to-meme.jpg' }} style={{ width: 70, height: 70, borderRadius: 100 }}></Image>
                        </View>

                        {/* Name User name And Text */}
                        <View style={{ left: 10 }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Hi {userName}</Text>
                            <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'grey' }}>have afrate day a head</Text>
                        </View>
                    </View>
                </View>

                {/* View Input */}
                <View style={{ flex: 2, justifyContent: 'flex-start', alignItems: 'center', }}>
                    <TextInput style={{ borderWidth: 1, height: 55, width: '90%', borderRadius: 10, fontSize: 20, paddingLeft: 40 }} placeholder='Search'></TextInput>
                    <Ionicons name='search' color='black' size={20} style={{ position: 'absolute', left: 30, top: 18 }} />
                </View>
            </View>

            {/* View - 2 */}
            <View style={{ flex: 8 }}>

                {/* FLATLIST */}
                <View style={{ height: '80%', justifyContent: 'center', alignItems: 'center' }}>
                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        numColumns={1}

                        contentContainerStyle={{
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    />
                </View>

                {/* View - Button ADD*/}
                <View style={{ height: '20%', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <View style={{ width: 80, height: 80, backgroundColor: '#26C3D9', borderRadius: 50 }}>
                        <TouchableOpacity style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
                            onPress={() => {
                                navigation.navigate('Screen03', { userName: userName })
                            }}
                        >
                            <Ionicons name='add' color='white' size={45} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Screen02

const styles = StyleSheet.create({})