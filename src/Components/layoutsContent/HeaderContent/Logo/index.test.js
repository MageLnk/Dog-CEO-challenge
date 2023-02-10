import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
// Tests
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
// Components
import Logo from "./";

describe("Probando el logo", () => {
  test("Vamos a probar que se renderiza", () => {
    render(
      <Router>
        <Logo />
      </Router>
    );
  });
  test('Logo tiene que tener src y alt = "Logo"', () => {
    render(
      <Router>
        <Logo />
      </Router>
    );
    const logo = screen.getByRole("img");
    expect(logo).toHaveAttribute("src");
    expect(logo).toHaveAttribute("alt", "Logo");
  });
});
