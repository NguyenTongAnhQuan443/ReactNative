import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';

const Screen01 = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 26, fontWeight: 'bold', textAlign: 'center' }}>
                    A premium online store for sporter and their stylish choice
                </Text>
            </View>
            <View style={{ flex: 8, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ width: 359, height: 388, backgroundColor: '#F7E5E4', borderRadius: 30, alignItems: 'center' }}>
                    <Image source={require('../assets/bifour_-removebg-preview.png')} style={{ width: '100%', height: '100%' }} resizeMode='contain' />
                    <View style={styles.shopContainer}>
                        <Text style={styles.shopText}>POWER BIKE{"\n"}SHOP</Text>
                    </View>
                </View>
            </View>
            <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity style={{ width: '90%', height: '55%', backgroundColor: '#E94141', borderRadius: 50, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 27, fontWeight: 'bold', color: 'white' }}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default Screen01;

const styles = StyleSheet.create({
    shopContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
    },
    shopText: {
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
