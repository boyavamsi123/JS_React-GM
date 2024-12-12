import React from "react";
class Message extends React.Component{
    msg="Hello"
    gmHandler=()=>{
        console.log("Test Case 124")
        this.msg = "Good Morning"
        console.log(this.msg)
        this.forceUpdate()
    }
    render(){
        console.log("Test Case 123")
        return <div>
                    <h3>Message Component</h3>
                     <hr/>
                     <h2>Value:{this.msg}</h2>
                     <button onClick={this.gmHandler}>GM</button>
                     <button>GN</button>
                </div>
    }
}
export default Message