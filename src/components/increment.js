import React, { Component } from "react";


export class Increment extends Component{

      state = {
          count : 1
      };
    
       increment=()=>{
           this.setState({count:this.state.count+1});
       }
       reset=()=>{
           this.setState({count:0});
       }

       Decrement=()=>{
        this.setState({count:this.state.count-1});
       }
      
    render(){
        return(
            <div>
        <span className="badge bg-warning m-5">{this.state.count}</span>
        <button className="btn btn-primary m-5 " onClick={this.increment}>Increment</button>
        <button className="btn btn-primary m-5" onClick={this.reset}>Reset</button>
        <button className="btn btn-primary m-5" onClick={this.Decrement}>Drecement</button>


        
        </div>
        );
    }
}
