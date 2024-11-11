import React, { useEffect } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite, fetchProducts } from '../store';

const Screen02 = ({ navigation }) => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products.items);
    const status = useSelector(state => state.products.status);
    const error = useSelector(state => state.products.error);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchProducts());
        }
    }, [status, dispatch]);

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => navigation.navigate('ProductDetails', { product: item })}
        >
            <TouchableOpacity
                style={styles.heartIcon}
                onPress={() => dispatch(toggleFavorite(item.id))}
            >
                <Text style={[styles.heartText, { color: item.favorite ? '#E94141' : '#ccc' }]}>♡</Text>
            </TouchableOpacity>
            <Image source={require('../assets/bifour_-removebg-preview.png')} style={styles.image} resizeMode='contain' />
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>{item.price}</Text>
        </TouchableOpacity>
    );

    if (status === 'loading') {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#E94141" />
            </View>
        );
    }

    if (status === 'failed') {
        return (
            <View style={styles.errorContainer}>
                <Text style={styles.errorText}>Lỗi khi tải dữ liệu: {error}</Text>
            </View>
        );
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FFF' }}>
            <View style={styles.header}>
                <Text style={styles.headerText}>The world's Best Bike</Text>
                <TouchableOpacity
                    style={styles.addButton}
                    onPress={() => navigation.navigate('AddProduct')}
                >
                    <Text style={styles.addButtonText}>+ Add Product</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={products}
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
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#E94141',
        textAlign: 'center',
    },
    addButton: {
        backgroundColor: '#E94141',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5,
    },
    addButtonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
    itemContainer: {
        height: 250,
        flex: 1,
        margin: 10,
        padding: 15,
        backgroundColor: '#FEF5EC',
        borderRadius: 10,
        alignItems: 'center',
    },
    heartIcon: {
        position: 'absolute',
        top: 10,
        left: 10,
        padding: 5,
    },
    heartText: {
        fontSize: 30,
        color: '#E94141',
    },
    image: {
        width: 100,
        height: 100,
    },
    itemName: {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 10,
    },
    itemPrice: {
        fontSize: 25,
        color: '#ff8a80',
        marginTop: 5,
    },
    flatListContent: {
        paddingHorizontal: 10,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorText: {
        fontSize: 18,
        color: '#ff5252',
    },
});
