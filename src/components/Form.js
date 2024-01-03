import react, { useEffect, useState } from "react";
import { IoEyeSharp } from "react-icons/io5"; //open
import { FaEyeSlash } from "react-icons/fa"; //close

const Form = () => {
  let emailPattren =
    /^(?!.*\.{2})[a-zA-Z0-9][a-zA-Z0-9#$%&\*\+-/=\?\_`|~]*@[a-zA-Z0-9][a-zA-Z0-9-_.]*\.[a-zA-Z]{2,4}$/;
  const [formData, SetFormData] = useState({
    email: "",
    password: "",
    ConfirmPassword: "",
  });
  const [emailError, setEmailError] = useState(true);
  const [passwordError, setPasswordError] = useState(true);
  const [confirmPasswordError, setConfirmPasswordError] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);


  function handelInput(e) {
    if (e.target.name === "email") {
      if (!emailPattren.test(e.target.value)) {
        setEmailError(true);
      } else {
        setEmailError(false);
      }
    } else if (e.target.name === "password") {
      if (e.target.value.length < 8) {
        setPasswordError(true);
      } else {
        setPasswordError(false);
        console.log("password change");
      }
    } else {
      if (e.target.value !== formData.password) {
        setConfirmPasswordError(true);
      } else {
        setConfirmPasswordError(false);
      }
    }

    SetFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function SumitForm(e) {
    e.preventDefault();
    console.log(emailError, passwordError, confirmPasswordError);
    if (!emailError && !passwordError && !confirmPasswordError) {
      alert("Form sumitted successfully");
    } else {
      alert("Please enter a valid input");
    }
  }

  return (
    <div id="main-div">
      <h1>Form 15H</h1>

      <form onSubmit={SumitForm}>

        {/* Input Email */}
        <label>Email:</label>
        <input
          onChange={handelInput}
          placeholder="Email"
          value={formData.email}
          name="email"
          className={!emailError && "input-green"}
        />
        {emailError && <small>Please enter a valid gmail</small>}

        
         {/* Input Password */}
        <label>Password :</label>
        <div className="password">
        <input
          onChange={handelInput}
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          value={formData.password}
          name="password"
          className={!passwordError && "input-green"}
        /> 
        { showPassword ? ( <FaEyeSlash  onClick={()=> setShowPassword(false)} />) : (<IoEyeSharp  onClick={()=>setShowPassword(true)}/>) }
        </div>
        {passwordError && <small>Please enter a valid gmail</small>}


        {/* Input Confirm Password */}
        <label>Confirm Password :</label>
        <div className="password">
        <input
          onChange={handelInput}
          type={showConfirmPassword ? 'text' : 'password'}
          placeholder="Confirm Password"
          value={formData.ConfirmPassword}
          name="ConfirmPassword"
          className={!confirmPasswordError && "input-green"}
        />
        { showConfirmPassword ? ( <FaEyeSlash  onClick={()=> setShowConfirmPassword(false)} />) : (<IoEyeSharp  onClick={()=>setShowConfirmPassword(true)}/>) }
        </div>
        {confirmPasswordError && <small>Please enter a valid gmail</small>}

        <div id="btn">
          {" "}
          <button type="submit">Sign up</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
