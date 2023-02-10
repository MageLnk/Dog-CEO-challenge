import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
// Tests
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
// Components
import Search from "./";

describe("Evaluando el Search", () => {
  test("Se renderiza el componente", () => {
    render(
      <Router>
        <Search />
      </Router>
    );
  });

  test("El input debería ser: test", () => {
    const component = render(
      <Router>
        <Search />
      </Router>
    );
    const input = component.getByLabelText("dog-input");
    fireEvent.change(input, { target: { value: "test" } });
    expect(input.value).toBe("test");
  });
});
