import ExploreIcon from '../assets/svg/exploreIcon.svg';
import PersonIcon from '../assets/svg/personOutlineIcon.svg';
import OfferIcon from '../assets/svg/localOfferIcon.svg';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  let location = useLocation();

  const navigateTo = (url: string) => {
    navigate(url);
  };
  return (
    <>
      <Outlet />
      <footer className="navbar">
        <nav className="navbarNav">
          <ul className="navbarListItems">
            <li className="navbarListItem" onClick={() => navigateTo('/')}>
              <img
                src={ExploreIcon}
                className={
                  location.pathname === '/' ? 'active-nav-image ' : 'nav-image'
                }
              />
              <p>Explore</p>
            </li>
            <li
              className="navbarListItem"
              onClick={() => navigateTo('/offers')}
            >
              <img
                src={OfferIcon}
                className={
                  location.pathname === '/offers'
                    ? 'active-nav-image '
                    : 'nav-image'
                }
              />
              <p>Offers</p>
            </li>
            <li
              className="navbarListItem"
              onClick={() => navigateTo('/profile')}
            >
              <img
                src={PersonIcon}
                className={
                  location.pathname === '/profile'
                    ? 'active-nav-image '
                    : 'nav-image'
                }
              />
              <p>Profile</p>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  );
}

export default Navbar;
