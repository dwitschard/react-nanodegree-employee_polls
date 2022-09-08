import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectPollById, submitVote } from "../state/pollReducer";
import {
  selectCurrentUser,
  selectUserById,
} from "../../login/state/loginReducer";
import { createSelector } from "@reduxjs/toolkit";
import { selectApplicationState } from "../../../store/applicationStore";
import PollDetailHeader from "./components/PollDetailHeader";
import PollQuestion from "./components/PollQuestion";
import PollQuestionView from "./components/PollQuestionView";

const PollDetailPage = () => {
  const { questionId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const pollDetailViewSelector = createSelector(
    [selectApplicationState],
    (state) => {
      const poll = selectPollById(state, questionId);
      return {
        poll,
        author: poll ? selectUserById(state, poll.author) : null,
        currentUser: selectCurrentUser(state),
      };
    }
  );

  const { author, poll, currentUser } = useSelector(pollDetailViewSelector);

  const canUserStillAnswer = (currentUser) => {
    const submittedAnswers = [...poll.optionOne.votes, ...poll.optionTwo.votes];
    return !submittedAnswers.includes(currentUser);
  };

  const handleOptionSelection = (pollId, option, currentUser) => {
    dispatch(submitVote({ pollId, option, currentUser }));
    navigate("/dashboard");
  };

  if (!author || !poll) {
    return;
  }

  return (
    <div className="flex items-center h-screen flex-col mt-8">
      <PollDetailHeader
        authorName={author.id}
        authorAvatarUrl={author.avatarURL}
      />
      {canUserStillAnswer(currentUser) ? (
        <PollQuestion
          poll={poll}
          optionOne={poll.optionOne}
          optionTwo={poll.optionTwo}
          clickHandler={(pollId, optionKey) =>
            handleOptionSelection(pollId, optionKey, currentUser)
          }
        />
      ) : (
        <PollQuestionView poll={poll} />
      )}
    </div>
  );
};

export default PollDetailPage;
