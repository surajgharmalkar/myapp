import { Component,React} from "react";
import { auth } from "./FirebaseConfig";
import { ref,onValue, set, remove } from "firebase/database";
import { database } from "./FirebaseConfig";


import { Link } from "react-router-dom";
import { GoogleAuthProvider,signInWithRedirect,signOut,onAuthStateChanged } from "firebase/auth";



export class Navbar extends Component{

      state = {
         loginstatus:'',
         productincart:0
      }

      componentDidMount(){
        
        onAuthStateChanged(auth,(user)=>{
          if(user){
            this.setState({loginstatus:true});
          }
          else{
            this.setState({loginstatus:false});
          }

        })

        const cartid = localStorage.getItem('cartid');

        if(cartid!=null)
        {
          const reference = ref(database,'shopping-cart/'+cartid+'/items');
         onValue(reference,(snapshot)=>{

            let productincart = snapshot.val();

            if(productincart!==null){

            this.setState({productincart: (Object.keys(productincart).length)})
            }
            else{
                 this.state.productincart=0;
                 this.setState({productincart:this.state.productincart});
            }
         })
        }
      }

      login(){
         signInWithRedirect(auth,new GoogleAuthProvider());
      }
      logout()
      {
        const cartid = localStorage.getItem('cartid');
         const reference = ref(database,'shopping-cart/'+cartid);
        remove(reference);
        signOut(auth);
      }



    render(){
        return( <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqr461tV3FNnPlQ1hOeXVQ5syXR5nDqZpxCA&usqp=CAU" alt="" width="40" height="30" className="d-inline-block align-text-top"/>YourMart</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="btn btn-warning"  to="/shopping-cart">ShoppingCart <span className="badge bg-danger ms-1">{this.state.productincart}</span></Link>
              </li>
              <li className="nav-item">
               { !(this.state.loginstatus)&&<Link className="nav-link active" aria-current="page" to="#" onClick={this.login}>Login</Link>}
              </li>
              <li className="nav-item">
               { (this.state.loginstatus)&&<Link className="nav-link active" aria-current="page" to="#" onClick={this.logout}>Logout</Link>}
              </li>
             
              
            </ul>
          </div>
        </div>
      </nav>


        );
    }

}