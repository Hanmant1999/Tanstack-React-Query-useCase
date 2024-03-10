import * as React from "react";
import { useQuery } from "@tanstack/react-query"
import { Link } from "react-router-dom";



export function WithQuery(){

    async function getPostData (){
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        return response.json();
}

    
    const {isPending,error,data}=  useQuery({
        queryKey:["posts"],
        queryFn :getPostData,
        staleTime: 10000,

    });

    if(isPending){
        return (
            <h1>Loading!!!</h1>
        )
    }

    if(error){
        return (
            <h1>Something went wrong !!</h1>
        )
    }


    return (
        <>
        <Link to= "/">Home</Link>
        <div style = {{display:"flex",justifyContent:"center",flexWrap:"wrap",gap:"20px"}}>
            { data.map((post)=>{
                return (
                    <div style ={{alignItems:"center",width:"400px",height:"300px",textOverflow:"wrap",textAlign:"center",border:"5px solid black"}}>
                <Link to={`/posts/${post.id}`} >
                <span>{post.id}</span>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                </Link>
            </div>
                )
            })

}
            
        </div>
        </>
       
    )
}