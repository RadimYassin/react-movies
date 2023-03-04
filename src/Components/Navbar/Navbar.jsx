import React, { useState } from 'react'
import { FaTimes, FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { 
  Nav, NavContainer, NavIcon, NavLogo, MobileIcon,NavItem,Navlinks,NavMenu

} from './Navbar.element'
function Navbar() {
  const [click, setClick] = useState(false)

  const handelClick=()=>setClick(!click);
  return (
    <IconContext.Provider value={{color:'#0a70d0'}}>
      <Nav>
        <NavContainer>
          <NavLogo to='/'>
            <NavIcon />
          movie
          </NavLogo>
          <MobileIcon onClick={handelClick}>{click ? <FaTimes /> : <FaBars />}</MobileIcon>
           <NavMenu  onClick={handelClick} click={click} >
            <NavItem>
              <Navlinks to='/'>HOME</Navlinks>
            </NavItem>
            <NavItem>
              <Navlinks to='/'>WAHTCHLIST</Navlinks>
            </NavItem>
            <NavItem>
              <Navlinks to='/'>TOP</Navlinks>
            </NavItem>
           
             
           </NavMenu>
        </NavContainer>
      </Nav>
    </IconContext.Provider>
  )
}

export default Navbar
