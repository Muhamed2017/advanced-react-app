import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { store } from './store/store';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import { GlobalStyles } from './styles/GlobalStyles';
import Navigation from './components/layout/Navigation';
import styled from 'styled-components';

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  background: ${({ theme }) => theme.background};
`;

const Spinner = styled.div`
  width: 60px;
  height: 60px;
  border: 6px solid ${({ theme }) => theme.border};
  border-top: 6px solid ${({ theme }) => theme.primary};
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const LoadingFallback: React.FC = () => {
  const { theme } = useTheme();
  return (
    <LoadingContainer theme={theme}>
      <Spinner theme={theme} />
    </LoadingContainer>
  );
};

const Home = lazy(() => import('./pages/Home'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Products = lazy(() => import('./pages/Products'));
const Settings = lazy(() => import('./pages/Settings'));
const Patterns = lazy(() => import('./pages/Patterns'));

const AppContent: React.FC = () => {
  const { theme } = useTheme();

  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyles theme={theme} />
      <BrowserRouter>
        <Navigation />
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/products" element={<Products />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/patterns" element={<Patterns />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </StyledThemeProvider>
  );
};

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
