import {UserAuth} from '../context/AuthContext'
import {Link} from 'react-router-dom'

const Nav = () => {
  const {user, logOut} = UserAuth();
  const handleLogout = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <nav>
      <div className="flex items-center justify-between px-5 py-3 text-[#333333]">
        <h1>AltSchool Project</h1>
        {
          user?.displayName ? <button onClick={handleLogout}>Log out</button> : <Link to="/login">Sign in</Link>
        }       
      </div>
    </nav>
  );

}

export default Nav;