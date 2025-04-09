import { screen, render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Todo from "./Todo";

describe("Todo", () => {
  it("should render", () => {
    const todo = {
      text: "test todo",
      done: false,
    };
    const noop = vi.fn(() => {});

    render(<Todo todo={todo} onClickComplete={noop} onClickDelete={noop} />);

    const element = screen.getByText("test todo");
    expect(element).toBeDefined();
  });
});
