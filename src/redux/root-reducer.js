import { combineReducers } from 'redux';
// import userReducer from './user/user.reducer';
// import directoryReducer  from './directory/directory.reducer'
// import cartReducer from './cart/cart.reducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import shopReducer from './shop/shop.reducer';
import userReducer from '../redux/user/user.reducer'

const persistConfig = {
    key: 'root',
    storage,
    whitelist:['cart']
}

const rootReducer = combineReducers({
     user: userReducer,
    // cart: cartReducer,
    // directory: directoryReducer,
    // shop: shopReducer,
})

export default persistReducer(persistConfig, rootReducer) 