import { useEffect, useState } from "react";
import {SValidation,SValidation2} from "./SValidation";
import "./Sign.css";

function Sign({submitForm}){
    const [text,setText] = useState({
        email:'',
        password:'',
        password2:'',
        studentId:'',
        major:'default',
        phoneNum:''
    });

    const [errors,setErrors]=useState({});
    const [dataIsCorrect,setDataIsCorrect] = useState(false);

    const [checkmeout,setCheckmeout] = useState(true);
    const [checkbox,setCheckBox]=useState(false);


    

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setErrors(SValidation(text));

        setDataIsCorrect(true);
        setCheckmeout(false);
        
    }
    const handleChange = (e) =>{
        const {name,value} = e.target;
        if(name==='studentId'){
            setText({
                ...text,
                studentId:value,
                major:SValidation2(text),
            });
        }
        else{
            setText({
                ...text,
                [name]:value,
            });
        }
    }
    useEffect(()=>{
        if(Object.keys(errors).length === 0 && dataIsCorrect){
            submitForm;
        }
    },[errors])

    return (
        <div className="sign-container">
            <form className="sign-form">
                <h2 className="sign-title">
                    Sign - in
                </h2>
                <div className="sign-group">
                    <label className="sign-label">Email</label>
                    <input 
                        className="sign-input"
                        type="email" 
                        name="email" 
                        value={text.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>
                <div className="sign-group">
                    <label className="sign-label">Password</label>
                    <input 
                        className="sign-input"
                        type="password" 
                        name="password" 
                        value={text.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p className="error">{errors.password}</p>}
                </div>
                <div className="sign-group">
                    <label className="sign-label">Confirm Password</label>
                    <input
                        className="sign-input" 
                        type="password" 
                        name="password2" 
                        value={text.password2}
                        onChange={handleChange}
                        
                    />
                    {errors.password2 && <p className="error">{errors.password2}</p>}
                </div>
                <div className="sign-group">
                    <label className="sign-label">Student ID</label>
                    <input 
                        className="sign-input"
                        type="text" 
                        name="studentId" 
                        value={text.studentId}
                        onChange={handleChange}
                        
                    />
                    {errors.studentId && <p className="error">{errors.studentId}</p>}
                </div>
                <div className="sign-group">
                    <label className="sign-label">Major</label>
                    <br/>
                    <select className="sign-input" name="major" value={text.major}>
                        <option value = "default">--Choose your Major--</option>
                        <option value = '1'>기계공학부</option>
                        <option value = '2'>컴퓨터공학부</option>
                        <option value = '3'>메카트로닉스공학부</option>
                        <option value = '4'>디자인건축공학부</option>
                        <option value = "5">전기전자통신공학부</option>
                        <option value = '6'>에너지신소재화학공학부</option>
                        <option value = '7'>산업경영학부</option>
                    </select>
                    {errors.major && <p className="error">{errors.major}</p>}
                </div>
                <div className="sign-group">
                    <label className="sign-label">Phone Number</label>
                    <input 
                        className="sign-input"
                        type="text" 
                        name="phoneNum" 
                        value={text.phoneNum}
                        onChange={handleChange}
                    />
                    {errors.phoneNum && <p className="error">{errors.phoneNum}</p>}
                </div>
                <div className="sign-group">
                    <div className="sign-check">
                        <input 
                            className="form-checkbox" 
                            type="checkbox" 
                            name="checkbox" 
                            onClick={()=>setCheckBox(!checkbox)}
                        />
                        <label className="form-checkbox-label">
                            Check me out!
                        </label>
                        {(checkbox === false && checkmeout === false ) && <p className="error">확인을 눌러주세요.</p>}
                    </div> 
                </div>
                <button className = "sign-input-btn" type="submit" onClick={handleFormSubmit}>SIGN IN</button>
                <button className = "sign-input-btn" type="reset">CANCEL</button>
            </form>
        </div>
    );
}

export default Sign;