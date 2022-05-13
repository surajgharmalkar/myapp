import React from "react";
import { Component } from "react";
import { getproduct } from "../service/productservice";
export class Counter extends Component{
 
 

    state = {
         Products:getproduct()
    };

    deleteitem=(product)=>{
      let remeaingitem = this.state.Products.filter(p=>product.id!==p.id);
        this.setState({Products:remeaingitem});
    }

    render(){
         if(this.state.Products.length == 0)
         {
           return(
           <h1>Your card is Empty</h1>
           );
         }
        return(
              
        
            <div className="container m-10">
              <h1>Your card has {this.state.Products.length}items</h1>
               <table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Quantity</th>
      <th scope="col">Price</th>
      <th scope="col">Total</th>
    </tr>
  </thead>
  <tbody>
    { this.state.Products.map(product=>
    (<tr key={product.id}>
      <th scope="row">{product.id}</th>
      <td>{product.Name}</td>
      <td>{product.Price}</td>
      <td>{product.Quantity}</td>
      <td>{product.Price * product.Quantity}</td>
      <td><button className="btn btn-danger " onClick={()=>{this.deleteitem(product)}}>Delete</button></td>
      
    </tr>
    ))
  }
  </tbody>
</table>
    </div>
        );
        
    }
   
  
}