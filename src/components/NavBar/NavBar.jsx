import { useContext, useState, useEffect } from 'react';
import { NavLink } from 'react-router';
import { UserContext } from '../../contexts/UserContext';

const ehls = 'Event Horizon Liability Solutions, Inc.';

const NavBar = (props) => {
  const { user } = useContext(UserContext);

  const [targetLink, setTargetLink] = useState('dashboard');

  useEffect(() => {
    setTargetLink(() => {
      switch (props.target) {
        case 'employee-database': return '/employees';
        case 'mission-control': return '/missions';
        case 'company-resources': return '/resources';
        case 'dashboard': return '/';
        default: return '/';
      };
    });
  }, [props]);

  return (
    <header>
      {user ? (
        <>
          <h4>
            {ehls.split('').map((letter, index) => (
              /[A-Z ]/.test(letter) ? letter
                : (
                  Math.random() > .97
                    ? <span className='darken' key={index}>{String.fromCharCode(letter.charCodeAt() + 1)}</span>
                    : letter
                )
            )
            )}
          </h4>
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
};

export default NavBar