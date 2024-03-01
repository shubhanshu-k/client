import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import ErrorPage from './pages/ErrorPage';
import PostDetail from './pages/PostDetail';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import UserProfile from './pages/UserProfile';
import EditPost from './pages/EditPost';
import CategoryPosts from './pages/CategoryPosts';
import AuthorPosts from './pages/AuthorPosts';
import Dashboard from './pages/Dashboard';
import Logout from './pages/Logout';
import CreatePost from './pages/CreatePost';
import Authors from './pages/Authors';


const router = createBrowserRouter([{
path:"/",
element:<Layout/>,
errorElement:<ErrorPage/>,
 children:[
  {index: true , element : <Home/>},
  {path:"posts/id", element : <PostDetail/>},
  {path:"register", element :<Register/>},
  {path:"login", element :<Login/>},
  {path:"profile/:id", element :<UserProfile/>},
  {path:"authors", element :<Authors/>},
  {path:"create", element :<CreatePost/>},
  {path:"posts/:id/edit", element :<EditPost/>},
  {path:"posts/users/:id", element :<AuthorPosts/>},
  {path:"posts/categories/:categories", element :<CategoryPosts/>},
  {path:"myposts/:id", element :<Dashboard/>},
  {path:"logout", element :<Logout/>}

 ]

}])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>Hello world!</h1>
    <RouterProvider  router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

