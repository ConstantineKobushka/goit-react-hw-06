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

import createWebStorage from 'redux-persist/es/storage/createWebStorage';

import { configureStore } from '@reduxjs/toolkit';

import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

const storage = createWebStorage('local');

const contactsConfig = {
  key: 'contactsKey',
  storage,
  whitelist: ['contacts'],
  version: 1,
};

export const store = configureStore({
  reducer: {
    contactsData: persistReducer(contactsConfig, contactsReducer),
    filterValue: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
