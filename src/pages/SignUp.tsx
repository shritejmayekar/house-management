import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import VisibilityIcon from '../assets/svg/visibilityIcon.svg';
import ArrowRightIcon from '../assets/svg/keyboardArrowRightIcon.svg';
import { createUserWithEmailAndPassword,getAuth, updateProfile } from 'firebase/auth';
import app from '../firebase.config';
function SignUp() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name:'',
    email: '',
    password: '',
  });
  const { name,email, password } = formData;
  const navigate = useNavigate();

  const onChange = (e: any) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = (e:any) => {
    e.preventDefault()
    try {
      const auth = getAuth(app);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          console.log(user)
          navigate('/')
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode,errorMessage)
          // ..
        });
    } catch (error) {
      alert(error)
    }
   
    
  }
  return (
    <>
      <div className="pageContainer">
        <header>
          <p className="pageHeader">Welcome Back!</p>
        </header>
        <form onSubmit={onSubmit}>
        <input
            type="text"
            className="nameInput"
            placeholder="Name"
            id="name"
            value={name}
            onChange={onChange}
          />
          <input
            type="email"
            className="emailInput"
            placeholder="Email"
            id="email"
            value={email}
            onChange={onChange}
          />
          <div className="passwordInputDiv">
            <input
              type={showPassword ? 'text' : 'password'}
              className="passwordInput"
              id="password"
              placeholder="Password"
              value={password}
              onChange={onChange}
            />
            <img
              src={VisibilityIcon}
              alt="show password"
              className="showPassword"
              onClick={() => setShowPassword((prevState) => !prevState)}
            />
          </div>
         
          <div className="signUpBar">
            <p className="signUpText">Sign Up</p>
            <button   type="submit" className="signUpButton">
              <img
                src={ArrowRightIcon}
                className="btn-white"
                width={34}
                height={34}
              />
            </button>
          </div>
        </form>
        <Link to="/sign-in" className="mt-0 registerLink">
          Sign In Instead
        </Link>

      </div>
    </>
  );
}

export default SignUp;
