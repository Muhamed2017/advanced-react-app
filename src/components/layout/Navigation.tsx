import React, { memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useTheme } from '../../contexts/ThemeContext';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { setUser, logout } from '../../store/slices/userSlice';
import { Button } from '../common/Button';

const Nav = styled.nav`
  background: ${({ theme }) => theme.surface};
  border-bottom: 1px solid ${({ theme }) => theme.border};
  padding: 16px 40px;
  position: sticky;
  top: 0;
  z-index: 1000;
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 8px ${({ theme }) => theme.shadow};
`;

const NavContainer = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 24px;
  font-weight: 900;
  background: linear-gradient(135deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.secondary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)<{ $active: boolean }>`
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 600;
  color: ${({ $active, theme }) => $active ? theme.primary : theme.text};
  background: ${({ $active, theme }) => $active ? `${theme.primary}15` : 'transparent'};
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    background: ${({ theme }) => theme.primary}20;
    color: ${({ theme }) => theme.primary};
  }

  ${({ $active }) => $active && `
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 20px;
      right: 20px;
      height: 2px;
      background: currentColor;
    }
  `}
`;

const NavActions = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

const ThemeToggle = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.surface};
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: rotate(20deg) scale(1.1);
    border-color: ${({ theme }) => theme.primary};
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 16px;
  background: ${({ theme }) => theme.background};
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.border};

  @media (max-width: 768px) {
    display: none;
  }
`;

const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.secondary});
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 14px;
`;

const UserName = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.text};
`;

const Navigation: React.FC = () => {
  const { theme, toggleTheme, isDark } = useTheme();
  const location = useLocation();
  const { currentUser, isAuthenticated } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const handleAuth = () => {
    if (isAuthenticated) {
      dispatch(logout());
    } else {
      dispatch(setUser({
        id: '1',
        name: 'John Doe',
        email: 'john@example.com',
        avatar: 'JD'
      }));
    }
  };

  const routes = [
    { path: '/', label: 'Home' },
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/products', label: 'Products' },
    { path: '/patterns', label: 'Patterns' },
    { path: '/settings', label: 'Settings' },
  ];

  return (
    <Nav theme={theme}>
      <NavContainer>
        <Logo to="/" theme={theme}>
          <span>⚡</span>
          <span>React Advanced</span>
        </Logo>

        <NavLinks>
          {routes.map((route) => (
            <NavLink
              key={route.path}
              to={route.path}
              $active={location.pathname === route.path}
              theme={theme}
            >
              {route.label}
            </NavLink>
          ))}
        </NavLinks>

        <NavActions>
          <ThemeToggle theme={theme} onClick={toggleTheme}>
            {isDark ? '☀️' : '🌙'}
          </ThemeToggle>

          {isAuthenticated && currentUser && (
            <UserInfo theme={theme}>
              <Avatar theme={theme}>{currentUser.avatar || currentUser.name[0]}</Avatar>
              <UserName theme={theme}>{currentUser.name}</UserName>
            </UserInfo>
          )}

          <Button
            theme={theme}
            variant={isAuthenticated ? 'outline' : 'primary'}
            size="sm"
            onClick={handleAuth}
          >
            {isAuthenticated ? 'Logout' : 'Login'}
          </Button>
        </NavActions>
      </NavContainer>
    </Nav>
  );
};

export default memo(Navigation);
