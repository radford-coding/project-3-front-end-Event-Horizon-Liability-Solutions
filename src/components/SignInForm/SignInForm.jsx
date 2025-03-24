import './SignInForm.css';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router';

import { signIn } from '../../services/authService';
import { NavLink } from 'react-router';
import { UserContext } from '../../contexts/UserContext';

const SignInForm = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (evt) => {
    setMessage('');
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const signedInUser = await signIn(formData);
      setUser(signedInUser);
      navigate('/welcome');
    } catch (err) {
      setMessage(err.message);
    };
  };

  return (
    <>
      <header>
        <h4>Event Horizon Liability Solutions, Inc.</h4>
        <nav>
          <NavLink to='/'>back</NavLink>
        </nav>
      </header>
      <main>
        <header>sign_in</header>
        <form autoComplete='off' onSubmit={handleSubmit}>
          <div>
            <label htmlFor='username'>Username:</label>
            <input
              type='text'
              autoComplete='off'
              id='username'
              value={formData.username}
              name='username'
              onChange={handleChange}
              required
            />
          </div>
          <br />
          <div>
            <label htmlFor='password'>Password:</label>
            <input
              type='password'
              autoComplete='off'
              id='password'
              value={formData.password}
              name='password'
              onChange={handleChange}
              required
            />
          </div>
          <br />
          <div className='button-container'>
            <button disabled={!(formData.username && formData.password)}>sign-in</button>
            <button onClick={() => navigate('/welcome')} className='red-text'>cancel</button>
          </div>
        </form>
        {message ? <p>{message}</p> : <></>}
      </main>
    </>
  );
};

export default SignInForm;
