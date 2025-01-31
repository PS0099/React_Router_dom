import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Home from "./Compo/Home.jsx";
import Login from "./Compo/Login.jsx";
import SignUp from "./Compo/SignUp.jsx";
import Content from "./Compo/Content.jsx";

// const Router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       { path: "/Home", element: <Home/>},
//       { path: "/Login", element: <Login /> },
//       { path: "/SignUp", element: <SignUp /> },
//       {path:"/content",element: <Content/>}
//     ],  
//   },
// ]);

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<App />}>
      <Route path="/Home" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/content" element={<Content />} />
    </Route>
  )
)



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={Router}></RouterProvider>
  </StrictMode>
);
