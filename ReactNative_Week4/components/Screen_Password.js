import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import { React, useState } from 'react'
import { CheckBox } from 'react-native-elements';


const Screen_Password = () => {
    const [isSelected1, setSelection1] = useState(false);
    const [isSelected2, setSelection2] = useState(false);
    const [isSelected3, setSelection3] = useState(false);
    const [isSelected4, setSelection4] = useState(false);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#9898C3' }}>
            <View style={{ flex: 1, margin: 20, backgroundColor: '#23235B', borderRadius: 20, borderWidth: 2, borderColor: 'white', alignItems: 'center' }}>

                {/* Text - PASSWORD GENERATORs */}
                <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 40, color: 'white', fontWeight: 'bold', textAlign: 'center' }}>PASSWORD GENERATOR</Text>
                </View>

                {/* Input */}
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <TextInput style={{ borderWidth: 2, width: '90%', height: '60%', borderRadius: 10, backgroundColor: '#151537' }} />
                </View>

                {/* Password-Length */}
                <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                    <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold', paddingLeft: 10, width: '60%' }}>Password Length</Text>
                    <TextInput style={{ height: 30, borderWidth: 1, backgroundColor: 'white', width: '35%' }} />
                </View>

                {/* Include lower case letterss */}
                <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                    <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold', paddingLeft: 10, width: '80%' }}>Include lower case letters</Text>
                    <CheckBox
                        checked={isSelected1}
                        onPress={() => { setSelection1(!isSelected1) }}
                    />
                </View>


                {/* Include upcase letters */}
                <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                    <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold', paddingLeft: 10, width: '80%' }}>Include upcase letters</Text>
                    <CheckBox
                        checked={isSelected2}
                        onPress={() => { setSelection2(!isSelected2) }}
                    />
                </View>

                {/* Include number */}
                <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                    <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold', paddingLeft: 10, width: '80%' }}>Include number</Text>
                    <CheckBox
                        checked={isSelected3}
                        onPress={() => { setSelection3(!isSelected3) }}
                    />
                </View>

                {/* Include special symbol */}
                <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                    <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold', paddingLeft: 10, width: '80%' }}>Include special symbol</Text>
                    <CheckBox
                        checked={isSelected4}
                        onPress={() => { setSelection4(!isSelected4) }}
                    />
                </View>

                <View style={{ width: '90%', height: 70, backgroundColor: '#3B3B98', justifyContent: 'center', alignItems: 'center', borderRadius: 10, marginBottom: 10 }}>
                    <TouchableOpacity>
                        <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>GENERATE PASSWORD</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </SafeAreaView>
    )
}

export default Screen_Password

const styles = StyleSheet.create({})