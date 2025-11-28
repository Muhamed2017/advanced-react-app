import styled from 'styled-components';
import type { Theme } from '../../contexts/ThemeContext';

export const Card = styled.div<{ theme: Theme; hoverable?: boolean }>`
  background: ${({ theme }) => theme.surface};
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 2px 8px ${({ theme }) => theme.shadow};
  border: 1px solid ${({ theme }) => theme.border};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  ${({ hoverable }) =>
    hoverable &&
    `
    cursor: pointer;

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    }
  `}
`;

export const CardHeader = styled.div`
  margin-bottom: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.border};
`;

export const CardTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
  margin-bottom: 4px;
`;

export const CardDescription = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.textSecondary};
  line-height: 1.5;
`;

export const CardContent = styled.div`
  color: ${({ theme }) => theme.text};
`;

export const CardFooter = styled.div`
  margin-top: 20px;
  padding-top: 16px;
  border-top: 1px solid ${({ theme }) => theme.border};
  display: flex;
  gap: 12px;
  justify-content: flex-end;
`;
