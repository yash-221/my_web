import React from 'react';
import '../styles/login.css';

function Login() {
    return (

        
        <div style={{ height: '100vh', width: '100vw', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h1>Login Form</h1>
            <div className="form-container">
                <p className="title">Login</p>
                <form className="form">
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" id="username" placeholder="" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" placeholder="" />
                        <div className="forgot">
                            <a rel="noopener noreferrer" href="/">Forgot Password ?</a>
                        </div>
                    </div>
                    <button className="sign">Sign in</button>
                </form>
                </div>
        
        </div>
    );
}

export default Login;
