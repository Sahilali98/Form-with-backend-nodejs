import React, { useEffect, useState } from 'react';

import SingInFormValidation from './SingInFormValidation';


function SingIn() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8081/data")
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => console.log(err));
    }, []);

    const [values, setValues] = useState({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({});

    // const handleInput = (event) => {
    //   setValues(prev => ({...prev, [event.target.name] : [event.target.value]}))
    // }

    const handleInput = (event) => {
        const { name, value } = event.target;
        setValues(prevValues => ({
            ...prevValues,
            [name]: value,
        }));
    }

    function windowReload() {
        window.location.reload();
    }

    // const navigate = useNavigate();
    const handleSubmit = (event) => {
        setErrors(SingInFormValidation(values));
        event.preventDefault();
        if (errors.email === "" && errors.password === "") {
            data.map((value) => {
                if (values.email === value.email && value.password === values.password) {
                    alert('Your succes fully loged in');
                    windowReload();
                }
            })
        }
    }


    return (
        <div className="container my-4">
            <form onSubmit={handleSubmit}>
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                <div className="form-floating">
                    <input onChange={handleInput} name='email' type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label htmlFor="floatingInput">Email address</label>
                    {errors.email && <span>{errors.email}</span>}
                </div>
                <div className="form-floating">
                    <input onChange={handleInput} name='password' type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                    <label htmlFor="floatingPassword">Password</label>
                    {errors.password && <span>{errors.password}</span>}
                </div>

                <div className="form-check text-start my-3">
                    <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Remember me
                    </label>
                </div>
                <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
            </form>

        </div>


    );
}

export default SingIn
