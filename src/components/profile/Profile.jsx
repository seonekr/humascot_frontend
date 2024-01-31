import React from 'react'
import "./profile.css";
import { Link } from 'react-router-dom';
import { MdArrowBack } from "react-icons/md";

const Profile = () => {
  return (
    <>
        <div className="ProfilePage">
            <div className='boxgoback'>
                <Link to="/more" className="box_iconBack">
                    <MdArrowBack id='iconBack'/>
                </Link>
            </div>

            <div className='box_prof'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/1200px-Unknown_person.jpg" alt="" />
                <p>Name: Sompong</p>
            </div>
                
            <form className='container_form_profile'>
                <input type="email" placeholder="humascot@gmail.com" required />
                
                <button type="submit" >Edit profile</button>
            </form>
          
        </div>
    </>
  )
}

export default Profile