import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { cartReducer } from "@/store/reducers/cart/cart";
import { productsReducer } from "@/store/reducers/products/products";
import { orderReducer } from "@/store/reducers/order/order";
import { addressReducer } from "@/store/reducers/order/address";
import { userReducer } from "@/store/reducers/order/user";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
  order: orderReducer,
  address: addressReducer,
  user: userReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
