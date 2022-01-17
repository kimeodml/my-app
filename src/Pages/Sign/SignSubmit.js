import { useState } from "react";
import Sign from "./Sign";
import SignSuccess from "./SignSuccess";
import "./Sign.css";

function SignSubmit(){
    const [isSubmitted,setIsSubmitted] = useState(false);
    function submitForm() {
        setIsSubmitted(true);
    }

    return (
        <div>
            {!isSubmitted ? 
                <Sign submitForm={()=>submitForm}/>
                 : <SignSuccess 
                />
            }
        </div>
    );
}

export default SignSubmit;