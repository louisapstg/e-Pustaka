import { combineReducers } from "@reduxjs/toolkit"
import { persistReducer, persistStore } from "redux-persist"
import storage from "redux-persist/lib/storage"
import { configureStore } from "@reduxjs/toolkit"
import bookSlice from './bookSlice';
import auth from "./auth";

const reducers = combineReducers({
  book: bookSlice,
  token: auth
})

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({ reducer: persistedReducer })

const persistor = persistStore(store)

export { store, persistor }