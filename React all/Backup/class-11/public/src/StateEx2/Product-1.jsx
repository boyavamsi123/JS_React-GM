import React, { use, useState } from "react";

const Product = () =>{
    let [prod,setProduct] = useState({Product_Name:"cycle",qty:1,price:4500})
    let incrHandler = () =>{
        setProduct({...prod,qty:prod.qty+1})
    }
    return(
        <div>
            <h3>Product component</h3>
            <h4>Product Name:{prod.Product_Name}</h4>
            <h4>Product Price:{prod.price}</h4>
            <button onClick={()=>{setProduct({...prod,qty:prod.qty-1})}}>Decr</button>
            {prod.qty}<button onClick={incrHandler}>INCR</button>
        </div>
    )
}

export default Product