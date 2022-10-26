import './App.css'
import UsersList from './pages/usersList'
import User from './pages/user';
import Error404 from './pages/error404';
import {
  Route,
  Routes
} from "react-router-dom";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<UsersList />}>
          <Route path='user' element={<User />} />
        </Route>
        <Route path='*' element={<Error404 />} />
      </Routes>
    </div>
  )
}
