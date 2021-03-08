import React from 'react'
import 'antd/dist/antd.css';
import { Button } from 'antd'
import { app } from '../Base/Base'
import Header from '../Header/Header';
import './Home.css'
import { Link } from 'react-router-dom';
import UpCard from '../UploadCard/UpCard';

function Home() {
  return (
    <div>
      <Header />
      <div className='MainHomeDiv'>
        <div className='BgContHolder'>
          <Link to='/start'> <Button style={{ width: '140px', backgroundColor: 'darkorange', color: '#fff', fontWeight: 'bold' }}>Get Started</Button></Link>
          <Link to='/upload'><Button style={{ width: '140px', backgroundColor: 'darkcyan', color: '#fff', fontWeight: 'bold' }}>Upload A Project</Button></Link>
        </div>
      </div>
      <div className='CardPart'>
        <div className='CardPWidthHold'>
          <UpCard />
        </div>
      </div>
    </div>
  )
}

export default Home
