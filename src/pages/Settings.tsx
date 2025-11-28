import React, { memo, useReducer } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/common/Card';
import { Button } from '../components/common/Button';
import { Toggle } from '../components/patterns/RenderProps';

const SettingsContainer = styled.div`
  padding: 40px;
  max-width: 1000px;
  margin: 0 auto;
  background: ${({ theme }) => theme.background};
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: 800;
  color: ${({ theme }) => theme.text};
  margin-bottom: 40px;
`;

const SettingItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid ${({ theme }) => theme.border};

  &:last-child {
    border-bottom: none;
  }
`;

const SettingLabel = styled.div`
  flex: 1;
`;

const SettingTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  margin-bottom: 4px;
`;

const SettingDescription = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.textSecondary};
  line-height: 1.5;
`;

const ToggleSwitch = styled.button<{ isOn: boolean }>`
  width: 60px;
  height: 32px;
  background: ${({ isOn, theme }) => isOn ? theme.primary : theme.border};
  border-radius: 16px;
  border: none;
  position: relative;
  cursor: pointer;
  transition: background 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    top: 4px;
    left: ${({ isOn }) => isOn ? '32px' : '4px'};
    width: 24px;
    height: 24px;
    background: white;
    border-radius: 50%;
    transition: left 0.3s ease;
  }
`;

const Input = styled.input`
  padding: 12px 16px;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.surface};
  color: ${({ theme }) => theme.text};
  font-size: 16px;
  width: 100%;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.primary}20;
  }
`;

const Select = styled.select`
  padding: 12px 16px;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.surface};
  color: ${({ theme }) => theme.text};
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.primary}20;
  }
`;

interface SettingsState {
  username: string;
  email: string;
  language: string;
  timezone: string;
}

type SettingsAction =
  | { type: 'SET_USERNAME'; payload: string }
  | { type: 'SET_EMAIL'; payload: string }
  | { type: 'SET_LANGUAGE'; payload: string }
  | { type: 'SET_TIMEZONE'; payload: string }
  | { type: 'RESET' };

const initialState: SettingsState = {
  username: 'John Doe',
  email: 'john@example.com',
  language: 'en',
  timezone: 'UTC',
};

function settingsReducer(state: SettingsState, action: SettingsAction): SettingsState {
  switch (action.type) {
    case 'SET_USERNAME':
      return { ...state, username: action.payload };
    case 'SET_EMAIL':
      return { ...state, email: action.payload };
    case 'SET_LANGUAGE':
      return { ...state, language: action.payload };
    case 'SET_TIMEZONE':
      return { ...state, timezone: action.payload };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

const Settings: React.FC = () => {
  const { theme, toggleTheme, isDark } = useTheme();
  const [state, dispatch] = useReducer(settingsReducer, initialState);

  return (
    <SettingsContainer theme={theme}>
      <Title theme={theme}>Settings</Title>

      <Card
        theme={theme}
        as={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <CardHeader theme={theme}>
          <CardTitle theme={theme}>Appearance</CardTitle>
          <CardDescription theme={theme}>Customize how the app looks</CardDescription>
        </CardHeader>
        <CardContent theme={theme}>
          <SettingItem theme={theme}>
            <SettingLabel>
              <SettingTitle theme={theme}>Dark Mode</SettingTitle>
              <SettingDescription theme={theme}>
                Toggle between light and dark theme
              </SettingDescription>
            </SettingLabel>
            <ToggleSwitch theme={theme} isOn={isDark} onClick={toggleTheme} />
          </SettingItem>

          <Toggle
            render={(isOn, toggle) => (
              <SettingItem theme={theme}>
                <SettingLabel>
                  <SettingTitle theme={theme}>Compact Mode</SettingTitle>
                  <SettingDescription theme={theme}>
                    Use a more compact layout (Render Props pattern demo)
                  </SettingDescription>
                </SettingLabel>
                <ToggleSwitch theme={theme} isOn={isOn} onClick={toggle} />
              </SettingItem>
            )}
          />
        </CardContent>
      </Card>

      <Card
        theme={theme}
        as={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        style={{ marginTop: '24px' }}
      >
        <CardHeader theme={theme}>
          <CardTitle theme={theme}>Account Settings</CardTitle>
          <CardDescription theme={theme}>Manage your account information (useReducer demo)</CardDescription>
        </CardHeader>
        <CardContent theme={theme}>
          <SettingItem theme={theme}>
            <SettingLabel>
              <SettingTitle theme={theme}>Username</SettingTitle>
              <Input
                theme={theme}
                type="text"
                value={state.username}
                onChange={(e) => dispatch({ type: 'SET_USERNAME', payload: e.target.value })}
              />
            </SettingLabel>
          </SettingItem>

          <SettingItem theme={theme}>
            <SettingLabel>
              <SettingTitle theme={theme}>Email</SettingTitle>
              <Input
                theme={theme}
                type="email"
                value={state.email}
                onChange={(e) => dispatch({ type: 'SET_EMAIL', payload: e.target.value })}
              />
            </SettingLabel>
          </SettingItem>

          <SettingItem theme={theme}>
            <SettingLabel>
              <SettingTitle theme={theme}>Language</SettingTitle>
              <Select
                theme={theme}
                value={state.language}
                onChange={(e) => dispatch({ type: 'SET_LANGUAGE', payload: e.target.value })}
              >
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="de">German</option>
              </Select>
            </SettingLabel>
          </SettingItem>

          <SettingItem theme={theme}>
            <SettingLabel>
              <SettingTitle theme={theme}>Timezone</SettingTitle>
              <Select
                theme={theme}
                value={state.timezone}
                onChange={(e) => dispatch({ type: 'SET_TIMEZONE', payload: e.target.value })}
              >
                <option value="UTC">UTC</option>
                <option value="EST">Eastern Time</option>
                <option value="PST">Pacific Time</option>
                <option value="CET">Central European Time</option>
              </Select>
            </SettingLabel>
          </SettingItem>

          <div style={{ marginTop: '24px', display: 'flex', gap: '12px' }}>
            <Button theme={theme}>Save Changes</Button>
            <Button theme={theme} variant="outline" onClick={() => dispatch({ type: 'RESET' })}>
              Reset
            </Button>
          </div>
        </CardContent>
      </Card>
    </SettingsContainer>
  );
};

export default memo(Settings);
