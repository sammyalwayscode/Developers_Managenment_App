import React from 'react'
import { useState, useEffect } from 'react'
import { app } from '../Base/Base'
import Home from '../Home/Home'
import Login from '../LoginPage/Login'
import firebase from 'firebase'

function AuthFunction() {


  const [user, setUser] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [hasAccount, setHasAccount] = useState(false)


  const clearInput = () => {
    setEmail("")
    setPassword("")
  }

  const clearErrors = () => {
    setEmailError("")
    setPasswordError("")
  }


  const handleLogin = () => {
    clearErrors()
    app.auth().signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      })
  }

  const handleSignUp = () => {
    clearErrors()
    app.auth().createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      })
  }

  const handleLogOut = () => {
    app.auth().signOut()
  }

  const SignInWithGoogle = new firebase.auth.GoogleAuthProvider()
  const GoogleLogin = () => {
    firebase.auth().signInWithPopup(SignInWithGoogle)
  }

  const FacebookSignIn = new firebase.auth.FacebookAuthProvider()
  const SignInWithFacebook = () => {
    firebase.auth().signInWithPopup(FacebookSignIn)
  }

  const GitHubSignIn = new firebase.auth.GithubAuthProvider()
  const SignInWithGitHub = () => {
    firebase.auth().signInWithPopup(GitHubSignIn)
  }

  // const setUpRecaptcha = () => {
  //   window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
  //     'size': 'invisible',
  //     'callback': (response) => {
  //       // reCAPTCHA solved, allow signInWithPhoneNumber.
  //       this.onSignInSubmit();
  //     }
  //   });
  // }

  // onSignInSubmit = (e) => {
  //   e.preventDefault()
  //   // const phoneNumber = getPhoneNumberFromUserInput();
  //   const phoneNumber = '+2349032676595';
  //   const appVerifier = window.recaptchaVerifier;
  //   firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
  //     .then((confirmationResult) => {
  //       // SMS sent. Prompt user to type the code from the message, then sign the
  //       // user in with confirmationResult.confirm(code).
  //       window.confirmationResult = confirmationResult;
  //       // ...
  //     }).catch((error) => {
  //       // Error; SMS not sent
  //       // ...
  //     });
  // }


  const authListener = () => {
    app.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInput()
        setUser(user)
      } else {
        setUser("")
      }
    })
  }

  useEffect(() => {
    authListener()
  }, [])


  return (
    <div>
      {user ? (
        <Home handleLogOut={handleLogOut} />
      ) : (
          <Login
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleLogin={handleLogin}
            handleSignUp={handleSignUp}
            hasAccount={hasAccount}
            setHasAccount={setHasAccount}
            emailError={emailError}
            passwordError={passwordError}
            GoogleLogin={GoogleLogin}
            SignInWithFacebook={SignInWithFacebook}
            SignInWithGitHub={SignInWithGitHub}
          />
        )}
    </div>
  )
}

export default AuthFunction
