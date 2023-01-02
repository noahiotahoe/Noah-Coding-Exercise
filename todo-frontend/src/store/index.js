
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';

//const store=createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
//console.log(store.getState());

const store=configureStore({
    reducer:{
        todos:todoReducer
    }
})

export default store;