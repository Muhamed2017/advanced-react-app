import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { Button } from './Button';

const lightTheme = {
  mode: 'light' as const,
  primary: '#6366f1',
  secondary: '#8b5cf6',
  background: '#f8fafc',
  surface: '#ffffff',
  text: '#1e293b',
  textSecondary: '#64748b',
  border: '#e2e8f0',
  shadow: 'rgba(0, 0, 0, 0.1)',
  accent: '#ec4899',
  success: '#10b981',
  error: '#ef4444',
  warning: '#f59e0b',
};

describe('Button Component', () => {
  it('renders with children', () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Button>Click me</Button>
      </ThemeProvider>
    );
    expect(screen.getByText('Click me')).toBeDefined();
  });

  it('applies primary variant styles', () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Button variant="primary">Primary Button</Button>
      </ThemeProvider>
    );
    const button = screen.getByText('Primary Button');
    expect(button).toBeDefined();
  });

  it('applies different sizes', () => {
    const { rerender } = render(
      <ThemeProvider theme={lightTheme}>
        <Button size="sm">Small</Button>
      </ThemeProvider>
    );
    expect(screen.getByText('Small')).toBeDefined();

    rerender(
      <ThemeProvider theme={lightTheme}>
        <Button size="lg">Large</Button>
      </ThemeProvider>
    );
    expect(screen.getByText('Large')).toBeDefined();
  });
});
