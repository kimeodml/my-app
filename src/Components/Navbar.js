import {
    Nav,
    Logo,
    NavLink,
    NavMenu,
    Sidebar,
} from "./Elements.js";
import {BsEmojiSunglassesFill} from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

function Navbar(){
    const [menu,setMenu] = useState(false);

    return(
        <>
            <Nav>
                <Logo href="/">
                    <BsEmojiSunglassesFill size="40px" color="white"/> 
                </Logo>
                <NavMenu menu={menu}>
                    <NavLink to="/about">
                        About 
                    </NavLink>
                    <NavLink to="/project">
                        Project 
                    </NavLink>
                    <NavLink to="/login">
                        Login
                    </NavLink>
                    <NavLink to="/sign">
                        Sign-in
                    </NavLink>
                </NavMenu>
                <Sidebar href="#" onClick={()=> setMenu(!menu)}>
                    <FaBars></FaBars>
                </Sidebar>
            </Nav>
        </>
    );
}

export default Navbar;