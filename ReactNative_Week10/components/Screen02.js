import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const data = [
    { id: '1', name: 'Pinarello', price: '$1800', image: require('../assets/bifour_-removebg-preview.png') },
    { id: '2', name: 'Pina Mountai', price: '$1700', image: require('../assets/bione-removebg-preview.png') },
    { id: '3', name: 'Pina Bike', price: '$1500', image: require('../assets/bifour_-removebg-preview.png') },
    { id: '4', name: 'Pinarello', price: '$1900', image: require('../assets/bifour_-removebg-preview.png') },
    { id: '5', name: 'Pinarello', price: '$2700', image: require('../assets/bifour_-removebg-preview.png') },
    { id: '6', name: 'Pinarello', price: '$1350', image: require('../assets/bifour_-removebg-preview.png') },
];

const Screen02 = ({ navigation }) => {
    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => navigation.navigate('ProductDetails', { product: item })}
        >
            <Image source={item.image} style={styles.image} resizeMode='contain' />
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>{item.price}</Text>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FFF' }}>
            <View style={styles.header}>
                <Text style={styles.headerText}>The world's Best Bike</Text>
            </View>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                numColumns={2}
                contentContainerStyle={styles.flatListContent}
            />
        </SafeAreaView>
    );
};

export default Screen02;

const styles = StyleSheet.create({
    header: {
        padding: 20,
        backgroundColor: '#FFF',
        alignItems: 'flex-start',
    },
    headerText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#E94141',
        textAlign: 'center',
    },
    itemContainer: {
        height: 220,
        flex: 1,
        margin: 10,
        padding: 15,
        backgroundColor: '#FEF5EC',
        borderRadius: 10,
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100,
    },
    itemName: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
    },
    itemPrice: {
        fontSize: 20,
        color: '#ff8a80',
        marginTop: 5,
    },
    flatListContent: {
        paddingHorizontal: 10,
    },
});
