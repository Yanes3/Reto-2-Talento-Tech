import React from "react";
import { NavLink } from "react-router-dom";
import { useRoutes, BrowserRouter } from "react-router-dom";
import {Tutorials} from "../Tutorials";
import {Developers} from "../Developers";
import {Navbar} from "../../Components/Navbar";
//import {Contact} from "../Contact";
import "./App.css";
import Contact from "../Contact";

const AppRoutes = () => {
  let routes = useRoutes([
    {
      path: "/Developers", element: <Developers/>

    },
    {
      path: "/Tutorials", element: <Tutorials/>
    },
    {
      path: "/Contact", element: <Contact/>
    }


  ]);

  return routes;
}


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;