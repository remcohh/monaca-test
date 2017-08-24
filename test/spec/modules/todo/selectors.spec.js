import * as selectors from "src/modules/todo/selectors";

describe("Todo state selectors", () => {
  describe("todoItems", () => {
    it("returns the todo items", () => {
      const state = {
        todo: ["a", "b"]
      };
      expect(selectors.todoItems(state)).to.eql(state.todo);
    });
  });

  describe("amountDone", () => {
    it("returns the amount of items done", () => {
      const todo = [{ done: true }, { done: false }, { done: true }];

      expect(selectors.itemsDone.resultFunc(todo)).to.eql(2);
    });
  });
});
