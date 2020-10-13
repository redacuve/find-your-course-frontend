import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PrivateMenu from './PrivateMenu';
import PublicMenu from './PublicMenu';

function Navbar() {
  const history = useHistory();
  const sidebarRef = useRef();
  const token = useSelector(state => state.UserLogin.token);
  const title = useSelector(state => state.Title.title);

  const toggleMenu = () => {
    sidebarRef.current.classList.toggle('open');
  };

  return (
    <>
      {token ? (
        <PrivateMenu sidebarRef={sidebarRef} history={history} />
      ) : (
        <PublicMenu sidebarRef={sidebarRef} />
      )}
      <nav className="flex justify-between p-2 items-center text-2xl">
        <div
          className="md:hidden"
          onClick={toggleMenu}
          role="button"
          tabIndex="0"
          aria-label="open sidebar"
          onKeyDown={toggleMenu}
        >
          <i className="fas fa-bars" />
        </div>
        <div className="text-sm font-bold">{title}</div>
        <div>
          <i className="fal fa-search" />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
