import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Header from "../compaonents/Header.jsx";
import appStore from "../feature/appStore.js";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("renders the login button", () => {
  render(
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginButton = screen.getByRole("button", { name: /login/i });
  expect(loginButton).toBeInTheDocument();
});

it("renders the cart link", () => {
  render(
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const cartLink = screen.getByRole("link", { name: /cart/i });
  expect(cartLink).toBeInTheDocument();
  expect(cartLink).toHaveAttribute("href", "/cart");
});

it("shows logout button after clicking login", () => {
  render(
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }} >
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginButton = screen.getByRole("button", { name: /login/i });
  fireEvent.click(loginButton);
  const logoutButton = screen.getByRole("button", { name: /logout/i });
  expect(logoutButton).toBeInTheDocument();
});
