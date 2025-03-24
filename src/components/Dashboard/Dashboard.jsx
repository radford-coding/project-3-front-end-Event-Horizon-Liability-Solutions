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
        <header>dashboard</header>
        <section>
          <ul>
            <NavLink to='/employees'><li>employee_database</li></NavLink>
            <NavLink to='/employees/new'><li>add_employee</li></NavLink>
            <NavLink to='/missions'><li>mission_control</li></NavLink>
            <NavLink to='/resources'><li>company_resources</li></NavLink>
          </ul>
        </section>
        <br />
        <br />
        <section>
          <h2>Welcome to EHLS, {user.username}.</h2>
          <article>
            Select a resource.
          </article>
        </section>
      </main>
    </>
  );
};

export default Dashboard;

{/* <li><NavLink to='/welcome'>Welcome, {user.username}</NavLink></li> */ }
//         <li><NavLink to='/'>Dashboard</NavLink></li>
//         <li><NavLink to='/employees'>employees</NavLink></li>
//         <li><NavLink to='/employees/new'>new employee</NavLink></li>
//         <li></li>