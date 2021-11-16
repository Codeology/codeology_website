import React from 'react';

import { GoogleLogin } from 'react-google-login';
/* Source: https://github.com/Sivanesh-S/react-google-authentication/ */
const clientId =
  '483004997442-natsp47p4a7fb5h8c69h9bq9htqdg7r1.apps.googleusercontent.com';

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
function Login() {
  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    alert(
      `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
    );
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login. 😢`
    );
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
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