import RestaurantCategory from "../compaonents/RestaurantCategory";
import RestaurantContainer from "../compaonents/RestaurantContainer";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/ResCardMock.json"


it("restaurant card is loading or not ",()=>{
    render(<RestaurantContainer resData={MOCK_DATA} />)
   const name= screen.getByText("Pizza Hut");
   expect(name).toBeInTheDocument();


});
