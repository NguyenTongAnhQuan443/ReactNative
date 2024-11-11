import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Screen03 = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FFF' }}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image source={require('../assets/bifour_-removebg-preview.png')} style={styles.image} resizeMode="contain" />
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.title}>Pina Mountain</Text>
                    <Text style={styles.discountText}>15% OFF | 1350$</Text>
                    <Text style={styles.priceText}>449$</Text>

                    <Text style={styles.sectionTitle}>Description</Text>
                    <Text style={styles.descriptionText}>
                        It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.
                    </Text>
                </View>

                <View style={styles.footer}>
                    <TouchableOpacity style={styles.icon}>
                        <Text style={styles.iconText}>♡</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Add to cart</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Screen03;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#FFF',
    },
    imageContainer: {
        height: 388,
        width: '100%',
        backgroundColor: '#FCE4EC',
        borderRadius: 15,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '90%',
        height: '90%',
    },
    infoContainer: {
        paddingVertical: 20,
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    discountText: {
        fontSize: 25,
        color: '#757575',
        marginBottom: 5,
    },
    priceText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#ff5252',
        textDecorationLine: 'line-through',
        marginBottom: 10,
    },
    sectionTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 20,
    },
    descriptionText: {
        fontSize: 20,
        color: '#757575',
        lineHeight: 25,
    },
    footer: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    icon: {
        padding: 15,
        borderWidth: 1,
        borderColor: '#DDD',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconText: {
        fontSize: 30,
        color: '#757575',
    },
    button: {
        backgroundColor: '#ff5252',
        paddingVertical: 15,
        paddingHorizontal: 100,
        borderRadius: 10,
        minWidth: 180,
    },
    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 20,
    },
});
