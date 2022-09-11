import React, {useState} from "react";
import {Link, Navigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logInUser} from "../redux/actionCreators";
import{FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";



function LogIn(){

    const [credential, setCredential] = useState({email : "", password: ""});
    const [isClicked, setClicked] = useState(false);
    const dispatch = useDispatch();
    const {user} = useSelector((state) => state)

    const handleSubmit = (e) => {
        e.preventDefault();
        setClicked(true);
        dispatch(logInUser({email: credential.email, password: credential.password}));
    }

    return(<>
    {user.isAuthenticated ? <Navigate to="/" replace={true}></Navigate> 
    : 
    <div className="bg-white LoginAndSignup">
        <form onSubmit={(e) => handleSubmit(e)}>
            <h2>Sign In</h2>
            <input type="email" 
            required name="email" 
            placeholder="Email Address" 
            onChange={(e) => setCredential({...credential, [e.target.name]: e.target.value})}>
            </input>
            <input type="password" 
            required 
            name="password" 
            placeholder="Password" 
            onChange={(e) => setCredential({...credential, [e.target.name]: e.target.value})}>
            </input>
            <button type="submit" className="btn btn-warning">{isClicked ? <FontAwesomeIcon icon={faSpinner}></FontAwesomeIcon> : "SIGN IN" }</button>
            <p>Don't have an account?<Link className="signup-link" to='/signup'> Sign Up</Link></p>
            {user.errMess && <p className="text-danger">Following problem occured during sign in:<br/>{user.errMess}</p>}
        </form>
    </div>}</>)
}

export default LogIn;