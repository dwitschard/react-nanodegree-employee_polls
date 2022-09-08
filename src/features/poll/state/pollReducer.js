import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getQuestions } from "../../../mock-server/api";

export const loadPolls = createAsyncThunk(
  "poll/fetchPolls",
  async () => await getQuestions()
);

export const pollSlice = createSlice({
  name: "polls",
  initialState: { polls: [], pollIds: [], loading: false },
  reducers: {
    addPoll: (state, action) => {
      const poll = {
        text: action.payload,
      };

      state.push(poll);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadPolls.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(loadPolls.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        pollIds: Object.keys(action.payload),
        polls: action.payload,
      }));
  },
});

const selectPollSlice = (state) => state.polls;
export const selectPolls = (state) => selectPollSlice(state).polls;
export const selectPollById = (state, id) => selectPolls(state)[id];

export const selectPollIds = (state) => selectPollSlice(state).pollIds;
export const selectPollsLoading = (state) => selectPollSlice(state).loading;

// this is for dispatch
export const { addPoll } = pollSlice.actions;

// this is for configureStore
export default pollSlice.reducer;
