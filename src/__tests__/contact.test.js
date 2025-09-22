import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react";
import Contact from "../compaonents/Contact";


test("contact is loading", () => {
  // Render the contact component
  render(<Contact />);
  const heading = screen.getByRole("heading");  
  // Assertion
  expect(heading).toBeInTheDocument();
});
test("Button is loading", () => {
  // Render the contact component
  render(<Contact />);
  const Button = screen.getByRole("button");
//   const Button=screen.getByText("Sumbit")  

  // Assertion
  expect(Button).toBeInTheDocument();
});
test("imput is loading  ", () => {
  // Render the contact component
  render(<Contact />);
  const imputName = screen.getByPlaceholderText("name")
  

  
  expect(imputName).toBeInTheDocument();
});
test("two input feilds are loaded or not ",()=>{
     render(<Contact />);
     const inputBoxes=screen.getAllByRole("textbox");
     expect(inputBoxes.length).toBeLessThanOrEqual(2);


});

