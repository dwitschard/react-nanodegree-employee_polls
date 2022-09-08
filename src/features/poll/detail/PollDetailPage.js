import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectPollById } from "../state/pollReducer";
import { selectUserById } from "../../login/state/loginReducer";
import { createSelector } from "@reduxjs/toolkit";
import { selectApplicationState } from "../../../store/applicationStore";
import PollDetailHeader from "./components/PollDetailHeader";
import PollQuestion from "./components/PollQuestion";
import PollQuestionView from "./components/PollQuestionView";

const PollDetailPage = () => {
  const { questionId } = useParams();
  const pollDetailViewSelector = createSelector(
    [selectApplicationState],
    (state) => {
      const poll = selectPollById(state, questionId);
      return {
        poll,
        author: poll ? selectUserById(state, poll.author) : null,
      };
    }
  );

  const { author, poll } = useSelector(pollDetailViewSelector);

  const canUserStillAnswer = () => {
    const submittedAnswers = [...poll.optionOne.votes, ...poll.optionTwo.votes];
    return submittedAnswers.includes(author.id);
  };

  const handleOptionSelection = (pollId, option) => {
    // TODO persist selection
    console.log(pollId);
    console.log(option);
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
      {canUserStillAnswer() ? (
        <PollQuestion
          poll={poll}
          optionOne={poll.optionOne}
          optionTwo={poll.optionTwo}
          clickHandler={handleOptionSelection}
        />
      ) : (
        <PollQuestionView poll={poll} />
      )}
    </div>
  );
};

export default PollDetailPage;
