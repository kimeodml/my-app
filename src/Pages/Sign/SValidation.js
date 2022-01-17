export function SValidation(text){
    
    let errors={};
    console.log(text);

    if(!text.email){
        errors.email="이메일을 입력해 주세요";
    }else if(!/\S+@\S+\.\S+/.test(text.email)){
        errors.email="이메일 형식이 올바르지 않습니다.";
    }
    if(!text.password){
        errors.password="비밀번호를 입력해 주세요.";
    }
    if(!text.password2){
        errors.password2="비밀번호 확인을 입력해 주세요.";
    }else if(text.password2!==text.password){
        errors.password2="비밀번호가 일치하지 않습니다.";
    }
    if(!text.studentId){
        errors.studentId="학번을 입력해 주세요.";
    }else if(!/^[0-9]+\d{9}$/.test(text.studentId)){
        errors.studentId="학번 형식이 올바르지 않습니다.";
    }
    if(errors.major === 'default'){
        errors.major="학과를 선택하세요.";
    }
    
    if(!text.phoneNum){
        errors.phoneNum="핸드폰 번호를 입력해 주세요.";
    }else if(!/^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/.test(text.phoneNum)){
        errors.phoneNum="핸드폰 형식이 올바르지 않습니다.";
    }
    
    return errors;
}

export function SValidation2(text){

    let ID = new Array(10);
    let majorValue = "";

    for(let i = 0; i < 10;i++){
        ID[i] = text.studentId.substr(i,1);
    }
    
    if(ID[5] === '2' && ID[6] === '0'){
        majorValue="1";
    }
    else if(ID[5] === '3' && ID[6] === '6'){
        majorValue="2";
    }
    else if(ID[5] === '4' && ID[6] === '0'){
        majorValue="3";
    }
    else if(ID[5] === '5' && ID[6] === '1'){
        majorValue="4";
    }
    else if(ID[5] === '6' && ID[6] === '0'){
        majorValue="5";
    }
    else if(ID[5] === '7' && ID[6] === '4'){
        majorValue="6";
    }
    else if(ID[5] === '8' && ID[6] === '0'){
        majorValue="7";
    }
    console.log(ID[5],ID[6]);
    console.log(majorValue);
    return majorValue;
    
}

