import { configureStore, createSlice } from '@reduxjs/toolkit';

// Slice cho sản phẩm và yêu thích
const productsSlice = createSlice({
    name: 'products',
    initialState: {
        items: [
            { id: '1', name: 'Pinarello', price: '$1800', image: require('./assets/bifour_-removebg-preview.png'), favorite: false },
            { id: '2', name: 'Pina Mountai', price: '$1700', image: require('./assets/bione-removebg-preview.png'), favorite: false },
            { id: '3', name: 'Pina Bike', price: '$1500', image: require('./assets/bifour_-removebg-preview.png'), favorite: false },
            { id: '4', name: 'Pinarello', price: '$1900', image: require('./assets/bifour_-removebg-preview.png'), favorite: false },
            { id: '5', name: 'Pinarello', price: '$2700', image: require('./assets/bifour_-removebg-preview.png'), favorite: false },
            { id: '6', name: 'Pinarello', price: '$1350', image: require('./assets/bifour_-removebg-preview.png'), favorite: false },
        ],
        cart: [],
    },
    reducers: {
        toggleFavorite: (state, action) => {
            const product = state.items.find(item => item.id === action.payload);
            if (product) {
                product.favorite = !product.favorite;
            }
        },
        addToCart: (state, action) => {
            const product = state.items.find(item => item.id === action.payload);
            if (product && !state.cart.find(item => item.id === product.id)) {
                state.cart.push({ ...product, quantity: 1 });
            }
        },
    },
});

export const { toggleFavorite, addToCart } = productsSlice.actions;

const store = configureStore({
    reducer: {
        products: productsSlice.reducer,
    },
});

export default store;
