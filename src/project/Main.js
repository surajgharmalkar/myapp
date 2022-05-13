import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Content } from "./Content";
import { Navbar } from "./Navbar";
import { ShoppingCart } from "./shopping-cart";


export function Main(){

    return(
      <div className="m-2">
      <Navbar/>

      <Switch>
        <Route path="/shopping-cart" component = {ShoppingCart}/>
        <Route path="/" component = {Content}/>
      </Switch>
    
      </div>

    );

}