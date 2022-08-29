import React,{useState} from 'react'
import { useParams,useHistory } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'


function Editing(props) {
    const [title,setTitle] = useState("")
    const [price,setPrice] = useState("")
    const [description,setDescription] = useState("")

    const { id } = useParams();
    
    const history = useHistory();


    useEffect( () => {
        axios.get("http://localhost:8000/api/products/"+id)
        .then(res => {
            setTitle(res.data.title);
            setDescription(res.data.description)
            setPrice(res.data.price)
        }).catch(err => console.log(err));
    },[])
   
    const handleSubmit = (e) => {
        e.preventDefault()

        //    /api/product/:_id
        axios.put("http://localhost:8000/api/product/"+id,{title,price,description})
                    .then(res => {
                        console.log(res);
                        history.push("/products/new")})
                        .catch(err => console.log(err));
                    
    }
  return (
    <div className="container w-50 py-4">
      <div className="p-4 rounded container-fluid bg-light text-center fw-bolder"> 
    <div>Editing</div>
   </div>
    <div className="container w-50 py-4">
            <header className="pb-3 mb-4 border-bottom">
                <div className="p-4 rounded container-fluid bg-light text-center fw-bolder">
                   your title: {title}
                </div>
            </header>
            <form onSubmit={handleSubmit} className="container-fluid p-3 bg-light rounded-5">
                <div className="row mb-3">
                    <div className="col-md-2 text-center align-self-center fw-semibold">
                        Title:
                    </div>
                    <div className="col-md-9 ">
                        <input type="text" name="title" onChange={(e)=>setTitle(e.target.value)}
                               value={title} className="form-control"/>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-2 text-center align-self-center fw-semibold">
                        Price:
                    </div>
                    <div className="col-md-9 ">
                        <input type="Number" name="price" onChange={(e)=>setPrice(e.target.value)}
                               value={price} className="form-control"/>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-2 text-center align-self-center fw-semibold">
                        Description:
                    </div>
                    <div className="col-md-9">
                        <textarea name="description" onChange={ (e)=>setDescription(e.target.value)}
                                  value={description} className="form-control"></textarea>
                    </div>
                </div>
                <div className="row mb-3">
                    <input type="submit" value="Submit" className="btn btn-dark btn-block w-50 mx-auto"/>
                </div>

            </form>
        </div>
    </div>
    
  )
}

export default Editing