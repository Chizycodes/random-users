import {useEffect} from 'react';
import {UserAuth} from "../context/AuthContext";
import {useNavigate} from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const {googleSignIn, user} = UserAuth();
  
  const handleGoogleSignIn = async() =>{
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect(()=>{
    if(user != null) {
      navigate('/')
    }
  },[user])
  return (
    <div className="text-[#333333] min-h-[calc(100vh-6rem)] w-full flex items-center justify-center">
      <div>
        <h1 className="font-semibold text-xl mb-3 text-center">Welcome back!</h1>
        <button className="text-white bg-red-600 px-5 py-2 rounded" onClick={handleGoogleSignIn}>Sign in with Google</button>
      </div>
    </div>
  );

}

export default Login;