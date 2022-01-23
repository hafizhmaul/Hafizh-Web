import React from 'react';
import { config } from '@/utils/config';
import { Link } from 'react-scroll';


const BurgerMenu = ({ openDrawer, handleDrawer }) => {
  return (
    <>
      <div className='fixed top-0 right-0 z-50'>
        <div className={`hamburger hamburger--squeeze ${openDrawer ? 'is-active' : ''} mt-4`} type="button" onClick={handleDrawer}>
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </div>
      </div>
      <div className={`my-drawer drawer-dimension ${openDrawer ? "is-open shadow-xl" : ""}`}>
        <div className="block text-center text-2xl font-semibold">
          {config.navLinks.map((item, idx) => (
            <div key={idx} className='cursor-pointer m-20'>
              <Link onClick={handleDrawer} activeClass="active" to={item.label} spy={true} smooth={true} offset={0} duration={50} delay={0}>{item.name}</Link>
            </div>
          ))}
        </div>
      </div>
    </>

  )
}

export default BurgerMenu;
