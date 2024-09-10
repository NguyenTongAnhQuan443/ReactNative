import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient' // Import từ Expo

const SecondScreen = ({navigation}) => {
    return (
        <LinearGradient style={{ flex: 1 }} colors={['#add8e6', '#00bfff']}>

            {/* View 1 - Hình tròn */}
            <View style={styles.view_1}>
                <View style={styles.view_1_HinhTron}></View>
            </View>

            {/* View 2 - GROW .... */}
            <View style={styles.view_2}>
                <Text style={styles.view_2_Text}>GROW</Text>
                <Text style={styles.view_2_Text}>YOUR BUSINESS</Text>
            </View>

            {/* View 3 - Text ... */}
            <View style={styles.view_3}>
                <Text style={styles.view_3_Text}>We will help you to grow your business using
                    online server</Text>
            </View>

            {/* View 4 - Touchable... */}
            <View style={{ flex: 1 }}>
                <View style={styles.view_4}>
                    <TouchableOpacity style={styles.view_4_Touchable} >
                        <Text style={styles.view_4_Button}>LOGIN</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.view_4_Touchable}>
                        <Text style={styles.view_4_Button}>SIGN UP</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.view_4_ContainerText}>
                    <Text style={styles.view_4_Text}>HOW WE WORK?</Text>
                </View>
            </View>

            {/* Navigator */}
            <View style={styles.view_5}>
                <View style={styles.view_4_Touchable}>
                    <TouchableOpacity style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}} onPress={() => {navigation.goBack()}}>
                        <Text style={styles.view_4_Button}>SC Trước</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.view_4_Touchable}>
                    <TouchableOpacity style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}} onPress={() => navigation.navigate('ThirdScreen')}>
                        <Text style={styles.view_4_Button}>SC Sau</Text>
                    </TouchableOpacity>
                </View>
            </View>


        </LinearGradient>
    )
}

export default SecondScreen

const styles = StyleSheet.create({

    // View 1
    view_1: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    view_1_HinhTron: {
        width: 200,
        height: 200,
        borderRadius: 100,
        borderWidth: 10,
        borderColor: 'black'
    },

    // View 2
    view_2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    view_2_Text: {
        fontSize: 25,
        fontWeight: 'bold'
    },

    // View 3 
    view_3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    view_3_Text: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center'
    },

    // View 4
    view_4: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    view_4_Touchable: {
        width: 119,
        height: 48,
        backgroundColor: 'yellow',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center'
    },
    view_4_Button: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    view_4_ContainerText: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    view_4_Text: {
        fontWeight: 'bold',
        fontSize: 18
    },

    // View 5
    view_5: {
        flexDirection: 'row',
        width: '100%', height: '5%',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 10
    }
})
