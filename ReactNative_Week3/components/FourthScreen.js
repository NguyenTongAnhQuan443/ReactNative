import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import OTPTextInput from 'react-native-otp-textinput';

const FourthScreen = ({ navigation }) => {
    return (
        <LinearGradient style={{ flex: 1 }} colors={['#add8e6', '#00bfff']}>

            {/* View 1 - CODE */}
            <View style={styles.view_1}>
                <Text style={styles.view_1_Text1}>CODE</Text>
                <Text style={styles.view_1_Text2}>VERIFICATION</Text>
            </View>

            {/* View 2 */}
            <View style={{ flex: 1 }}>

                <Text style={styles.view_2_Text}>Enter ontime password sent on ++849092605798</Text>

                <OTPTextInput
                    inputCount={6}             // Số ô nhập
                    containerStyle={{
                        marginTop: 30,
                        marginBottom: 20,
                    }} // Style cho container
                    textInputStyle={{
                        borderWidth: 1,
                        borderColor: 'black',
                        borderRadius: 10,
                        width: 50,
                        height: 50,
                        fontSize: 18,
                        textAlign: 'center',
                    }}     // Style cho từng ô
                />

            </View>

            {/* View 3  */}
            <View style={styles.view_3}>
                <View style={styles.view_3_Button}>
                    <TouchableOpacity style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={styles.view_3_TextButton}>VERIFI CODE</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.view_3_Button}>
                    <TouchableOpacity style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}} onPress={() => navigation.goBack()}>
                        <Text style={styles.view_3_TextButton}>SC Trước</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </LinearGradient>
    )
}

export default FourthScreen

const styles = StyleSheet.create({

    // View 1
    view_1: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    view_1_Text1: {
        fontSize: 70,
        fontWeight: 'bold',
        marginBottom: 20
    },
    view_1_Text2: {
        fontSize: 25,
        fontWeight: 'bold',
    },

    // View 2
    view_2_Text: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },

    // View 3 
    view_3: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    view_3_Button: {
        width: '80%',
        height: '20%',
        backgroundColor: 'yellow',
        borderRadius: 10,
        justifyContent: 'center', alignItems: 'center'
    },
    view_3_TextButton: {
        fontSize: 20,
        fontWeight: 'bold'
    },
})
