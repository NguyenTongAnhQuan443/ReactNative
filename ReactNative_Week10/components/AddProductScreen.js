import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { addProduct } from '../store';

const AddProductScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const dispatch = useDispatch();

    const handleAddProduct = () => {
        if (name && price && image) {
            const newProduct = {
                name,
                price: `$${price}`,
                image,
            };

            dispatch(addProduct(newProduct)).then(() => {
                Alert.alert('Success', 'Product added successfully');
                navigation.navigate('Products');
            });
        } else {
            Alert.alert('Error', 'Please fill in all fields');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Product Name</Text>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                placeholder="Enter product name"
            />

            <Text style={styles.label}>Price</Text>
            <TextInput
                style={styles.input}
                value={price}
                onChangeText={setPrice}
                placeholder="Enter price"
                keyboardType="numeric"
            />

            <Text style={styles.label}>Image URL</Text>
            <TextInput
                style={styles.input}
                value={image}
                onChangeText={setImage}
                placeholder="Enter image URL"
            />

            <TouchableOpacity style={styles.button} onPress={handleAddProduct}>
                <Text style={styles.buttonText}>Add Product</Text>
            </TouchableOpacity>
        </View>
    );
};

export default AddProductScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
        fontSize: 16,
    },
    button: {
        backgroundColor: '#E94141',
        paddingVertical: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
