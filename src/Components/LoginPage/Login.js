import React from 'react'
import 'antd/dist/antd.css';
import './Login.css'
import { Input } from 'antd'
import { Button } from 'antd'
// import { useState, useEffect } from 'react'
// import { app } from '../Base/Base'
import fblogo from '../Images/fblogo.png'
import gitlogo from '../Images/gitlogo.png'
import gglogo from '../Images/gglogo.png'
import ttlogo from '../Images/ttlogo.png'

function Login(props) {

  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignUp,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
    GoogleLogin,
    SignInWithFacebook,
    SignInWithGitHub } = props

  return (
    <div className='GeneralLoginDiv'>
      <div className='SubGeneralLoginDiv'>
        <div className='ContentHold'>
          <div style={{ color: '#ddd' }}>UserName</div>
          <Input
            className='InputDiv'
            placeholder='Email'
            type='email'
            autoFocus
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p style={{ color: 'red', fontSize: '11px' }}> {emailError} </p>
          <div style={{ color: '#ddd' }}>Password</div>
          <Input
            className='InputDiv'
            placeholder='Password'
            type='password'
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <p style={{ color: 'red', fontSize: '11px' }}> {passwordError} </p>
          <div>
            {hasAccount ? (
              <>
                <div style={{ width: '300px', display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
                  <Button onClick={handleLogin} style={{ color: '#fff', fontWeight: 'bold', backgroundColor: '#4081ec' }}>Sign In</Button>
                  <p style={{ color: '#ddd' }}>Don't Have An Account ? <span onClick={() => setHasAccount(!hasAccount)} style={{ color: 'yellow', cursor: 'pointer' }}>Sign Up</span></p>
                </div>
              </>
            ) : (
                <>
                  <div style={{ width: '300px', display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
                    <Button onClick={handleSignUp} style={{ color: '#fff', fontWeight: 'bold', backgroundColor: '#4081ec' }}>Sign Up</Button>
                    <p style={{ color: '#ddd' }}>Have An Account ? <span onClick={() => setHasAccount(!hasAccount)} style={{ color: 'lightGreen', cursor: 'pointer' }} >Sign In</span></p>
                  </div>
                </>
              )}
          </div>
          <div style={{ color: '#ddd' }}>Or Login Using</div>
          {/* <Button onClick={GoogleLogin}>Google</Button>
        <Button onClick={SignInWithFacebook}>Facebook</Button>
        <Button>Twitter</Button>
        <Button onClick={SignInWithGitHub}>GitHub</Button>
        <Button>Phone</Button> */}
          <div className='LogoDiv'>
            <img src={gglogo} alt='' onClick={GoogleLogin} width='50px' />
            <img src={fblogo} alt='' onClick={SignInWithFacebook} width='90px' />
            <img src={gitlogo} alt='' onClick={SignInWithGitHub} width='60px' />
            <img src={ttlogo} alt='' onClick='' width='65px' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
