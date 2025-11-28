import styled from 'styled-components';
import type { Theme } from '../../contexts/ThemeContext';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = styled.button<ButtonProps & { theme: Theme }>`
  padding: ${({ size }) =>
    size === 'sm' ? '8px 16px' : size === 'lg' ? '16px 32px' : '12px 24px'};
  font-size: ${({ size }) =>
    size === 'sm' ? '14px' : size === 'lg' ? '18px' : '16px'};
  font-weight: 600;
  border-radius: 12px;
  border: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  ${({ variant, theme }) => {
    switch (variant) {
      case 'secondary':
        return `
          background: ${theme.secondary};
          color: white;
          box-shadow: 0 4px 14px ${theme.shadow};

          &:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px ${theme.shadow};
          }
        `;
      case 'outline':
        return `
          background: transparent;
          color: ${theme.primary};
          border: 2px solid ${theme.primary};

          &:hover {
            background: ${theme.primary};
            color: white;
          }
        `;
      case 'ghost':
        return `
          background: transparent;
          color: ${theme.text};

          &:hover {
            background: ${theme.surface};
          }
        `;
      default:
        return `
          background: ${theme.primary};
          color: white;
          box-shadow: 0 4px 14px ${theme.shadow};

          &:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px ${theme.shadow};
          }
        `;
    }
  }}

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;
