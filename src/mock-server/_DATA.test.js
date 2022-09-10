import { _saveQuestion, _saveQuestionAnswer } from "./_DATA";

describe("_DATA Test", () => {
  const testee = _saveQuestion;

  describe("_saveQuestion", () => {
    it("_saveQuestion should succeed when correct input is passed", async () => {
      // arrange
      const author = "tylermcginnis";
      const optionOneText = "Option One!";
      const optionTwoText = "Option Two";

      // act
      const actual = await testee({
        optionOneText,
        optionTwoText,
        author,
      });

      // assert
      expect(actual).toBeDefined();
      expect(actual.id).toBeDefined();
      expect(actual.author).toEqual(author);
      expect(actual.optionOne.votes).toEqual([]);
      expect(actual.optionOne.text).toEqual(optionOneText);
      expect(actual.optionTwo.votes).toEqual([]);
      expect(actual.optionTwo.text).toEqual(optionTwoText);
      expect(actual.timestamp).toBeLessThan(Date.now());
    });

    it("_saveQuestion should fail when author is 'null' ", async () => {
      // arrange
      const question = {
        optionOneText: "Option One!",
        optionTwoText: "Option Two",
        author: null,
      };

      // act
      // assert
      await expect(testee(question)).rejects.toEqual(
        "Please provide optionOneText, optionTwoText, and author"
      );
    });
  });

  describe("_saveQuestionAnswer", () => {
    const testee = _saveQuestionAnswer;

    it("_saveQuestionAnswer should succeed when correct input is passed ", async () => {
      //arrange
      const question = {
        authedUser: "sarahedo",
        qid: "8xf0y6ziyjabvozdd253nd",
        answer: "optionOne",
      };

      //act
      const actual = await testee(question);

      //assert
      expect(actual).toBeTruthy();
    });

    it("_saveQuestionAnswer should fail when author is 'null' ", async () => {
      // arrange
      const question = { authedUser: null, qid: "12345", answer: "optionOne" };

      // act
      // assert
      await expect(testee(question)).rejects.toEqual(
        "Please provide authedUser, qid, and answer"
      );
    });
  });
});
