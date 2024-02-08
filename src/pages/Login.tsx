import React, { useEffect, useState } from 'react';
import axios from 'axios';
import logo from '../logo.svg'
import '../App.css'

const LogIn = () => {
    return (
        <>
          <header className="header bg-sage">
            <img src={logo} className="logo" alt="logo" />
            <h1 className="logo-font my-10 text-9xl whitespace-nowrap">Knit Wips</h1>
            <p className="altfont logo-altfont text-pink">
              Create, Track & Share: The Ultimate Knitters Companion
            </p>
            <div>
              <p>this is login page</p>
              <button 
                  className='py-2 px-8 rounded-full bg-pink hover:bg-darkpink align-centertransition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'> Log In
              </button>
            </div>        
          </header>
        </>
      )

};

export default LogIn;
