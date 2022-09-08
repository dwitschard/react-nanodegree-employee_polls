import { createSlice } from "@reduxjs/toolkit";

export const pollSlice = createSlice({
  name: "polls",
  initialState: [{ text: "initial" }],
  reducers: {
    addPoll: (state, action) => {
      const poll = {
        text: action.payload,
      };

      state.push(poll);
    },
  },
});

// this is for dispatch
export const { addPoll } = pollSlice.actions;

// this is for configureStore
export default pollSlice.reducer;
