import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Content } from "./Content";
import { Navbar } from "./Navbar";
import { Payment } from "./paymentgateway";
import { ShoppingCart } from "./shopping-cart";
import'./Responsive.css';


export function Main(){

    return(
      <div className="m-2">
      <Navbar/>

      <Switch>
        <Route path="/shopping-cart" component = {ShoppingCart}/>
        <Route path="/paymentgateway" component = {Payment}/>
        <Route path="/" component = {Content}/>
       
      </Switch>
    
      </div>

    );

}