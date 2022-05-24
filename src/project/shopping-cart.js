import { Component,React } from "react";
import { ref,onValue, set,remove } from "firebase/database";
import { database } from "./FirebaseConfig";
import { GoogleAuthProvider,signInWithRedirect,signOut,onAuthStateChanged } from "firebase/auth";
import { auth } from "./FirebaseConfig";
import { Link } from "react-router-dom";


import { Route } from "react-router-dom";
import { Payment } from "./paymentgateway";
import { Switch } from "react-router-dom";


export class ShoppingCart extends Component{


    state={
    
        products:{},
     
    }


    componentDidMount(){
        let cartid = localStorage.getItem('cartid');
        const reference = ref(database,'shopping-cart/'+cartid+'/items');
         onValue(reference,(snapshot)=>{

            let Products = snapshot.val();
            console.log(Products);

            this.setState({products: Products})
            
         })
    }

    handledelete=(product)=>{

        let products = {...this.state.products};

        delete products[product];

        this.setState({products:products});

        const cartid = localStorage.getItem('cartid');
         const reference = ref(database,'shopping-cart/'+cartid+'/items/'+product);
         remove(reference);

      

    }

    handleclick=()=>{
      onAuthStateChanged(auth,(user)=>{
        if(user){
            
         
         
        }

        else{
          signInWithRedirect(auth,new GoogleAuthProvider());
        }

      })

     
    }

    render(){

        if(this.state.products===null)
        {
          return(
            <div className="container">
            <h6 className="text-primary">Your Cart is Empty!!</h6>
            </div>
          );
        }
        return(

        <div className="container">


   <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col">Quantity</th>
      <th scope="col">Total Price</th>
    </tr>
  </thead>
  <tbody>
{Object.keys(this.state.products).map((product,i)=>(
          <tr key={product}>
          <th scope="row">{i+1}</th>
          <td>{this.state.products[product].product.title}</td>
          <td>{this.state.products[product].product.price}</td>
          <td>{this.state.products[product].quantity}</td>
          <td>{this.state.products[product].product.price*this.state.products[product].quantity}</td>
        <td key={product}><button className="btn btn-danger" onClick={()=>{this.handledelete(product)}}>Delete</button></td>
        </tr>
          
      ))}
   </tbody>
   <tfoot>
     <td></td>
     <td></td>
     <td></td>
     <td></td>
     <td ></td>
     <td ><Link className="btn btn-success active" to = "/paymentgateway" onClick={this.handleclick}>Checkout& Pay</Link></td>

   </tfoot>
    
</table>
   
 </div>
        );
    }

}