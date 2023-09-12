import React, { useState, useEffect } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { BsGeoAlt, BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import MainLogo from '../img/logo-main.png';
import WhiteLogo from '../img/logo-white.png';
import ToggleDark from '../img/toggle-icon-dark.svg';
import ToggleLight from '../img/toggle-icon-light.svg';


function ConSidebar() {
      const [toggled, setToggled] = useState(false);
      // const [click, setClick] = useState(false);
      // const handleclick = () => setClick(!click);


      // change logo of navbar

      const [logo, setLogo] = useState({
            src: "",
      })
      const ChangeLogo = () => setLogo(window.scrollY > 50)
      useEffect(() => {
            window.addEventListener("scroll", ChangeLogo);
      }, []);

      // change logo of navbar

      //change color of navbar

      const [color, setColor] = useState(false)
      const changeColor = () => {
            if (window.scrollY >= 50) {
                  setColor(true)
            }
            else
                  setColor(false)
      }
      window.addEventListener('scroll', changeColor)

      //change color of navbar

      return (
            <>
                  <Sidebar backgroundColor="#ffff" onBackdropClick={() => setToggled(false)} toggled={toggled} breakPoint="always">
                        <div className="">
                              <h4 className="text-center py-4 text-primary">Welcome</h4>
                        </div>

                        <Menu
                              menuItemStyles={{
                                    button: ({ level, active, disabled }) => {
                                          if (level === 0)
                                                return {
                                                      color: disabled ? '#f5d9ff' : '#252525',
                                                      fontWeight: '500',
                                                      backgroundColor: active ? '#eecef9' : undefined,
                                                };
                                    },
                              }}>
                              <SubMenu label="Painting">
                                    {/* <MenuItem> Fevicol</MenuItem>
                                    <MenuItem> Putty X2</MenuItem>
                                    <MenuItem> Primers</MenuItem> */}
                              </SubMenu>
                              <SubMenu label="Plywoods">
                                    {/* <MenuItem> Pie charts</MenuItem>
                                    <MenuItem> Line charts</MenuItem>
                                    <MenuItem> Bar charts</MenuItem> */}
                              </SubMenu>
                              <SubMenu label="Tools">
                                    {/* <MenuItem> Pie charts</MenuItem>
                                    <MenuItem> Line charts</MenuItem>
                                    <MenuItem> Bar charts</MenuItem> */}
                              </SubMenu>
                              <SubMenu label="Plumbing"></SubMenu>
                              <SubMenu label="Electrical"></SubMenu>
                              <SubMenu label="Hardware"></SubMenu>
                              <SubMenu label="Home Improvement"></SubMenu>
                              <SubMenu label="Sanitary"></SubMenu>
                              <SubMenu label="Tiles"></SubMenu>
                        </Menu>
                        <hr></hr>
                        <Menu>
                              <MenuItem><Link to={"/About"} className='side-link'>About Us</Link></MenuItem>
                              <MenuItem><Link to={"/Contact"} className='side-link'>Contact Us</Link></MenuItem>
                              <MenuItem><Link to={"/Store Locator"} className='side-link'>Store Locator</Link></MenuItem>
                              <MenuItem><Link to={"/PrivacyPolicy"} className='side-link'>Privacy Policy</Link></MenuItem>
                              <MenuItem><Link to={"/ReturnPolicy"} className='side-link'>Return Policy</Link></MenuItem>
                              <MenuItem><Link to={"/T&c"} className='side-link'>Terms & Condition</Link></MenuItem>
                              <MenuItem><Link to={"/Career"} className='side-link'>Career</Link></MenuItem>
                              <MenuItem><Link to={"/FAQs"} className='side-link'>FAQs</Link></MenuItem>
                        </Menu>
                  </Sidebar >

                  <nav className={color ? 'main-nav nav-bg' : 'main-nav'}>
                        <div className="container">
                              <div className="d-flex navbar-in justify-content-between align-items-center">
                                    <div className="d-flex justify-content-start">
                                          <div className="ham-menu pe-2 text-white">
                                                <img alt="toggleicon" src={logo ? ToggleDark : ToggleLight } onClick={() => setToggled(!toggled)} />
                                          </div>
                                          <div className="logo">
                                                <Link to={'/'}>
                                                <img alt="logo" src={logo ? MainLogo : WhiteLogo} />
                                                </Link>
                                          </div>
                                    </div>

                                    <div className="d-flex justify-content-end">
                                          <div className="search-box d-flex align-items-center justify-content-end me-2">
                                                <button className={color ? 'btn-search-scroll' : 'btn-search'}><BsSearch className={color ? 'icon-dark' : 'icon-light'} /></button>
                                                <input type="text" className={color ? 'input-search-scroll' : 'input-search'} placeholder="Type to Search..." />
                                          </div>
                                          <div className="d-flex justify-content-end align-items-center text-white">
                                                <Link to={"/StoreLocator"}>
                                                      <BsGeoAlt className={color ? 'icon-dark' : 'icon-light'} />
                                                </Link>

                                          </div>
                                    </div>
                              </div>
                        </div>
                  </nav>

            </>
      )
}

export default ConSidebar;