import './login.css';

export default function Login() {
  return (
    <div className='login'>
      <div className='loginWrapper'>
        <div className='loginLeft'>
          <h3 className='loginLogo'>Talksy</h3>
          <span className='loginDesc'>
            Connect with friends and world around you on Talksy
          </span>
        </div>
        <div className='loginRight'>
          <div className='loginBox'>
            <input type='email' className='loginInput' />
            <input type='password' className='loginInput' />
            <button className='loginButton'>Log in</button>
            <span className='loginForgot'>Forgot Password?</span>
            <button className='loginRegisterButton'>Create an Account</button>
          </div>
        </div>
      </div>
    </div>
  );
}
