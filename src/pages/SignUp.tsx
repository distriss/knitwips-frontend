import React, { useEffect, useState } from 'react';
import axios from 'axios';
import logo from '../logo.svg'
import '../App.css'

const SignUp = () => {
    return (
        <>
          <header className="header bg-sage pt-10">
            <img src={logo} className="logo" alt="logo" />
            <h1 className="logo-font my-6 text-9xl whitespace-nowrap">KnitWips</h1>
            <p className="altfont text-5xl text-pink mb-8">
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
