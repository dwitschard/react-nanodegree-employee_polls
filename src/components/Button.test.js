import Button from "./Button";
import { fireEvent, render, screen } from "@testing-library/react";
import { asyncAct } from "../helpers/test-utils";

describe("Button", () => {
  const { getByRole } = screen;

  it("should render the button and emit clicks", async () => {
    // arrange
    const onChangeHandler = jest.fn(() => null);
    await asyncAct(() =>
      render(<Button handleClick={onChangeHandler}>Submit</Button>)
    );

    // act
    const button = await getByRole("button");
    fireEvent.click(button);

    // assert
    expect(button).toBeDefined();
    expect(onChangeHandler).toHaveBeenCalled();
    expect(onChangeHandler).toHaveBeenCalledTimes(1);
  });

  it("disabled button should not trigger an onChange-Event", async () => {
    // arrange
    const onChangeHandler = jest.fn(() => null);
    await asyncAct(() =>
      render(
        <Button handleClick={onChangeHandler} disabled>
          Submit
        </Button>
      )
    );

    // act
    const button = await getByRole("button");
    fireEvent.click(button);

    // assert
    expect(button).toBeDefined();
    expect(button.disabled).toBeTruthy();
    expect(onChangeHandler).toHaveBeenCalledTimes(0);
  });

  it("should verify styling of enabled button", async () => {
    // arrange
    await asyncAct(() => render(<Button>Submit</Button>));

    // act
    const button = await getByRole("button");

    //assert
    expect(button).toMatchSnapshot();
  });

  it("should verify styling of disabled button", async () => {
    // arrange
    await asyncAct(() => render(<Button disabled>Submit</Button>));

    // act
    const button = await getByRole("button");

    //assert
    expect(button).toMatchSnapshot();
  });
});
