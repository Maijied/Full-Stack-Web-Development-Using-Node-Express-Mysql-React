import React, {useState} from 'react'
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/auth/login").then((response)=>{

    })
  }
  return (
    <div>
      <input type="text"/>
      <input type="password"/>
    </div>
  )
}

export default Login