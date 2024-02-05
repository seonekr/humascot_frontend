import React from 'react'
import { useState, useEffect } from "react";
import "./forgotPassword.css"
import { Link, useNavigate } from 'react-router-dom';
import { MdArrowBack } from "react-icons/md";
import axios from "axios";
  
const ForgotPassword = () => {

  const [data, setData] = useState({
    email: "",
    code: "",
    password: "",
    password2: "",
  });

  const [message, setMessage] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [timer, set_timer] = useState({
    minute: 0,
    second: 0,
  });
  const { minute, second } = timer;
  const navigate = useNavigate();

  // const email = data.email;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const Findpassword = () => {
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: import.meta.env.VITE_API + "/user/signup",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((res) => {
        navigate("/loginuser", { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="box_forgot">
        <Link to="/loginuser" className="box_iconBack">
          <MdArrowBack id='iconBack'/>
        </Link>
        <h2>Find password</h2>
        <div className="title">Please change your password after verifying your email!</div>
        <form className='container_form_forgot'>
          <div className='box_infor'>Enter basic information</div>

          <div className='container_form_forgot2'>
            <input 
              type="email" 
              name='email'
              placeholder="Email" 
              required 
              onChange={handleChange}
              value={data.email}
            />

            {minute > 0 || second > 0 ? (
              <div id="email_send_btn" className="verification">
                {minute < 10 ? `0${minute}` : minute}:
                {second < 10 ? `0${second}` : second}
              </div>
            ) : (

              <div
                onClick={() => {
                  if (data.email.length > 0) {
                    set_timer({ minute: 3, second: 0 });
                    let config = {
                      method: "post",
                      maxBodyLength: Infinity,
                      // url: "http://127.0.0.1:8000/user/send-email",
                      url: import.meta.env.VITE_API + "/user/send-email",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      data: data,
                    };

                    axios
                      .request(config)
                      .then((response) => {
                        console.log(JSON.stringify(response.data));
                      })
                      .catch((error) => {
                        console.log(error);
                      });
                  } else {
                    set_errorText("Please enter your e-mail.");
                  }
                }}
                id="email_send_btn"
                className='verification'
              >
                Verify
              </div>
            )}
          </div>

          <input 
            type="text" 
            name='code'
            placeholder="Verification number" 
            required 
            onChange={handleChange}
            value={data.code}
          />
          <input 
            type="password" 
            name='password'
            placeholder="New passwords" 
            required 
            onChange={handleChange}
            value={data.password}
          />
          <input 
            type="password" 
            name='password2'
            placeholder="Confirm password" 
            required 
            onChange={handleChange}
            value={data.password2}
          />

          {!passwordMatch && (
            <p className="error-text">Passwords do not match.</p>
          )}
          <button type="submit" onClick={Findpassword}>
            Confirmation
          </button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </>
  )
}

export default ForgotPassword