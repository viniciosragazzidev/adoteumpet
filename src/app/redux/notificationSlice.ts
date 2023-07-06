import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "./store";
import { title } from "process";

interface MessageType {
  title: string;
  description: string;
  statusName: string;
}

interface NotificationState {
  isOpen: boolean;
  message: Array<MessageType>;
}

const initialState: NotificationState = {
  isOpen: false,

  message: [
    {
      statusName: "sucess",
      title: "Mensagem enviada com sucesso",
      description:
        "Sua mensagem foi enviada e nossa equipe entrará em contato o mais rapido possível!",
    },
  ],
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    openNotification: (state) => {
      state.isOpen = true;
    },
    closeNotification: (state) => {
      state.isOpen = false;
    },

    setMessage: (state, action: PayloadAction<MessageType>) => {
      state.message = [action.payload];
    },
  },
});

export const { openNotification, closeNotification, setMessage } =
  notificationSlice.actions;

export const handleNotification = () => (dispatch: AppDispatch) => {
  dispatch(openNotification());

  setTimeout(() => {
    dispatch(closeNotification());
  }, 4000);
};

export default notificationSlice.reducer;
