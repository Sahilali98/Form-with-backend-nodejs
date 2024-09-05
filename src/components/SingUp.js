import React from 'react'
import image1 from "../Img/hide.png";
import image2 from "../Img/user.png";
import image3 from "../Img/show.png";
import FormValidation from "./FormValidation";
import { useState } from "react";
import axios from 'axios';
import '../cssComponents/SingUp.css'
// import { useNavigate } from "react-router-dom";

function SingUp() {
    let mode = true;
    const hide = () => {
        let password = document.getElementById("password");
        let passImg = document.getElementById("passImg");
        if (mode) {
            mode = false;
            password.setAttribute("type", "text");
            passImg.setAttribute("src", `${image3}`);
        } else {
            mode = true;
            password.setAttribute("type", "password");
            passImg.setAttribute("src", `${image1}`);
        }
    };



    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
        phon: '',
        gender: '',
        branch: ''
    });

    const [errors, setErrors] = useState({});

    // const handleInput = (event) => {
    //   setValues(prev => ({...prev, [event.target.name] : [event.target.value]}))
    // }

    const handleInput = (event) => {
        const { name, value } = event.target;
        setValues(prevValues => ({
            ...prevValues,
            [name]: value
        }));
    }

    function windowReload() {
        window.location.reload();
    }

    // const navigate = useNavigate();
    const handleSubmit = (event) => {
        setErrors(FormValidation(values));
        event.preventDefault();
        if (errors.name === "" && errors.email === "" && errors.password === "" && errors.phon === "" && errors.gender === "" && errors.branch === "" && errors.password2 === "") {
            axios.post('http://localhost:8081/form', values)
                .then(res => {
                    console.log(res);
                    alert('form is successfully submitted');
                    windowReload();
                })
                .catch(err => console.log(err));
        }
    }
    return (
        <section id="sec">
            <br />
            <br />
            <h1 id="login">Registration Form</h1>
            <br />
            <form action="" id="form" onSubmit={handleSubmit}>
                <div id="inner">
                    <div className="inputDivContainer">
                        <input onChange={handleInput} id="username" name="name" type="text" placeholder="Usernmae" />
                        <div id="userPng">
                            <img src={image2} width="20px" height="20px" alt="" />
                        </div>
                    </div>
                    {errors.name && <span>{errors.name}</span>}
                    <br />
                    <br />
                    <input onChange={handleInput} name="email" type="email" placeholder="example@gmail.com" />
                    {errors.email && <span>{errors.email}</span>}
                    <br />
                    <br />
                    <div className="inputDivContainer">
                        <input onChange={handleInput} name="password" id="password" type="password" placeholder="Password" />
                        <div id="passPng" onClick={hide}>
                            <img
                                id="passImg"
                                src={image1}
                                width="20px"
                                height="20px"
                                alt=""
                            />
                        </div>
                    </div>
                    {errors.password && <span>{errors.password}</span>}
                    <br />
                    <br />
                    <input onChange={handleInput} id="password2" placeholder="password" name="password2" />
                    {errors.password2 && <span>{errors.password2}</span>}
                    <br />
                    <br />
                    <input onChange={handleInput} name="phon" type="text" id="phon" placeholder="+91 1234567890" />
                    {errors.phon && <span>{errors.phon}</span>}
                    <br />
                    <br />
                    <select onChange={handleInput} name="gender" id="gender">
                        <option value="">gender</option>
                        <option value="male">male</option>
                        <option value="male">female</option>
                    </select>
                    {errors.gender && <span>{errors.gender}</span>}
                    <br />
                    <br />
                    <select onChange={handleInput} name="branch" id="branch">
                        <option value="">branch</option>
                        <option value="CSE">CSE</option>
                        <option value="ECE">ECE</option>
                        <option value="EEE">EEE</option>
                    </select>
                    {errors.branch && <span>{errors.branch}</span>}
                    <br />
                    <br />
                    <input type="file" placeholder="resume upload" />
                    <br />
                    <br />
                    <button id="btn" type='submit'>Register</button>
                </div>
            </form>
        </section>

    )
}

export default SingUp
