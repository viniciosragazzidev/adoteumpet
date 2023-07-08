import { configureStore } from "@reduxjs/toolkit";
import notificationReducer from "./notificationSlice";
import petsReducer from "./petsSlice";
import appReducer from "./appSlice";

const store = configureStore({
  reducer: {
    notification: notificationReducer,
    pets: petsReducer,
    app: appReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
