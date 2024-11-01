import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";
interface Blog {
    "title":string,
    "content":string
    "author":{
        "name":string
    }
}
export const useBlogs =()=>{
    const [loading,setLoading] = useState(true);
    const [blogs,setBlogs] = useState<Blog[]>([]);
    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/blog`,{
            headers:{
                Authorization:localStorage.getItem('auth-token')
            }
        })
        .then((response)=>{
            setBlogs(response.data);
            setLoading(false);
            console.log('fetched');
            
        })
    },[])
    return{
        blogs,loading
    }
}