import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";


//phla step yeh hai ki crete kro context ko 
 export const AppContext=createContext();


 //provide krne ke lie function bnana
export default function AppContextProvider({children}){
    const [loading ,setLoading] = useState(false);
    const [posts,setPosts] = useState([]);
    const [page,setPage] = useState(1);
    const [totalPages,setTotalPages] = useState(null);

    //data filling krna start

    async function fetchBlogPosts(page=1){
        setLoading(true);
        let url = `${baseUrl}?page=${page}`;
        try{
            const result = await fetch(url);
            const data = await result.json();
            console.log(data);
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages)
        }
        catch(error){
         console.log("Error in fetching the data");
         setPage(1);
         setPosts([]);
         setTotalPages(null);
        }
        setLoading(false);
    }


    function handlePageChange(page){
        setPage(page);
        fetchBlogPosts(page);
    }

//value ik object jise throung data pass ki ja rh hai 
    const value ={
        loading,
        setLoading,
        posts,
        setPosts,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        handlePageChange
    };

    return <AppContext.Provider value={value}>
        {children}
        </AppContext.Provider>


}

