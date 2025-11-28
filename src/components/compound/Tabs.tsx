import React, { createContext, useContext, useState, type ReactNode } from 'react';
import styled from 'styled-components';
import { useTheme } from '../../contexts/ThemeContext';

interface TabsContextType {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const TabsContext = createContext<TabsContextType | undefined>(undefined);

const TabsContainer = styled.div`
  width: 100%;
`;

const TabsList = styled.div`
  display: flex;
  gap: 8px;
  border-bottom: 2px solid ${({ theme }) => theme.border};
  margin-bottom: 24px;
`;

const TabButton = styled.button<{ $active: boolean }>`
  padding: 12px 24px;
  background: ${({ $active, theme }) => $active ? theme.primary : 'transparent'};
  color: ${({ $active, theme }) => $active ? 'white' : theme.text};
  border: none;
  border-radius: 8px 8px 0 0;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    background: ${({ $active, theme }) => $active ? theme.primary : `${theme.primary}20`};
  }

  ${({ $active, theme }) => $active && `
    &::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      right: 0;
      height: 2px;
      background: ${theme.primary};
    }
  `}
`;

const TabContent = styled.div`
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

interface TabsProps {
  defaultTab: string;
  children: ReactNode;
}

export const Tabs: React.FC<TabsProps> & {
  List: typeof TabsList;
  Tab: typeof Tab;
  Panel: typeof TabPanel;
} = ({ defaultTab, children }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <TabsContainer>{children}</TabsContainer>
    </TabsContext.Provider>
  );
};

const Tab: React.FC<{ value: string; children: ReactNode }> = ({ value, children }) => {
  const context = useContext(TabsContext);
  const { theme } = useTheme();

  if (!context) {
    throw new Error('Tab must be used within Tabs');
  }

  const { activeTab, setActiveTab } = context;

  return (
    <TabButton
      theme={theme}
      $active={activeTab === value}
      onClick={() => setActiveTab(value)}
    >
      {children}
    </TabButton>
  );
};

const TabPanel: React.FC<{ value: string; children: ReactNode }> = ({ value, children }) => {
  const context = useContext(TabsContext);

  if (!context) {
    throw new Error('TabPanel must be used within Tabs');
  }

  const { activeTab } = context;

  if (activeTab !== value) {
    return null;
  }

  return <TabContent>{children}</TabContent>;
};

Tabs.List = TabsList;
Tabs.Tab = Tab;
Tabs.Panel = TabPanel;
