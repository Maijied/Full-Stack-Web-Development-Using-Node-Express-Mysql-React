 import './App.css';
import axios from "axios";
import { useEffect, useState } from 'react';


function App() {
 const [listofAllPosts, setListofAllPosts] = useState([]);

 useEffect(() =>{
  axios.get("http://localhost:3001/posts").then((response) =>{
        setListofAllPosts(response.data);
  });
 },[])

  return <div className="App">
  
    <div class="main-container">
      <div class="heading">
        <h1 class="heading__title">All Posts</h1>
        <p class="heading__credits"><a class="heading__link" target="_blank" href="https://dribbble.com/sl">System Design by Maizied</a></p>
      </div>
      {listofAllPosts.map((value,key)=>{
      return (
        <div class="cards">
        <div class="card card-1">
          <div class="card__icon"><i class="fas fa-bolt">{value.title}</i></div>
          <p class="card__exit"><i class="fas fa-times"></i></p>
          <h2 class="card__title">{value.body}</h2>
          <p class="card__apply">
            <a class="card__link" href="#">{value.username}<i class="fas fa-arrow-right"></i></a>
          </p>
        </div>
      </div>
      )
    })}
      


    </div>
  </div>;
}
export default App;
