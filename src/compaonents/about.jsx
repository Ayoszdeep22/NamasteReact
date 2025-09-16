
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="p-6 bg-gray-50 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">About</h2>
        <UserClass
          name={"Ayoszdeep"}
          location={"Greater Noida"}
          className="text-lg text-gray-700"
        />
      </div>
    );
  }
}

export default About;
