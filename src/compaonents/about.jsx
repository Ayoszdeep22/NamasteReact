import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
class About extends Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){

    }
    render(){
    return(
        <div>
            <h2>about</h2>
            
            <UserClass name={"Ayoszdeep"} location={"Greater Noida"}/>
            <UserClass name={"RaviMishra"} location={"Greater Noida"}/>
        </div>
    )}
}
export default About;