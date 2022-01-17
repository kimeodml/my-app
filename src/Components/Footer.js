import {Foot} from "./Elements.js";
import {BsEmojiSunglassesFill} from "react-icons/bs";


function Footer(){
    return(
        <Foot>
            <BsEmojiSunglassesFill style={{paddingRight:'5px', fontSize:'14px'}}/>
            smile@example.com 
        </Foot>
    );
}

export default Footer;