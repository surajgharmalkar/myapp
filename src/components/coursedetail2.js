import React, { Component } from "react";
import { Courses } from "./courses2"



export class CourseDetail extends Component{
    
     state = {
         newcourse:[]
     }

     addcourse =(course)=>{
             
            this.state.newcourse.push(course.value);
            this.setState({newcourse:this.state.newcourse});
   
       
     }
     deletecourse=(c)=>{
              let arr =  this.state.newcourse.filter(nc=>nc!==c);
               this.setState({newcourse:arr});
            
     }

      
    render(){
            
        return(
                <div>
                    <Courses value={this.state.newcourse} onDelete={(c)=>{this.deletecourse(c)}}/>
                    <h1>Total {this.state.newcourse.length} avalaible</h1>
                    <input type="text" id="input"></input>
                    
                     <button className="btn btn-primary "onClick={()=>{this.addcourse(document.getElementById("input"));}}>ADD</button>
                </div>
             );
    }
}