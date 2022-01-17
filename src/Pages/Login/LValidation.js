function Validation(text){
    let errors={};

  
    if(!text.email){
        errors.email="이메일을 입력해 주세요";
    }else if(!/\S+@\S+\.\S+/.test(text.email)){
        errors.email="이메일 형식이 올바르지 않습니다.";
    }
    if(!text.password){
        errors.password="비밀번호를 입력해 주세요.";
    }
    
    return errors;
}

export default Validation;