//components/NavBar/NavBar.jsx
import './NavBar.css';
import { useContext, useState, useEffect } from 'react';
import { NavLink } from 'react-router';

import { UserContext } from '../../contexts/UserContext';

const NavBar = (props) => {
  const { user } = useContext(UserContext);

  const [targetLink, setTargetLink] = useState('dashboard');

  useEffect(() => {
    setTargetLink(() => {
      switch (props.target) {
        case 'employee-database': return '/employees';
        case 'mission-control': return '/missions';
        case 'dashboard': return '/';
        default: return '/';
      };
    });
  }, [props]);

  return (
    <header>
      {user ? (
        <>
          <h4>Event Horizon Liability Solutions, Inc.</h4>
          <nav>
            <NavLink to={targetLink}>{props.target}</NavLink>
          </nav>
        </>
      ) : (
        <>
          <h4>Event Horizon Liability Solutions, Inc.</h4>
          <nav>
            <ul>
              <li><NavLink to='/'>Home</NavLink></li>
              <li><NavLink to='/sign-in'>Sign In</NavLink></li>
              <li><NavLink to='/sign-up'>Sign Up</NavLink></li>
            </ul>
          </nav>
        </>
      )}
    </header>
  );
  // return (
  //   <nav>
  //     {user ? (
  //       <ul>
  //         <li><NavLink to='/welcome'>Welcome, {user.username}</NavLink></li>
  //         <li><NavLink to='/'>Dashboard</NavLink></li>
  //         <li><NavLink to='/employees'>employees</NavLink></li>
  //         <li><NavLink to='/employees/new'>new employee</NavLink></li>
  //         <li><NavLink to='/missions'>missions</NavLink></li>
  //         <li><NavLink to='/' onClick={handleSignOut}>Sign Out</NavLink></li>
  //       </ul>
  //     ) : (
  //       <ul>
  //         <li><NavLink to='/'>Home</NavLink></li>
  //         <li><NavLink to='/sign-in'>Sign In</NavLink></li>
  //         <li><NavLink to='/sign-up'>Sign Up</NavLink></li>
  //       </ul>
  //     )}
  //   </nav>
  // );
};

export default NavBar;
