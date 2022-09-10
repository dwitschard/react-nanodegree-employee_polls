import reducer, {
  addAuthenticatedUser,
  removeAuthenticatedUser,
} from "./loginReducer";

describe("loginReducer", () => {
  const initializedState = {
    user: null,
    registeredUsers: [],
    registeredUserIds: [],
    loading: false,
  };

  it("should return the initialized state", () => {
    // act
    // assert
    expect(reducer(undefined, { type: undefined })).toEqual(initializedState);
  });

  it("should persist authenticated user", () => {
    // arrange
    const authenticatedUser = "tyler";

    // act
    const actual = reducer(undefined, {
      type: addAuthenticatedUser,
      payload: authenticatedUser,
    });

    // assert
    expect(actual).toEqual({
      ...initializedState,
      ...{ user: authenticatedUser },
    });
  });

  it("should logout current user", () => {
    // arrange
    const loggedInState = {
      ...initializedState,
      ...{ user: "tylor" },
    };

    // act
    const actual = reducer(loggedInState, {
      type: removeAuthenticatedUser,
    });

    // assert
    expect(actual).toEqual(initializedState);
    expect(actual.user).toBeNull();
  });
});
