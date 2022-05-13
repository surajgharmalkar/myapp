import React, { Component } from "react";

export class Courses extends Component{

    state = {
        courses:this.props.value

    };
    
    delete=(c)=>{

        let arr = this.state.courses.filter(course=>c!==course);
        this.setState({courses:arr});
    
    }


    render(){
        return(
            <ul>
                {this.state.courses.map(course=>(<li key={course}>{course} <button className="btn btn-danger ml-2" onClick={()=>{this.delete(course); this.props.onDelete(course)}}>Delete</button></li>))}
            </ul>
        );
    }
}

