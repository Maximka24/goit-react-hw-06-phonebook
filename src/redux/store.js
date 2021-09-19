import { configureStore } from "@reduxjs/toolkit";
import reducersPhoneBook from "./redusers";

const store = configureStore({
  reducer: {
    phoneBook: reducersPhoneBook,
  },
  devTools: process.env.NODE_ENV === "development",
});

export default store;
