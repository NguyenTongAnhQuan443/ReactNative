import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await fetch('https://672864f1270bd0b9755537a5.mockapi.io/week10');
    const data = await response.json();
    return data;
});

export const addProduct = createAsyncThunk('products/addProduct', async (newProduct) => {
    const response = await fetch('https://672864f1270bd0b9755537a5.mockapi.io/week10', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProduct),
    });
    const data = await response.json();
    return data;
});

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        items: [],
        status: 'idle',
        error: null,
    },
    reducers: {
        toggleFavorite: (state, action) => {
            const product = state.items.find(item => item.id === action.payload);
            if (product) {
                product.favorite = !product.favorite;
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload.map(item => ({ ...item, favorite: false }));
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(addProduct.fulfilled, (state, action) => {
                state.items.push(action.payload);
            });
    },
});

export const { toggleFavorite } = productsSlice.actions;

const store = configureStore({
    reducer: {
        products: productsSlice.reducer,
    },
});

export default store;
