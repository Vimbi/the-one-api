/* eslint-disable no-underscore-dangle */
import { Action, configureStore, combineReducers } from '@reduxjs/toolkit';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
// eslint-disable-next-line import/no-cycle
import { charactersSlice } from './reducers/reducers';
// import rootReducer from './reducers/reducers';

export const COMBINED_REDUCER = combineReducers({
  characters: charactersSlice.reducer,
});

export type RootState = ReturnType<typeof COMBINED_REDUCER>;

export const store = configureStore({
  reducer: COMBINED_REDUCER,
  middleware: [thunk]
})

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(
//   rootReducer,
//   composeEnhancers(
//     applyMiddleware(thunk),
//     // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )
// );

// declare global {
//   interface Window { __REDUX_DEVTOOLS_EXTENSION__: any; }
// }

// export type RootState = ReturnType<typeof store.getState>;