import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Root from './components/Root/Root';
import Pagenotfound from './components/Errorpages/Pagenotfound';
import Home from './components/Mainpages/HomePage';
// import About from "./components/Mainpages/Apps";
import Installation from "./components/Mainpages/Installation";
import Apps from './components/Mainpages/Apps';
import Appdetails from './components/Appdetails/Appdetails';

const router = createBrowserRouter([
  {
    path: "/", Component: Root, errorElement: <Pagenotfound></Pagenotfound>,
    children:[
      { index: true,
        loader: () => fetch("/Appdata.json").then(res => res.json()),
        element: <Suspense fallback={<p>Loading</p>}>
          <Home></Home>
        </Suspense>},
        {path: "apps",
          loader: () => fetch("/Appdata.json").then(res => res.json()),
          Component: Apps},
        {path: "installation", Component: Installation},
        {
          path: "app/:id",
          Component: Appdetails
        }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
)
