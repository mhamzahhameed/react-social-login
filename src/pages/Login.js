import React from 'react'
import { GoogleLogin } from '@react-oauth/google';
import ReactFacebookLogin from 'react-facebook-login';
import { useLinkedIn } from 'react-linkedin-login-oauth2';
import linkedin from 'react-linkedin-login-oauth2/assets/linkedin.png';
import { LOGGEDINROUTE } from '../routes/Route';

const Login = () => {
    const googleLoginSuccess = (response) => {
        console.log('Google login successful:', response);
        // handle successful login
      }
    
      const googleLoginFailure = (error) => {
        console.log('Google login failed:', error);
        // handle failed login
      }
    
      // Facebook login
      const facebookLoginSuccess = (response) => {
        console.log('Facebook login successful:', response);
        // handle successful login
      }
    
      const facebookLoginFailure = (error) => {
        console.log('Facebook login failed:', error);
        // handle failed login
      }
    
      const { linkedInLogin } = useLinkedIn({
        clientId: '77vhlx2ak3idhh',
        redirectUri: `http://localhost:3000${LOGGEDINROUTE}`, // for Next.js, you can use `${typeof window === 'object' && window.location.origin}/linkedin`
        onSuccess: (code) => {
          console.log("successfully logged in.");
        },
        onError: (error) => {
          console.log(error);
        },
      });
      return (
        <div className="App">
          <h2>React Social Logins</h2>
                <br />
                <br />
                <GoogleLogin onSuccess={googleLoginSuccess} onError={googleLoginFailure} />
          {/* <GoogleLogin
            clientId="114129762829-lqu68ajn9oj8u39nnm8bkosvajlgmrma.apps.googleusercontent.com"
            buttonText="Login with Google"
            onSuccess={googleLoginSuccess}
            onFailure={googleLoginFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn= {true}
          /> <br/> */}
          <br />
          <br />
          <ReactFacebookLogin
            appId="2402135046616291"
            autoLoad={false}
            fields="name,email,picture"
            callback={facebookLoginSuccess}
            onFailure={facebookLoginFailure}
          />
          <br />
          <br />
          <img
          onClick={linkedInLogin}
          src={linkedin}
          alt="Sign in with Linked In"
          style={{ maxWidth: '180px', cursor: 'pointer' }}
        />
          {/* <LinkedIn
            clientId="your-client-id"
            redirectUri="your-redirect-uri"
            onFailure={linkedInLoginFailure}
            onSuccess={linkedInLoginSuccess}
            scope={['r_emailaddress', 'r_liteprofile']}
          >
            <button>Login with LinkedIn</button>
          </LinkedIn> */}
        </div>
      );
}

export default Login
