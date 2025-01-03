import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close, logo1 } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);


  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed  top-0 z-20 bg-primary`}
    // w-full -> width full z-20 -> above all other elements
    >

      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'
      // justify-between -> equally spaced along main axis ,
      // items-center -> .. along cross axis, mx-auto -> to center a container
      >

        <Link to="/" className='flex items-center gap-2' onClick={() => {
          setActive("");
          window.scrollTo(0, 0); //scrolls the document to specific coordinates
        }}>

          <img src={logo1} alt="logo" className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer'>Subhajit</p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (

            <li key={nav.id} className={`${active === nav.title ? "text-white" : "text-secondary"}
            hover:text-white text-[18px] font-medium cursor-pointer`} onClick={() => setActive(nav.title)}>

              <a href={`#${nav.id}`}>{nav.title}</a>

            </li>
          ))}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'
        // justify-end -> end of the container's main axis ; flex-1 -> allow a flex item to grow or shrink as 
        // needed ignoring its initial size
        >
          <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)} />
          <div className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute 
          top-20 right-0 mx-4 my-4 min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (

                <li key={nav.id} className={`${active === nav.title ? "text-white" : "text-secondary"}
            font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setActive(nav.title);
                    setToggle(!toggle);
                  }}>

                  <a href={`#${nav.id}`}>{nav.title}</a>

                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

    </nav>
  )
}

export default Navbar