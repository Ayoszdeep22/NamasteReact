const Contact=()=>{
    return(
        <div>
            <h2>Contact us </h2>
            <form>
                <input type="text" className="border border-amber-600" placeholder="name"/> 
                <input type="email" className="border border-amber-600" placeholder="email"/>
                <input type="number" className="border border-amber-600" placeholder="phone"/>
                <button className="bg-amber-800 border-black rounded-2xl">Submit</button> 
            </form>
        </div>
    )
}
export default Contact