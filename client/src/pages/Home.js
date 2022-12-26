import React from 'react'
import axios from "axios";
import { useEffect, useState } from 'react';

function Home() {
const [listofAllPosts, setListofAllPosts] = useState([]);

useEffect(() =>{
axios.get("http://localhost:3001/posts").then((response) =>{
    setListofAllPosts(response.data);
});
 },[])

  return (
    <div class="container">
        {listofAllPosts.map((value,key)=>{
            return (
            <div class="card">
                <div class="box">
                <div class="content">
                    <h2>{key}</h2>
                    <h3>{value.title}</h3>
                    <p>{value.body}</p>
                    <a href="#">{value.username}</a>
                </div>
                </div>
            </div>
            )
        })}
    </div>
  )
}

export default Home
