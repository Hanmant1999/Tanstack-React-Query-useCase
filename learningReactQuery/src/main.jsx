import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {WithOutQuery} from "./WithOutQuery.jsx";
import { WithQuery } from './WithQuery.jsx'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Post } from './Post.jsx'



const router = createBrowserRouter([
  {
    path:"/",
    element:<App />
  },
  {
    path:"/WithOutQuery",
    element:<WithOutQuery />
  },
  {
    path:"/WithQuery",
    element:<WithQuery />
  },
  {
    path:"/posts/:id",
    element:<Post />
  }
]);


const client = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
    <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>,
)
