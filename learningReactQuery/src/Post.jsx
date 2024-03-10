import * as React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";


export function Post (){
     const {id} = useParams();

     async function getPostDetails(){
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        return response.json()
     }

     async function getCommentFromPost (){
        const response = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`);
        return response.json()
    }

     const {data,error,isPending} = useQuery({
        queryKey:["post",id],
        queryFn:getPostDetails,
     });

     const {data:comment,error:commentError,isPending:isCommentDataPending}= useQuery({
        queryKey:["comments",id],
        queryFn:getCommentFromPost,
        enable: !isPending
     })

     if(isPending){
        return <h1>loading !!!</h1>
     }
     if(error || commentError){
        return <h1>something went wrong</h1>
     }
    return (
        <div style = {{display:"flex",alignContent:"center",flexDirection:"column"}}>
            <span >{data.id}</span>
            <h2>{data.title}</h2>
            <p>{data.body}</p>
            <p>{comment.id}</p>

        </div>
    )
}