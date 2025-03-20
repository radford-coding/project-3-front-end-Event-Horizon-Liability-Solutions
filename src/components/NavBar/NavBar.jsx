//components/NavBar/NavBar.jsx
import '../../views/NavBar.css';
import { useContext } from 'react';
import { NavLink } from 'react-router';

import { UserContext } from '../../contexts/UserContext';

const NavBar = () => {
  const { user, setUser } = useContext(UserContext);

  const handleSignOut = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <nav>
      {user ? (
        <ul>
          <li>Welcome, {user.username}</li>
          <li><NavLink to='/'>Dashboard</NavLink></li>
          <li><NavLink to='/employees'>employees</NavLink></li>
          <li><NavLink to='/employees/new'>new employee</NavLink></li>
          <li><NavLink to='/missions'>missions</NavLink></li>
          <li><NavLink to='/' onClick={handleSignOut}>Sign Out</NavLink></li>
        </ul>
      ) : (
        <ul>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/sign-in'>Sign In</NavLink></li>
          <li><NavLink to='/sign-up'>Sign Up</NavLink></li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
