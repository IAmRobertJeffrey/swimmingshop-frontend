import React from 'react'
import '../Components/styles/loginbutton.css';

const LoginButton = () => {
    
    function loginWithRedirect()
    {
        
    }

    return (
        <button onClick={() => loginWithRedirect()}>
            Log In
        </button>
    )
}

export default LoginButton;