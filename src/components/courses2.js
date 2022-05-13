import React, { Component } from "react";

export class Courses extends Component{

     render(){
        return(
            <ul>
                {this.props.value.map(course=>(<li key={course}>{course} <button className="btn btn-danger ml-2" onClick={()=>{ this.props.onDelete(course)}}>Delete</button></li>))}
            </ul>
        );
    }
}

