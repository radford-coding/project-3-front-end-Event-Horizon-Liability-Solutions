// import './Landing.css';
import { NavLink } from 'react-router';

const Landing = () => {
  return (
    <>
      <header>
        <h1>Event Horizon Liability Solutions, Incorporated</h1>
        <h3>est. 2063</h3>
      </header>
      <main>
        <NavLink to='/sign-in'>sign_in</NavLink>
        <br />
        <br />
        <NavLink to='/sign-up'>sign_up</NavLink>
      </main>
    </>
  );
};

export default Landing;