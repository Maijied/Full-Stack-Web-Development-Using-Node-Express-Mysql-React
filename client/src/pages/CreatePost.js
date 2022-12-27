import React from 'react';
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from 'yup';
import axios from 'axios';

function CreatePost() {
    const initialValues = {
        title: "",
        body: "",
        username: "",
    };
 
    const onSubmit = (data) => {
      axios.post("http://localhost:3001/posts", data).then((response) =>{
       console.log("It worked");
    });
    }

    const validationSchema = Yup.object().shape({
        title: Yup.string().required("You must input your title"), 
        body: Yup.string().required(),
        username: Yup.string().min(3).max(15).required(),
    });
    
  return (
    <div className='createPostPage'>
        {/* initialValues={} onSubmit={} validationSchema={} */}
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        <Form>
            <label style={{color:'white'}}>TItle : </label>
            <ErrorMessage style={{color:'white'}} name='title' component="span" />
            <Field id="inputCreatePost" name="title" placeholder="(Ex. Title...)" />
            <label style={{color:'white'}}>Body : </label>
            <ErrorMessage style={{color:'white'}} name='body' component="span" />
            <Field id="inputCreatePost" name="body" placeholder="(Ex. Body...)" />
            <label style={{color:'white'}}>Username : </label>
            <ErrorMessage style={{color:'white'}} name='username' component="span" />
            <Field id="inputCreatePost" name="username" placeholder="(Ex. Name...)" />
            <button type='submit'>Create Post</button>
        </Form>
      </Formik>
    </div>
  )
}

export default CreatePost;
