import React, { Component } from "react";
import Axios from "axios";



const URL = "https://jsonplaceholder.typicode.com/posts";
export class Post extends Component{

    state={
        posts:[]
    }
   
    handleadd=async()=>{
      const mypost={
        userId:1,
        title:"My Title is Nothing",
        body:"My body"
      }

       const {data:post}= await Axios.post(URL,mypost);
       this.state.posts.push(post);
       this.setState({posts:this.state.posts});

    }

    handleupdate=async(post)=>{
      const mypost={
        title:"My New Title",
        body:"My Body is"
      }

     const {data:updated } = await Axios.patch(URL+"/"+post.id,mypost);
      
      this.state.posts[this.state.posts.indexOf(post)] = updated;

           this.setState({posts:this.state.posts});  
    }


    handledelete=async(post)=>{

      const deleted = await Axios.delete(URL+"/"+post.id);
       this.state.posts.splice(this.state.posts.indexOf(post),1);
       this.setState({posts:this.state.posts});


    }



    async componentDidMount(){
       const {data:posts} = await Axios.get("https://jsonplaceholder.typicode.com/posts");
       this.setState({posts:posts});
       console.log(posts);
    }

    render(){
        return(

                <div className="container">
                    <table className="table">
  <thead>
    <button className="btn btn-primary" onClick={this.handleadd}>Add</button>
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
<td><button className="btn btn-danger" onClick={()=>{this.handledelete(post)}}>Delete</button></td>
<td><button className="btn btn-warning" onClick={()=>{this.handleupdate(post)}}>Update</button></td>
</tr>

  ))}

   
   
  </tbody>

</table>
     </div>

        );
    }

}