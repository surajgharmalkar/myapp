import React, { Component } from "react";
import Axios from "axios";




export class Posts extends Component{

    state={
        posts:{
          item:[]
        }
    };

    async componentDidMount(){
       const {data:posts} = await Axios.get("https://jsonplaceholder.typicode.com/posts");
      this.setState({posts:posts});
     
    }

  

    render(){
        return(

                <div className="container">
                    <table className="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Title</th>
      <th scope="col">Body</th>
      
    </tr>
  </thead>
 <tbody>
  
  {this.state.posts.map(post=>(

<tr key = {post.id}>
     
<td>{post.id}</td>
<td>{post.title}</td>
<td>{post.body}</td>
</tr>

  ))}

   
   
  </tbody>

</table>
     </div>

        );
    }

}