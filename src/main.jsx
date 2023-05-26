import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomeLayout from './Layout/Home';
import Home from './components/Home/Home';
import Job from './components/Home/Job/Job';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import jobLoaders from './loaders/jobLoaders';
import Statistics from './components/Statistics/Statistics';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Blog from './components/Blog/Blog';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/job/:id",
        element: <Job/>,
        loader: () => fetch("/featuredJobs.json")
      },
      {
        path: "/applied-job",
        element: <AppliedJobs/>,
        loader: jobLoaders
      },
      {
        path: "/statistics",
        element: <Statistics/>,
      },
      {
        path: "/blog",
        element: <Blog/>,
      }
    ]
  },
  {
    path: "*",
    element: <PageNotFound></PageNotFound>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
