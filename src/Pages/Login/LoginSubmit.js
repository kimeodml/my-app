import { useState } from "react";
import Login from "./Login";
import LoginSuccess from "./LoginSuccess";
import './Login.css';

function LoginSubmit(){
    const [isSubmitted,setIsSubmitted] = useState(false);
    const submitForm = () => {
        setIsSubmitted(true);
    }
    return (
        <div>
            {!isSubmitted ? 
                <Login submitForm={submitForm}/>
                 : <LoginSuccess 
                />
            }
        </div>
    );
}

export default LoginSubmit;