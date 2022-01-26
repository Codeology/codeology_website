import React from 'react';

import { GoogleLogout } from 'react-google-login';
/* Source: https://github.com/Sivanesh-S/react-google-authentication/ */
/* Article: https://dev.to/sivaneshs/add-google-login-to-your-react-apps-in-10-mins-4del */

const clientId =
  '560041491884-um6j4jt2t6kvt4pdr6tqnksftkvrnq7i.apps.googleusercontent.com';

function Logout(props) {
    const onSuccess = () => {
        console.log('logout success');
        props.success();
    };
  
    return (
        <div>
            <GoogleLogout
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={onSuccess}
            />
        </div>
    )
}
  
export default Logout;
