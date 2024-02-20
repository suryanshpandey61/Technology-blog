import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";



const Pagination = ()=>{

      const {page,handlePageChange,totalPages}= useContext (AppContext);

    return(
        <div className=" border-4 pt-2 w-full  fixed bottom-0 bg-white mt-2 py-2 shadow-md  ">
            <div className="flex max-w-[620px] mx-auto justify-between ">
                <div className="gap-[10px] flex">
                {page > 1 && 
                (<button
                  className="rounded-md border-2 px-4 py-1"
                onClick={() => handlePageChange(page-1)}>
                    Previous
                </button>)
                }

                {
                    page < totalPages &&
                  (  <button 
                    className="rounded-md border-2 px-4 py-1"
                  onClick={() => handlePageChange(page+1)}>
                        Next
                    </button>)
                }
                </div>

                <p className="font-bold text-md">Page {page} of {totalPages}</p>
            </div>
               
        </div>
    )
}

export default Pagination