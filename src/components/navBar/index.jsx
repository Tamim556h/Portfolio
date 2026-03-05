import React from "react";
import {FaBars, FaReact} from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiX } from "react-icons/hi";
import './styles.scss';


const data = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Resume", link: "/resume" },
    { name: "Portfolio", link: "/portfolio" },
    { name: "Contact", link: "/contact" },
];

const NavBar = () => {

    const [toggleIcon, setToggleIcon] = React.useState(false);

    const handlToggleIcon = () => {
        setToggleIcon(!toggleIcon);
    };
    

        

  return (
    <div>
        <nav className="navbar">
            <div className="navbar__container">

                <Link to="/" className="navbar__container__logo">
                    <FaReact size ={30} className="navbar__logo" />
                </Link>
                
            </div>
                <ul className= {`navbar__container__menu ${toggleIcon ? 'active' : ''}`}>
                    {
                    data.map((item, index) => (
                        <li key={index} className="navbar__container__menu__item">
                            <Link to={item.link} className="navbar__container__menu__item__links">
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>   
            
            <div className="nav-icon" onClick={handlToggleIcon}>   

                {
                toggleIcon ? <HiX size={30} /> : <FaBars size={30} />
                }

            </div>

        </nav>

    </div>
  );
};

export default NavBar;