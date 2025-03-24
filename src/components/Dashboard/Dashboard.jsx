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
          <h3 className='typewriter'>Welcome to EHLS, {user.username}.</h3>
          <article className='typewriter'>
            Select a resource.
          </article>
          <br />
          <article>
            App navigation guide:
          </article>
          <table>
            <thead>
              <tr>
                <th>item</th>
                <th>description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{'<_item'}</td>
                <td>go back to [item]</td>
              </tr>
              <tr>
                <td>{'>_item'}</td>
                <td>navigate to [item]</td>
              </tr>
              <tr>
                <td>{'#_item'}</td>
                <td>current selected item</td>
              </tr>
              <tr>
                <td>{'_submit_'}</td>
                <td>submit button</td>
              </tr>
              <tr>
                <td>{'_✖_'}</td>
                <td>remove file</td>
              </tr>
              <tr>
                <td>{'_add_'}</td>
                <td>add file</td>
              </tr>
            </tbody>
          </table>
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