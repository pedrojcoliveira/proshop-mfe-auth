import { useState, useEffect } from 'react';
import { NavDropdown, Nav } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import authService from '../store/authService';

const UserMenu = () => {
  const [userInfo, setUserInfo] = useState(() => authService.getUser());
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = authService.subscribe((user) => {
      setUserInfo(user);
    });
    return unsubscribe;
  }, []);

  const logoutHandler = () => {
    authService.logout();
    navigate('/user/login');
  };

  if (!userInfo) {
    return (
      <Nav.Link onClick={() => navigate('/user/login')}>
        <FaUser /> Sign In
      </Nav.Link>
    );
  }

  return (
    <NavDropdown title={userInfo.name} id='username'>
      <NavDropdown.Item onClick={() => navigate('/user/profile')}>
        Profile
      </NavDropdown.Item>
      <NavDropdown.Item onClick={logoutHandler}>
        Logout
      </NavDropdown.Item>
    </NavDropdown>
  );
};

export default UserMenu;
