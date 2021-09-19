import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import reducersPhoneBook from "./redusers";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const phoneBookPersistConfig = {
  key: "phoneBook",
  storage,
  blacklist: "filters",
};

const mainReducer = combineReducers({
  phoneBook: persistReducer(phoneBookPersistConfig, reducersPhoneBook),
});

const store = configureStore({
  reducer: mainReducer,
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

const persistor = persistStore(store);

export default { store, persistor };
