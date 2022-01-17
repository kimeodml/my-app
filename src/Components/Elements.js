import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";


export const Logo = styled.a`
  display:flex;
  align-items:center;
  padding-left: 1rem;
  
  @media screen and (max-width: 768px) {
    padding-left:10px;   
  }
`;

export const Nav = styled.nav`
  background: #93B5C6;
  height: 45px;
  display: flex;
  padding: 1rem;
  justify-content: space-between;
  margin-bottom: 5rem;

`;

export const NavMenu = styled.div`
  display: flex;
  font-size: 20px;
  align-items:center;
 
  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-top: 61px;
    display: ${({menu})=>{
        return menu === false ? 'none':'flex'
    }};
  }
`;

export const NavLink = styled(Link)`
  // import { NavLink as Link } from "react-router-dom";
  color: black;
  text-decoration: none;
  padding:20px;

  &.active {
    color: #6867AC;
    font-weight: bold;
  }
  @media screen and (max-width: 768px) {
    background-color:rgba(228, 216, 220,0.5);
    z-index:1;
    width: 100px;
    text-align:center;
    
  }
`;

export const Sidebar = styled.button`
    display:none;

  @media screen and (max-width: 768px){
    display: flex;
    position: absolute;
    right:2rem;
    font-size: 2rem;
    cursor: pointer;
    color: #C9CCD5;
    
  }
`;

export const Foot = styled.div`
  position: fixed;
  bottom:0;
  left:0;
  width:100%;
  background:#FFE3E3;
  text-align: center;
  color: #93B5C6;

`