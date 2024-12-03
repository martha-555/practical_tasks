/** @format */

import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./SimpleForm/SimpleForm";
import Main from "./PageWrapper/PageWrapper";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import SimpleForm from "./SimpleForm/SimpleForm";
import Home from "./Home/Home";

function App() {
  // для складних проектів?
  const routes = createBrowserRouter([
    {
      path: "*",
      element: <Home />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/simple_form",
      element: <SimpleForm />,
    },
  ]);

  const AppRoutes = () => {
    return <RouterProvider router={routes}></RouterProvider>;
  };
  return (
    <div>{<AppRoutes />}</div>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Form />} />
    //     <Route path="/form" element={<Form />} />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
