import * as React from "react";
import { Link } from "react-router-dom";


export function WithOutQuery (){
   const [isloading ,setIsloading] = React.useState(true);
   const [data,setData] = React.useState([]);
   const [error,setError] = React.useState();

    React.useEffect(()=>{
        console.log("Hello");
        fetch("https://jsonplaceholder.typicode.com/posts").then((response)=>{
            if(!response.ok){
                setError("something went wrong !!")
                setIsloading(false);
                return
            }
            return response.json();
        }).then((data)=>{
                setData(data);
                setIsloading(false);


            })
    },[]);

    if(isloading){
        return (
            <h1>Loading!!!</h1>
        )
    }

    if(error){
        retrun (
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