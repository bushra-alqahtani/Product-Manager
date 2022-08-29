import React from "react";
import axios from "axios";
// import { useHistory } from "react-router-dom";
function Create(props) {
  const [title,setTitle] = React.useState("")
  const [price,setPrice] = React.useState("")
  const [description,setDescription] = React.useState("")
  const [data,setData]=React.useState([])
  // const history=useHistory();
  //const [isLoded, setIsLoded] = React.useState(false);

  // React.useEffect(() => {
  //   axios.get("http://localhost:8000/api/products").then(res=>setData(res.data)).catch(err=>console.log(err));
    
  // }, []);
  //handle the Submit
  function handleSubmit(e){
     e.preventDefault()
     axios.post("http://localhost:8000/api/products/new",{title,price,description})
     .then(res => {
          props.sendTrigger(res.data)   
      }).catch(err => console.log(err));
     setTitle("")
     setPrice("")
     setDescription("")

     
      // history.push("/products")
    //  console.log(title+price+description)
  }


  // //delete handler
  // function deleteHandeler(user) {

  //   // console.log(user)
  //   axios.delete("http://localhost:8000/api/users/deletebyId/"+user._id).then(res=>{
  //       setUsersList(usersList.filter((each) => each.id !== user.id));
  //   })
  // }

  return (
    <div className="container w-50 py-4">

{/*  */}
    <header className="pb-3 mb-4 border-bottom">
        <div className="p-4 rounded container-fluid bg-light text-center fw-bolder">
            Product Manager
        </div>
    </header>
{/*  */}

    <form onSubmit={handleSubmit} className="container-fluid p-3 bg-light rounded-5">
        <div className="row mb-3">
            <div className="col-md-2 text-center align-self-center fw-semibold">
                Title:
            </div>
            <div className="col-md-9 ">
                <input  name="title" type="text" onChange={ (e) => setTitle(e.target.value)}
                       value={title} className="form-control"/>
            </div>
        </div>

        <div className="row mb-3">
            <div className="col-md-2 text-center align-self-center fw-semibold">
                Price:
            </div>
            <div className="col-md-9 ">
                <input name="price" type="Number" onChange={ (e) => setPrice(e.target.value)}
                       value={price} className="form-control"/>
            </div>
        </div>


        <div className="row mb-3">
            <div className="col-md-2 text-center align-self-center fw-semibold">
                Description:
            </div>
            <div className="col-md-9">
                <textarea name="description" onChange={ (e) => setDescription(e.target.value)}
                          value={description} className="form-control"></textarea>
            </div>
        </div>


        <div className="row mb-3">
            <input type="submit" value="Submit" className="btn btn-dark btn-block w-50 mx-auto"/>
        </div>

    </form>


    
</div>
  );
}

export default Create;
