import { Component } from "react";
import React from "react";
import { database } from "./FirebaseConfig";
import { ref,onValue, set } from "firebase/database";
import { Link } from "react-router-dom";



export class Content extends Component{
  
    allProducts=[];
    state={
        categories:[],
        products:[],
        quantity:0
    }

    componentDidMount(){
       
             this.getcategories();
             this.getproducts();
    }

    getcategories(){
        const reference = ref(database,'Categories');
        onValue(reference,(snapshot)=>{

            let categories = snapshot.val();
            this.setState({categories:categories});
            console.log(categories);

        }) 
    }

    getproducts(){

        const reference = ref(database,'Products');
        onValue(reference,(snapshot)=>{

            let products = snapshot.val();
            this.setState({products:products});
            this.allProducts = products;
            console.log(products);

        }) 

    }


    handlename=(category)=>{

        if(category === "All Category")
        {
            this.setState({products:this.allProducts});
        }

        else{
            
            this.state.products = this.allProducts;
            const products = this.state.products.filter((product)=> product['category'] === category);

            this.setState({products:products});

        }


    }

    handleclick=(quantity)=>{
        this.setState({quantity:quantity});
    }

    addcart(product){
       let productid = (Math.random()*99999000).toFixed();
       let cartid = localStorage.getItem('cartid');

       if(cartid == null)
       {
         cartid = (Math.random()*99999000).toFixed(); 
         
         const reference = ref(database,'shopping-cart/'+cartid+'/items/'+productid);
         set(reference,{
             'product':product,
             'quantity':Number(this.state.quantity)
         })

         localStorage.setItem('cartid',cartid);

       }

       else{

          
        const reference = ref(database,'shopping-cart/'+cartid+'/items/'+productid);
        set(reference,{
            'product':product,
            'quantity':Number(this.state.quantity)
        })
          
       }

    }
   

    render(){
        return(
            <div className="m-3">
                <div className="row">
                    <div className="col-3">
                    <ul className="list-group">
       <li className="list-group-item active " aria-current="true" key={1} onClick={()=>{this.handlename("All Category")}}>All Categories</li>
      {this.state.categories.map(category=>(
      <li  className="list-group-item  " key={category['categoryname']} onClick={()=>{this.handlename(category['categoryname'])}}>{category['categoryname']}</li>))} 
     </ul>
     </div>

      <div className="col-9">
          <div className="row">
              {this.state.products.map(product=>(<div className='col-4'> 
              <div key={product['title']} className="card m-1" style= {{width:'18rem'}}>
    <img src={product['imageurl']} style= {{width:'18rem',maxHeight:'10rem'}} className="card-img-top" alt="..."/>
    <div className="card-body">
    <h5 className="card-title">{product['title']}</h5>
    <h5 className="card-title">{product['price']}</h5>
    <div className="row">
        <div className="col-6">
        <select class="form-select" aria-label="Default select example" onClick={(e)=>{
            this.handleclick(e.target.value);
        }}>
  <option onValue>Quantity</option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
</select>
</div>
    <div className="col-6">  
<button onClick={()=>{this.addcart(product)}} className="btn btn-primary">Add to Cart</button>
</div>
</div>
  </div>
  </div>
  </div>
              ))}
          
          </div>
      </div>

</div>
</div>
);
    }
}