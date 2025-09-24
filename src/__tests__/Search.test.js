import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../compaonents/Body"; // Keeping your spelling as requested
import MOCK_DATA from "../mocks/MockResList.json";
import { act } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

// Mock fetch globally
global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    });
});

it("should render body component", async () => {
    await act(async () => {
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        );
    });
    const CardesBefore=screen.getAllByTestId("resCard")
    expect(CardesBefore.length).toBeGreaterThan(7);
    
   const buttons = screen.getAllByRole("button");
   const searchInput=screen.getByTestId("searchInput")
  fireEvent.change(searchInput, { target: { value: "burger" } });

  fireEvent.click(buttons[0]); // Clicks the Search button
  
const CardesAfter=screen.getAllByTestId("resCard");
expect(CardesAfter.length).toBe(1);

 // Two buttons: Search and Top Rated
 // screen should load something ??

});
("search filter", async () => {
    await act(async () => {
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        );
    });
    const CardesBefore=screen.getAllByTestId("resCard")
    expect(CardesBefore.length).toBeGreaterThan(7);
   const ButtonFilter=screen.getByRole("button",{name:"Top Rated"});
   fireEvent.click(ButtonFilter);
   const CardesAfter=screen.getAllByTestId("resCard");
expect(CardesAfter.length).toBeGreaterThan(2);


    

});

