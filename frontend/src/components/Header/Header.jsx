
import React, { useRef } from 'react';
import logo from '../../assets/images/DoctorQuick.png';
import userImg from '../../assets/images/avatar-icon.png';
import { NavLink, Link } from 'react-router-dom';
import {BiMenu} from 'react-icons/bi';
import { useEffect } from 'react';

const navLinks = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/doctors',
    display: 'Find a Doctor'
  },
  {
    path: '/services',
    display: 'Services'
  },
  {
    path: '/contact',
    display: 'Contact'
  }
];

function Header() {
const headerReff= useRef(null)
const  menuReff = useRef(null)


const handleStickyHeader = ()=>{
  window.addEventListener('scroll',()=>{
    if(document.body.scrollTop > 80|| document.documentElement.scrollTop >80){
      headerReff.current.classList.add('sticky__header')
    }else{
      headerReff.current.classList.remove('sticky__header')
    }
  })
}

useEffect(()=>{
  return()=> window.removeEventListener('scroll',handleStickyHeader)
})

const toggleMenu = ()=> menuReff.current.classList.toggle('show__menu')

  return (
    <header className='header flex items-center' ref={headerReff}>
      <div className='container'>
        <div className='flex items-center justify-between '>
          <div>
            <img src={logo} alt='logo img' className='pb-8 pr-16' />
          </div>

          <div className='navigation' ref={menuReff} onClick={toggleMenu}>
            <ul className='menu flex items-center gap-[2.7rem]'>
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      isActive
                        ? 'text-primaryColor text-[16px] leading-7 font-semibold'
                        : 'text-textColor text-[16px] leading-7 font-semibold hover:text-primaryColor'
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className='flex items-center gap-4 '>
            <div className='hidden'>
              <Link to="/">
                <figure className='w-[35px] h-[35px] rounded-full cursor-pointer'>
                  <img src={userImg} className='w-full rounded-full' alt='userimage' />
                </figure>
              </Link>
            </div>
            <Link to="/login">
              <button className='bg-primaryColor py-1 px-5 text-white font-[600] h-[44px] flex items-center
              justify-center rounded-[50px]'>
                Login
              </button>
            </Link>

            <span className='md:hidden' onClick={toggleMenu}>
              <BiMenu className="w-6 h-6 cursor-pointer"/>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
