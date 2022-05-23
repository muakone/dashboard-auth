import React, { useState } from 'react'
import logo from "../images/logo.png"
import SideBarContent from '../components/SideBarContent'
import { AiOutlineMenu } from 'react-icons/ai'

const MobileSidebar = () => {
  const [showMenu, setShowMenu] = useState(false)
    const handleShowMenu = () => {
        setShowMenu(!showMenu)
    }
  return (
    <nav className='navMobile'>
      <div>
            <img src={logo} alt="logo" />
        </div>
        <div className='slideSidebar'>
            <AiOutlineMenu className='openNav' onClick={handleShowMenu} />
            <div>
            {
            showMenu ?
            <div className='sideMenuBg'>
              <SideBarContent handleShowMenu={handleShowMenu} />
            </div>
            :
            <div className='closeSidebar'>

            </div>
            }
            </div>
            
        </div>
    </nav>
  )
}

export default MobileSidebar