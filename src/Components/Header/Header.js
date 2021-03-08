import React from 'react'
import './Header.css'
import 'antd/dist/antd.css';
import { Button } from 'antd'
import { Link } from 'react-router-dom'
import { app } from '../Base/Base'
import logo from '../Images/sch_logo.png'

function Header() {

  const handleLogOut = () => {
    app.auth().signOut()
  }

  return (
    <div className='grneralHeader'>
      <div className='subGeneralHeader'>
        <Link to="/home"><img src={logo} alt="" width="150px" /></Link>
        <Button onClick={handleLogOut}>Log Out</Button>
      </div>
    </div>
  )
}

export default Header
