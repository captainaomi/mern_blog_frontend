import React from 'react'
import { images } from '../constants'

const navItemsInfo = [
  {name: "Home"},
  {name: "Articles"},
  {name: "Pages"},
  {name: "Pricing"},
  {name: "FAQ"},
];

const NavItem = ({name}) => {
  return (
    <li className="relative group">
    <a href="/" className="px-4 py-2 ">
      {name}
    </a>
    <span className="text-[#ff4800] absolute transition-all duration-500 font-bold right-0 top-0 opacity-0 group-hover:right-[90%] group-hover:opacity-100">
      /
    </span>
  </li>
  );
};

const Header = () => {
  return (
    <section>
      <header className="container mx-auto px-5 flex justify-between py-4 items-center">
        <div>
          <img className="w-[100px]" src={images.Logo} alt="logo" />
        </div>
        <div className="flex gap-x-9 items-center">
          <ul className="flex gap-x-2 font-semibold">
            {navItemsInfo.map((item) => (
              <NavItem key={item.name} name={item.name}/>
            ))}
          </ul>
          <button className="border-2 border-[#ff4800] px-6 py-2 rounded-full font-semibold hover:bg-[#ff4800] transition-all duration-300">Sign In</button>
        </div>
      </header>
    </section>
  )
}

export default Header
