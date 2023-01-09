import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

function Registration() {
    const initialValues = {
        username: "",
        email: "",
        password: ""
      };
    
      const validationSchema = Yup.object().shape({
        username: Yup.string().min(3).max(15).required(),
        email: Yup.string().required(),
        password: Yup.string().min(8).max(15).required(),
       
      });

      const onSubmit = (data) =>{
        console.log("data",data)
         axios.post("http://localhost:3001/auth", data).then((Response)=>{
            console.log("Succcccccccccess");
         }) 
      }
  return (
    <div>
         <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
          <label>Username: </label>
          <ErrorMessage name="username" component="span" />
          <Field
            autoComplete="off"
            id="inputCreatePost"
            name="username"
            placeholder="(Ex. admin123...)"
          />
          <label>Email: </label>
          <ErrorMessage name="email" component="span" />
          <Field
            autoComplete="off"
            id="inputCreatePost"
            name="email"
            type="email"
            placeholder="(Ex. john@gmail.com)"
          />
          <label>Password: </label>
          <ErrorMessage name="password" component="span" />
          <Field
            autoComplete="off"
            id="inputCreatePost"
            type="password"
            name="password"
            placeholder="(Ex. 12345678)"
          />
          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  )
}


export default Registration