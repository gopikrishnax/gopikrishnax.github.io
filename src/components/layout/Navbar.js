import React from 'react';
import navbarStyle from './Navbar.module.css';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faCircle } from '@fortawesome/free-solid-svg-icons';
import Header from './header';
import { ROUTES } from '../../constants/constants';

const Navbar = ({
  toggleDarkMode,
  darkMode,
  accentColor,
  changeAccentColor,
  ...props
}) => {
  const nightModeIcon = darkMode ? (
    <FontAwesomeIcon icon={faSun} />
  ) : (
    <FontAwesomeIcon icon={faMoon} />
  );
  const nightModeIconStyle = darkMode ? navbarStyle.day : navbarStyle.night;
  const navBackground = darkMode ? navbarStyle.bgDark : navbarStyle.bgLight;
  const showBoxShadowClass = typeof window !== 'undefined'
    ? window.location.pathname !== '/'
      ? 'box-shadow-2px-blur'
      : ''
    : '';



  console.log(showBoxShadowClass);
  return (
    <div className={`${navbarStyle.navsection} ${navBackground} ${showBoxShadowClass}`}>
      <Header />
      <nav>
        <ul className={navbarStyle.navbar}>
          {ROUTES.length !== 0 &&
            ROUTES.map(route => (
              <li className={navbarStyle.navitem} key={route.pathName}>
                <Link
                  className={navbarStyle.navlink}
                  to={route.path}
                  activeClassName={navbarStyle.linkActive}
                >
                  {' '}
                  <span className={navbarStyle.navlinkIcon}>
                    <FontAwesomeIcon icon={route.icon} />
                  </span>
                  <span>{route.pathName}</span>
                </Link>
              </li>
            ))}
        </ul>
      </nav>
      <div className="top_action">
        <button
          className={`${navbarStyle.nightModeBtn}`}
          style={{ color: `var(--accent-${accentColor})` }}
          onClick={changeAccentColor}
          aria-label="change site accent color"
          title="Change accent"
        >
          <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon>
        </button>
        <button
          className={`${navbarStyle.nightModeBtn} ${nightModeIconStyle}`}
          onClick={toggleDarkMode}
          aria-label="toggle darkmode"
          title="toggle darkmode"
        >
          {nightModeIcon}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
