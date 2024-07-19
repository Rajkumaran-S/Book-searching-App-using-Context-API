import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>find your book of choice.</h2><br />
                <p className='header-text fs-18 fw-3'>"It wasn't until I started reading and found books they wouldn't let us read in school that I discovered you could be insane and happy and have a good life without being like everybody else."</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header