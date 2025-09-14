import React from "react"
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userInfo:{
                name:"dummyname",
               
                location:"location"

            }
        }
       
    }   
   
    async componentDidMount(){
       const data= await fetch("https://api.github.com/users/ayoszdeep22")
        const json=await data.json();
        this.setState({
            userInfo:json
        })
        
        
    }

    
    render(){
        const{name,location,avatar_url}=this.state.userInfo;
    
        return(
            <div className="user-card">
                <img src={avatar_url} />
                
            <h2>Name:{name}</h2>
            <h5>Location {location}</h5> 
            <h5>Email:Ayoszmishra22@gamil.com</h5>
            <h6>following</h6>
            </div>

        )
    }
}
export default UserClass;