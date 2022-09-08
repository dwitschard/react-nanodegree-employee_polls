import {
  _getQuestions,
  _getUsers,
  _saveQuestion,
  _saveQuestionAnswer,
} from "./_DATA.js";

export const getQuestions = () => _getQuestions();
export const getUsers = () => _getUsers();
export const saveQuestion = (question) => _saveQuestion(question);
export const saveQuestionAnswer = (authedUser, quid, answer) =>
  _saveQuestionAnswer(authedUser, quid, answer);

export const getAllData = Promise.all([getQuestions(), getUsers()]).then(
  ([questions, data]) => ({ questions, data })
);
