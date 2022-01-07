import React from 'react';
import { GoogleLogin } from 'react-google-login';

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

type GoogleSignInProps = {
    onSuccess: (email: string) => void;
    buttonText: 'Log In'|'Sign Up'
}
export function GoogleSignIn({ onSuccess, buttonText }: GoogleSignInProps)  {
    function handleSuccess(result: any) {
        localStorage.setItem('hermes.googleToken', result.tokenId);    
        onSuccess(result.profileObj.email);
    }
    function handleFailure(result: any) {
        console.log(result.error);
    }
    return (
        <GoogleLogin
            clientId={clientId || ''}
            onSuccess={handleSuccess}
            onFailure={handleFailure}
            buttonText={buttonText}
            cookiePolicy={'single_host_origin'}
        />
    );
}
