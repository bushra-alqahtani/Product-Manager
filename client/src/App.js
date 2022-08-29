//import logo from "./logo.svg";
//import "./App.css";
import "./bootstrap.min.css"
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Create from "./component/Create";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Editing from "./component/Editing";
import Showing from "./component/Showing";
import ListAll from "./component/ListAll";

function App() {
  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);

  // refresh data after each create or update or delete
  // const triggerProducts = (data) => {
  //   setProducts(data);
  // };

  // Autofill states when the component is loaded
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then((res) => {
        setProducts(res.data);
        setLoaded(true);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
           <Route exact path={"/product/edit/:id"}>
            <Editing />
          </Route>

          <Route  exact path={"/product/:id"}>
            <Showing />
          </Route> 

          <Route  exact path={"/products/new"}>
            <Create  />
            <hr className={"w-75 mx-auto my-3"} />
            <ListAll />
            
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
