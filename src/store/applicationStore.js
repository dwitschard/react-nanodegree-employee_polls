import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../features/login/state/loginReducer";
import pollReducer from "../features/poll/state/pollReducer";

export const applicationState = configureStore({
  reducer: {
    login: loginReducer,
    polls: pollReducer,
  },
});
