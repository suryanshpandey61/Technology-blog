import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";

const  Blogs =() =>{
  //consume the context data step 3 
  const {posts,loading} = useContext(AppContext);



    return(
        <div className="w-11/12 max-w-[620px] mx-auto py-3 flex flex-col gap-y-7 mt-[66px] mb-[70px]">
            {
                loading ? 
                (<Spinner/>) :
                 (
                    posts.length === 0 ?
                    (
                    <div>
                        <p>No Posts Found</p>
                    </div>
                    ):
                    
                    (posts.map ((post) =>(
                        
                        <div key={post.id}>
  
                         <p className="font-bold text-sm">{post.title}</p>
                         <p className="text-[15px]">
                            By <span className="italic">{post.author}</span>  on <span className="underline font-bold">{post.category}</span>
                         </p>

                         <p className="text-[16px]">Posted on {post.date}</p>
                         <p className="text-[14px] mt-[10px]">{post.content}</p>

                         <div className="flex gap-x-3 mt-2">
                            {post.tags.map((tag,index)=> {
                                return <span className="text-blue-500 underline font-bold text-[13px]"  key={index}>{`#${tag}`}</span>
                            })}
                         </div>

                        </div>
                        
                        
                        )))
                )
            }
        </div>
    )
}

export default Blogs