import React, { useState } from 'react'
import { FaTimes, FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { 
  Nav, NavContainer, NavIcon, NavLogo, MobileIcon,NavItem,Navlinks,NavMenu

} from './Navbar.element'
function Navbar() {



  const [click, setClick] = useState(false)
  window.addEventListener('resize', function(event) {
    var w = document.documentElement.clientWidth;
     if (w>960){
        setClick(false)
     }
}, true)

  const handelClick=()=>setClick(!click);
  return (
    <IconContext.Provider value={{color:'#0a70d0'}}>
      <Nav>
        <NavContainer>
          <NavLogo to='/'>
            <NavIcon />
          movies
          </NavLogo>
          <MobileIcon onClick={handelClick}>{click ? <FaTimes /> : <FaBars />}</MobileIcon>
           <NavMenu  onClick={handelClick} click={click} >
            <NavItem>
              <Navlinks to='/'>home</Navlinks>
            </NavItem>
            <NavItem>
              <Navlinks to='/WatchList'>watchlist</Navlinks>
            </NavItem>
            <NavItem>
              <Navlinks to='/Top'>Trending</Navlinks>
            </NavItem>
           
             
           </NavMenu>
        </NavContainer>
      </Nav>
    </IconContext.Provider>
  )
}

export default Navbar
