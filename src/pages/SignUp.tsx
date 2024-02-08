import React, { useEffect, useState } from 'react';
import axios from 'axios';
import logo from '../logo.svg'
import '../App.css'

const SignUp = () => {
    return (
        <>
          <header className="header bg-sage">
            <img src={logo} className="logo" alt="logo" />
            <h1 className="logo-font my-10 text-9xl whitespace-nowrap">Knit Wips</h1>
            <p className="altfont logo-altfont text-pink">
              Create, Track & Share: The Ultimate Knitters Companion
            </p>
            <div>
              <p>This is Sign Up Page</p>
            </div>        
          </header>
        </>
      )

};

export default SignUp;
