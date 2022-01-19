import React from 'react';

import { GoogleLogin } from 'react-google-login';
/* Source: https://github.com/Sivanesh-S/react-google-authentication/ */
/* Article: https://dev.to/sivaneshs/add-google-login-to-your-react-apps-in-10-mins-4del */

const clientId =
  '560041491884-um6j4jt2t6kvt4pdr6tqnksftkvrnq7i.apps.googleusercontent.com';

const refreshTokenSetup = (res) => {
// Timing to renew access token
let refreshTiming = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000;

const refreshToken = async () => {
    const newAuthRes = await res.reloadAuthResponse();
    refreshTiming = (newAuthRes.expires_in || 3600 - 5 * 60) * 1000;
    console.log('newAuthRes:', newAuthRes);
    // saveUserToken(newAuthRes.access_token);  <-- save new token
    localStorage.setItem('authToken', newAuthRes.id_token);

    // Setup the other timer after the first one
    setTimeout(refreshToken, refreshTiming);
};

// Setup first refresh timer
setTimeout(refreshToken, refreshTiming);
};

function Login(props) {
  const onSuccess = (res) => {
    refreshTokenSetup(res);
    props.success(res.profileObj.name, res.profileObj.email);
  };

  const onFailure = (res) => {
    console.log('Login failed: ', res);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Log In"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px' }}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;