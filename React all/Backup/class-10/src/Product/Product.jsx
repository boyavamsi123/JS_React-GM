import React from 'react'
class Product extends React.Component{
    //qty=1
    state={
        qty:1
    }
    incrHandler = ()=>{
        this.setState({qty:this.state.qty +1})
    }
    decrHandler = ()=>{
        this.setState({qty:this.state.qty -1})
    }
    render(){
        console.log("First Render")
        return <div>
                <h3>Product Comp</h3>
                <h3>Product Qty:{this.state.qty}</h3>
                <button onClick={this.decrHandler}>DECR</button>
                <button onClick={this.incrHandler}>INCR</button>
               </div>
    }
}
export default Product