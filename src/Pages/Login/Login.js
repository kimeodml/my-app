import { useEffect, useState } from "react";
import LValidation from "./LValidation.js";
import './Login.css';

function Login({submitForm}){
    const [text,setText]=useState({
        email:"",
        password:""
    });
    const [errors,setErrors] = useState({});
    const [dataIsCorrect,setDataIsCorrect] = useState(false);
    const handleChange = (e) =>{
        const {name, value} = e.target; // 이벤트 타겟의 속성 name과 value을 추출함
        setText({
            ...text, // 직접수정은 불가능하므로 스프레드 문법을 이용해 
            [name]:value // 기존 객체를 복사하여 새로운 객체를 만듦 -> 불변성을 지킴
            // name 키를 가진 값을 value로 설정 -> emil 이나 passoword가 들어올 수 있다는 의미
        });
    };
    const handleFormSubmit=(e)=>{
        e.preventDefault();
        setErrors(LValidation(text));
        setDataIsCorrect(true);
    };
    useEffect(()=>{
        if(Object.keys(errors).length === 0 && dataIsCorrect){
            submitForm(true);
        }
    },[errors]);
    
    return (
        <div className="login-container">
            <form className="login-form">
                <h2 className="login-title">
                    Login - in
                </h2>
                <div className="login-group">
                    <label className="login-label">Email</label>
                    <input 
                        className="login-input"
                        type="email" 
                        name="email" 
                        value={text.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>
                <div className="login-group">
                    <label className="login-label">Password</label>
                    <input 
                        className="login-input"
                        type="password" 
                        name="password"
                        value={text.password}
                        onChange={handleChange} 
                    />
                    {errors.password && <p className="error">{errors.password}</p>}
                </div>
                <button className = "login-input-btn" type="submit" onClick={handleFormSubmit}>
                    SUBMIT
                </button>
            </form>
        </div>
    );
}

export default Login;