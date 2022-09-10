/**
 * Just like regular act() but it always returns a Promise
 * @param fn function to wrap inside act
 */
import { act } from "@testing-library/react";

export async function asyncAct(fn) {
  // This async is necessary to catch all asynchronous executions inside act
  // eslint-disable-next-line require-await
  await act(async () => {
    fn();
  });
}
