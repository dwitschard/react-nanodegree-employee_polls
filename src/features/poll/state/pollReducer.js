import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getQuestions,
  saveQuestion,
  saveQuestionAnswer,
} from "../../../mock-server/api";

export const loadPolls = createAsyncThunk(
  "poll/fetchPolls",
  async () => await getQuestions()
);

export const persistPoll = createAsyncThunk(
  "polls/createPoll",
  async ({ poll }) => {
    console.log(poll);
    const savedQuestion = await saveQuestion(poll);
    return { poll: savedQuestion };
  }
);

export const submitVote = createAsyncThunk(
  "polls/persistVote",
  async (action) => {
    const { pollId, option, currentUser } = action;
    await saveQuestionAnswer(currentUser, pollId, option);
    return action;
  }
);

export const pollSlice = createSlice({
  name: "polls",
  initialState: { polls: [], pollIds: [], loading: false },
  reducers: {},
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
      }))
      .addCase(submitVote.fulfilled, (state, action) => {
        const { pollId, option, currentUser } = action.payload;
        const currentPoll = state.polls[pollId];
        state.polls[pollId] = {
          ...currentPoll,
          [option]: {
            ...currentPoll[option],
            votes: currentPoll[option].votes.concat(currentUser),
          },
        };
      })
      .addCase(persistPoll.fulfilled, (state, action) => {
        const { poll } = action.payload;
        state.polls[poll.id] = poll;
      });
  },
});

const selectPollSlice = (state) => state.polls;
export const selectPolls = (state) => selectPollSlice(state).polls;
export const selectPollById = (state, id) => selectPolls(state)[id];

export const selectPollIds = (state) => selectPollSlice(state).pollIds;
export const selectPollsLoading = (state) => selectPollSlice(state).loading;

// this is for configureStore
export default pollSlice.reducer;
