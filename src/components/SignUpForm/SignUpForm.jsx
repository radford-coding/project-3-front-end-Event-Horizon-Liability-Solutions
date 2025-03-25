import { useState, useContext } from 'react';
import { useNavigate } from 'react-router';
import { signUp } from '../../services/authService';
import { NavLink } from 'react-router';
import { UserContext } from '../../contexts/UserContext';

const SignUpForm = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    passwordConf: '',
  });

  const { username, password, passwordConf } = formData;

  const handleChange = (evt) => {
    setMessage('');
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const newUser = await signUp(formData);
      setUser(newUser);
      navigate('/');
    } catch (err) {
      setMessage(err.message);
    };
  };

  const isFormInvalid = () => {
    return !(username && password && password === passwordConf);
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
        <header>sign_up</header>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='username'>Username:</label>
            <input
              type='text'
              id='username'
              value={username}
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
              id='password'
              value={password}
              name='password'
              onChange={handleChange}
              required
            />
          </div>
          <br />
          <div>
            <label htmlFor='confirm'>Confirm Password:</label>
            <input
              type='password'
              id='confirm'
              value={passwordConf}
              name='passwordConf'
              onChange={handleChange}
              required
            />
          </div>
          <br />
          <div className='button-container'>
            <button disabled={isFormInvalid()}>sign-up</button>
            <button onClick={() => navigate('/')} className='red-text'>cancel</button>
          </div>
        </form>
        {message ? <p>{message}</p> : <></>}
      </main>
    </>
  );
};

export default SignUpForm