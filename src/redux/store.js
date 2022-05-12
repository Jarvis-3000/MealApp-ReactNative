import { persistStore, persistReducer } from 'redux-persist';
import { applyMiddleware, createStore} from 'redux';
import rootReducer  from './rootReducer';
import thunk from "redux-thunk";
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig  = {
    storage: AsyncStorage, 
    key: "root"
};


const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);


module.exports = { store, persistor };