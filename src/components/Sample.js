import React, { Component } from "react";
import Axios from "axios";





export class Sample extends Component{

    state={
       
          item:[]
     
    };

 

    async componentDidMount() {
     
       const {data:response} =await Axios.get("https://randomuser.me/api/");
       this.setState({item:response.results})

          

          
  }

    render(){
        return(
            

                <div className="container">
          {
          this.state.item.map(item=>(
               <div className="card" Style="width: 18rem;">
    <img src={item.picture.large} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Name:{item.name.title} {item.name.first}  {item.name.last}</h5>
    <p className="card-text"> Street: {item.location.street.number}  {item.location.street.name} </p>
    <p className="card-text"> City:{item.location.city} </p>
    <p className="card-text"> State:{item.location.state} </p>
    <p className="card-text"> Postcode:{item.location.postcode} </p>
    
  </div>
</div>))}
                


                </div>

        );
    }

}