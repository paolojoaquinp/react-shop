import React, { useRef } from 'react'
import '../styles/Login.scss';

const Login = () => {
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = () => {
    const formData = new FormData(form.current as HTMLFormElement);
    const data = {
      username: formData.get('email'),
      password: formData.get('password'),
    }
  }
  return (
    <div className="login">
      <div className="form-container">
        <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
        <form action="/" className="form" ref={form}>
          <label htmlFor="email" className="label">Email address</label>
          <input type="text" name="email" placeholder="platzi@example.cm" className="input input-email" />
          <label htmlFor="password" className="label">Password</label>
          <input type="password" name="password" placeholder="*********" className="input input-password" />
          <button 
            type="button" 
            className="primary-button login-button"
            onClick={handleSubmit}
          >
            Log in
          </button>
          <a href="/">Forgot my password</a>
        </form>
        <button 
          className="secondary-button signup-button" 
          type='button'
        >
          Sign up
        </button>
      </div>
    </div>
  );
}

export default Login;