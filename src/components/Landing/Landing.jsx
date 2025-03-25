import { NavLink } from 'react-router';

const Landing = () => {
  return (
    <>
      <header>
        <h4>Event Horizon Liability Solutions, Inc.</h4>
        <nav>
          <a
            href="/"
            className='red-text'
            style={{ pointerEvents: 'none', cursor: 'default' }}
          >

          </a>
        </nav>
      </header>
      <main>
        <ul>
          <NavLink to='/sign-in'><li>sign_in</li></NavLink>
          <NavLink to='/sign-up'><li>sign_up</li></NavLink>
        </ul>
        <br />
        <br />
        <section>
          <h4>Incorporated c. 2063</h4>
        </section>
      </main>
    </>
  );
};

export default Landing;