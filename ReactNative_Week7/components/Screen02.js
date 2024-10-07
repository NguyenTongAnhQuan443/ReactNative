import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
const Screen02 = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>

            {/* View - 1 */}
            <View style={{ flex: 4, flexDirection: 'column' }}>

                {/* Icon back - User*/}
                <View style={{ flex: 2, flexDirection: 'row', alignItems: 'center' }}>

                    {/* Icon */}
                    <View style={{ width: '40%', justifyContent: 'center', paddingLeft: 20 }}>
                        {/* <Image source={require('../assets/icons/back.png')} /> */}
                        <Ionicons name='arrow-back' size={25} />
                    </View>

                    {/* User */}
                    <View style={{ width: '60%', flexDirection: 'row', alignItems: 'center' }}>

                        {/* View - Image */}
                        <View style={{ width: 70, height: 70, justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={{ uri: 'https://www.thepoetmagazine.org/wp-content/uploads/2024/06/meo-mat-to-meme.jpg' }} style={{ width: 70, height: 70, borderRadius: 100 }}></Image>
                        </View>

                        {/* Name User And Hello */}
                        <View style={{ left: 10 }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Hi Cat</Text>
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
            <View style={{ flex: 8, }}>

                {/*View - To do List */}
                <ScrollView style={{ height: '70%', backgroundColor: 'yellow' }} contentContainerStyle={{ alignItems: 'center' }}>
                    <View style={{ width: '90%', height: 65, backgroundColor: '#D8DADD', borderRadius: 30, marginBottom: 15, borderRadius: 50, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

                        {/* Icon check */}
                        <TouchableOpacity>
                            <Ionicons name='checkmark-done-outline' size={35} color='#369F5B' style={{ left: 10 }} />
                        </TouchableOpacity>


                        {/* Text note */}
                        <View style={{ width: '75%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Nguyễn Quân</Text>
                        </View>

                        {/* Icon edit */}
                        <TouchableOpacity>
                            <Ionicons name='create-outline' size={35} color='#E06F70' style={{ right: 10 }} />
                        </TouchableOpacity>

                    </View>



                </ScrollView>

                {/* View - Button */}
                <View style={{ height: '30%', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <View style={{ width: 80, height: 80, backgroundColor: '#26C3D9', borderRadius: 50 }}>
                        <TouchableOpacity style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
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