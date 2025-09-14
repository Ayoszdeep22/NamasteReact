import React from "react"
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0,
            count2:1
        }
    }   
    render(){
        const{location}=this.props
        return(
            <div className="user-card">
                <h1>Count:{this.state.count}</h1>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count+2    ,
                    })
                }}>Count Increase</button>
            <h2>Name:{this.props.name}</h2>
            <h5>Location :{location}</h5> 
            <h5>Email:Ayoszmishra22@gamil.com</h5>
            </div>

        )
    }
}
export default UserClass;