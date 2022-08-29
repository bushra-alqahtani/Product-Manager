import React from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";




function ListAll(props) {
  //const {products}=props;
  // console.log(products.products);
  const history =useHistory();
  const [flag,setFlag]=React.useState(false);

  //const
  const [products, setProducts] = React.useState([]);
  console.log(products);
  //fetch for data
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then((res) => {
        setProducts(res.data);
        // console.log(products);

      })
      .catch((err) => console.log(err));
  }, [flag]);


      // Delete Product and update the list in DOM by sending data to main
      function deleteProduct (e,id)  {
          axios.delete("http://localhost:8000/api/products/deletebyId/"+id)
                      .then(res => {
                        console.log(res)
                        if(flag){
                            setFlag(false);

                        }else{
                            setFlag(true);
                        }
                      }).catch(err=>console.log(err));

                    
          };
      
  return (
    <div className="container w-50 py-4">
      <div className="p-4 rounded container-fluid bg-light text-center fw-bolder"> 
        <h1 >List All Products</h1>
      </div>
      <div className="p-4 rounded container-fluid bg-light text-center fw-bolder">
        <ul  >
          {products.map((product, i) => 
            <li key={i}  >
                <div  >
                    <div className="row">
                        <div className="col">
                    <Link to={"/product/"+product._id}> {product.title}</Link><br/>

                        </div>
                        <div className="col ">
                    <button className="btn btn-outline-dark"><Link to={"/product/edit/"+product._id}>Edit</Link></button>
                    <button  className="btn btn-outline-dark" onClick={(e)=>{deleteProduct(e,product._id)}}> delete </button>
                            
                        </div>
                    </div>
                    <hr />
                   
                </div> 
           
            </li>
          )} 
        </ul>
      </div>
    </div>
  );
}

export default ListAll;
