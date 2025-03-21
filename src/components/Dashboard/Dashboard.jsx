// import './Dashboard.css';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { NavLink } from 'react-router';

const Dashboard = () => {
  const { user, setUser } = useContext(UserContext);

  const handleSignOut = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <>
      <header>
        <h4>Event Horizon Liability Solutions, Inc.</h4>
        <nav>
          <NavLink to='/' onClick={handleSignOut}>sign_out</NavLink>
        </nav>
      </header>
      <main>
        <h2>Welcome to EHLS, {user.username}.</h2>
        <article>
          This is the dashboard page.
        </article>
        <br />
        <br />
        <NavLink to='/employees'>employee_database</NavLink>
        <br />
        <br />
        <NavLink to='/employees/new'>add_employee</NavLink>
        <br />
        <br />
        <NavLink to='/missions'>mission_control</NavLink>
        <br />
        <br />
        <NavLink to='/orgchart'>company_resources</NavLink>
      </main>
    </>
  );
};

export default Dashboard;

{/* <li><NavLink to='/welcome'>Welcome, {user.username}</NavLink></li> */}
  //         <li><NavLink to='/'>Dashboard</NavLink></li>
  //         <li><NavLink to='/employees'>employees</NavLink></li>
  //         <li><NavLink to='/employees/new'>new employee</NavLink></li>
  //         <li></li>