import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react";
import Contact from "../compaonents/Contact";
describe("testing the conatct loading",()=>{
  it("contact is loading", () => {
  // Render the contact component
  render(<Contact />);
  const heading = screen.getByRole("heading");  
  // Assertion
  expect(heading).toBeInTheDocument();
});
it("Button is loading", () => {
  // Render the contact component
  render(<Contact />);
  const Button = screen.getByRole("button");
//   const Button=screen.getByText("Sumbit")  

  // Assertion
  expect(Button).toBeInTheDocument();
});
it("imput is loading  ", () => {
  // Render the contact component
  render(<Contact />);
  const imputName = screen.getByPlaceholderText("Your Name")
  

  
  expect(imputName).toBeInTheDocument();
});
it("two input feilds are loaded or not ",()=>{
     render(<Contact />);
     const inputBoxes=screen.getAllByRole("textbox");
     /// it will return the jsx element 
     expect(inputBoxes.length).toBe(3);


});

})




