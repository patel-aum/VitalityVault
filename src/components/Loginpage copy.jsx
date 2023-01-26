import React from 'react'
import styles from './Login.css'
const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    // validate input
    if (!username || !password) {
      setError('Please enter a username and password');
      return;
    }
    if (password.length < 8) {
      setError('Password must be at least 8 characters long');
      return;
    }
    if (!/\d/.test(password)) {
      setError('Password must contain at least one number');
      return;
    }
    // send data to server
    setError('');
    // ...
  };

  return (
    <div>
      <div className='Login'>
        <div className='frame1'>
          <span className='text'>
          <form onSubmit={handleSubmit}>
            <span>Login</span>
          </span>
          <div className={styles['frame2']}>
            <span className={styles['text02']}>
              <span>Username</span>
            </span>
          </div>
          <div className={styles['frame3']}>
            <span className={styles['text04']}>
              <span>Password</span>
            </span>
          </div>
          <div className={styles['frame4']}>
            <div className={styles['frame5']}></div>
            <span className={styles['text06']}>
              <span>Sign In</span>
            </span>
          </div>
          </form>
          <span className={styles['text08']}>
            <span>
              Sign up
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
                
              />
              </span>
              </span>
              
              <span className={styles['text10']}>
                <span>Forget password</span>
              </span>
            </div>
          </div>
        </div>
      )
    }

    export default Login