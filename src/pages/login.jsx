import { useEffect } from 'react';
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const { googleSignIn, user } = UserAuth();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (user != null) {
      navigate('/')
    }
  }, [user])
  return (
    <div className="text-[#333333] h-screen w-full grid grid-cols-12">
      <div className="bg-[url('/ready-back-school.jpg')] bg-cover bg-no-repeat bg-left col-span-6 h-full">

      </div>
      <div className='col-span-6 h-full flex flex-col items-center justify-center px-5'>
        <h1 className="font-semibold text-[28px] mb-5 text-center">Welcome back!</h1>
        <button className="text-white bg-[#1e75ff] rounded flex items-center h-[50px] p-1 hover:scale-105 transition delay-100 duration-300 ease-in-out" onClick={handleGoogleSignIn}><div className='bg-white h-full flex items-center justify-center w-[50px]'><img src="/google.png" alt='google icon' className='w-[20px]' /></div>  <span className='px-5 font-bold'>Sign in with Google</span> </button>
      </div>
    </div>
  );

}

export default Login;