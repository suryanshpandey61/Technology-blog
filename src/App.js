import React, { useContext, useEffect } from "react"
import { ReactDOM } from "react"
import Header from "./components/Header"
import Blogs from "./components/Blogs"
import Pagination from "./components/Pagination"
import AppContextProvider, { AppContext } from "./context/AppContext"




export default function App(){

const {fetchBlogPosts} = useContext(AppContext);

useEffect (()=>{
  fetchBlogPosts();
},[]);


  return(
    <div className="w-full h-full flex flex-col gap-y-2">
       <Header/>
       <Blogs/>
       <Pagination/>
    </div>
  )
}