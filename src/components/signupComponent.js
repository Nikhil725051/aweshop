import React, {useState} from "react";
import {Link, Navigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {signUpUser} from "../redux/actionCreators";
import{FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";




function SignUp(){
    const {user} = useSelector((state) => state);

    const dispatch = useDispatch();


    const error = {
      fullName : "Name should be between 3 to 20 characters and should not contain any special characters",
      email : "Enter a valid email address",
      password : "Password should be minimum 8 characters and should contain 1 letter and 1 number",
      contactNumber : "Enter a valid contact number (10 digits)"
      }

    const [isClicked, setClicked] = useState(false);

    const [blur, setBlur] = useState({ email: false, 
                                  password: false, 
                                  contactNumber: false});

    const [values, setValues] = useState({fullName: "",
                                      email: "",
                                      password: "",
                                      contactNumber:"",
                                      address: ""});


    const handleSubmit = (e) => {
        e.preventDefault();
        setClicked(true);
        dispatch(signUpUser({name: values.fullName,
                             email: values.email,
                             contactNumber: values.contactNumber,
                             address: values.address,
                             password: values.password
                             }));
    }

    const handleBlur = (e) => {
        switch(e.target.name){

            case "email": setBlur({ email: true, 
                                 password: false, 
                                 contactNumber: false})
                                 break;
            case "password": setBlur({ email: false, 
                                    password: true, 
                                    contactNumber: false})
                                    break;
            case "contactNumber": setBlur({email: false, 
                                    password: false, 
                                    contactNumber: true})                        
        }
    }

   if(user.isAuthenticated){
       return(<Navigate to="/" replace={true}></Navigate>);
    }else{
        return(<div className="container-fluild bg-white LoginAndSignup">
        <form onSubmit={(e) => handleSubmit(e)}>
            <h2>Sign Up</h2>
            <div>
            <input
            type="text" 
            name="fullName" 
            placeholder="Full Name" 
            required
            onChange={(e) => setValues({...values, [e.target.name]: e.target.value})}>
            </input>
            </div>
            <div>
            <input 
            type="email" 
            name="email" 
            placeholder="Email Address" 
            required
            blur={blur.email.toString()}
            onBlur={(e) => handleBlur(e)}
            onChange={(e) => setValues({...values, [e.target.name]: e.target.value})}>
            </input>
            <span>{error.email}</span>
            </div>
            <div>
            <input 
            type="password" 
            name="password" 
            blur={blur.password.toString()}
            onBlur={(e) => handleBlur(e)}
            placeholder="Password" 
            required
            pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
            onChange={(e) => setValues({...values, [e.target.name]: e.target.value})}>
            </input>
            <span>{error.password}</span>
            </div>
            <div>
            <input 
            type="text" 
            name="contactNumber" 
            placeholder="Contact Number" 
            required
            blur={blur.contactNumber.toString()}
            onBlur={(e) => handleBlur(e)}
            pattern="^\d{10}$"
            onChange={(e) => setValues({...values, [e.target.name]: e.target.value})}>
            </input>
            <span>{error.contactNumber}</span>
            </div>
            <div>
            <input 
            type="text" 
            name="address" 
            placeholder="Full Address"
            onChange={(e) => setValues({...values, [e.target.name]: e.target.value})}
            ></input>
            </div>
            <button type="submit" className="btn btn-warning">{isClicked ? <FontAwesomeIcon icon={faSpinner}></FontAwesomeIcon> : "SIGN UP" }</button>
            <p>Already have an account?<Link className="signin-link" to='/login'> Sign In</Link></p>
            {user.errMess && <p className="text-danger">Following problem occured during sign up:<br/>{user.errMess}</p>}
        </form>
    </div>)
    }
}

export default SignUp;