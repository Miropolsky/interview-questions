import { configureStore } from '@reduxjs/toolkit';
import questions from './questions';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';


export const store = configureStore({
    reducer: {
        questions: questions
    },
});


export const useStoreDispatch = () => useDispatch<typeof store.dispatch>();
export const useStoreSelector: TypedUseSelectorHook<RootState> = useSelector;
export type RootState = ReturnType<typeof store.getState>;
