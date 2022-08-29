import React from 'react'
import { useHistory , useParams} from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios';




function Showing(props) {
    const [product,setProduct] = useState({});
    const { id } = useParams();
    const history = useHistory();
    
    React.useEffect(() => {
      axios
      .get("http://localhost:8000/api/products/"+id)
      .then((res) => {
        setProduct(res.data.result);
     
      })
      .catch((err) => console.log(err));
    }, []);
  

//to edit path
   function editProduct(e,_id){
    e.preventDefault()
    history.push("/product/edit/"+_id )
    
   }
  return (
    <div className="container w-50 py-4">
    <div className="p-4 rounded container-fluid bg-light text-center fw-bolder">
        
        <h1>show </h1>
        <div >
            <div >
                <p >{product.title}</p>
                <p>Price: {product.price}</p>
                <p>Description: {product.description}</p>
                 <button className="btn btn-outline-dark" onClick={(e) => editProduct(e,product._id)}>Edit</button> 

            </div>
        </div>
        
    </div>
    </div>
    
  )
}

export default Showing