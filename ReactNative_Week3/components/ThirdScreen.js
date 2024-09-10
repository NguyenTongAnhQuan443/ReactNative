import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient' // Import từ Expo

const ThirdScreen = ({ navigation }) => {
    return (
        <LinearGradient style={{ flex: 1 }} colors={['#add8e6', '#00bfff']}>

            {/* View 1 - Lock */}
            <View style={styles.view_1}>
                <Image style={styles.view_1_IMG} source={require('../assets/icon/lock 256.png')} />

                <View style={{ alignItems: 'center' }}>
                    <Text style={styles.view_2_Text}>FORGET</Text>
                    <Text style={styles.view_2_Text}>PASSWORD</Text>
                </View>

            </View>

            {/* View 2 - Text */}
            <View style={styles.view_2}>
                <Text style={styles.view_2_Text}>Provide your account's email for which you want to reset your password</Text>

                <View style={{ width: '100%', alignItems: 'center' }}>
                    <TextInput placeholder='Email' style={{ width: '90%', height: 50, borderWidth: 2, borderColor: 'gray', fontSize: 18, borderRadius: 10, paddingLeft: 55 }} />

                    <Image style={{ width: 24, height: 24, marginBottom: 40, position: 'absolute', left: 40, top: 14 }} source={require('../assets/icon/mail24.png')} />
                </View>

            </View>

            {/* View 3 - Button */}
            <View style={{ flex: 1, alignItems: 'center' }}>
                <View style={styles.view_3_Touchable}>
                    <TouchableOpacity>
                        <Text style={styles.view_3_Button}>NEXT</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* View 4 - Navigator */}
            <View style={styles.view_4}>
                <View style={styles.view_4_Button}>
                    <TouchableOpacity onPress={() =>navigation.goBack()}>
                        <Text style={styles.view_3_Button}>SC Trước</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.view_4_Button}>
                    <TouchableOpacity onPress={() => navigation.navigate('SecondScreen')}>
                        <Text style={styles.view_3_Button}>SC Sau</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </LinearGradient>
    )
}

export default ThirdScreen

const styles = StyleSheet.create({

    // View 1
    view_1: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },

    view_1_IMG: {
        width: 140,
        height: 140,
        marginBottom: 40
    },

    // View 2
    view_2: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    view_2_Text: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },


    // View 3 
    view_3_Touchable: {
        width: '90%',
        height: 48,
        backgroundColor: 'yellow',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center'
    },
    view_3_Button: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    // View 4
    view_4: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around'
    },
    view_4_Button: {
        width: '40%',
        backgroundColor: 'yellow',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
})
