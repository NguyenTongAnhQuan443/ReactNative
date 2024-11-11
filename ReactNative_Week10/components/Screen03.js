import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Screen03 = ({ route }) => {
    const { product } = route.params;

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FFF' }}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image source={product.image} style={styles.image} resizeMode="contain" />
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.title}>{product.name}</Text>
                    <Text style={styles.priceText}>{product.price}</Text>
                    <Text style={styles.sectionTitle}>Description</Text>
                    <Text style={styles.descriptionText}>
                        Đây là một sản phẩm tuyệt vời cho những người yêu thích thể thao.
                    </Text>
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
    priceText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#ff5252',
        marginBottom: 10,
    },
    sectionTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 20,
    },
    descriptionText: {
        fontSize: 20,
        color: '#757575',
        lineHeight: 25,
    },
});
