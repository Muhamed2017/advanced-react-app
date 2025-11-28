import React, { memo, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/common/Card';
import { Button } from '../components/common/Button';
import { MouseTracker, Toggle } from '../components/patterns/RenderProps';
import { withLoading } from '../hoc/withLoading';

const PatternsContainer = styled.div`
  padding: 40px;
  max-width: 1400px;
  margin: 0 auto;
  background: ${({ theme }) => theme.background};
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: 800;
  color: ${({ theme }) => theme.text};
  margin-bottom: 16px;
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.textSecondary};
  margin-bottom: 40px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const MousePosition = styled.div`
  padding: 40px;
  background: linear-gradient(135deg, ${({ theme }) => theme.primary}15, ${({ theme }) => theme.secondary}15);
  border-radius: 12px;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
`;

const ToggleButton = styled(Button)<{ active: boolean }>`
  background: ${({ active, theme }) => active ? theme.success : theme.error};
  width: 100%;
  margin-top: 16px;
`;

const CodeBlock = styled.pre`
  background: ${({ theme }) => theme.mode === 'dark' ? '#1e293b' : '#f1f5f9'};
  padding: 20px;
  border-radius: 12px;
  overflow-x: auto;
  margin-top: 16px;
  font-size: 14px;
  line-height: 1.6;
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.border};

  code {
    font-family: 'Fira Code', 'Courier New', monospace;
  }
`;

const CompoundCard = styled.div`
  background: ${({ theme }) => theme.surface};
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.border};
  box-shadow: 0 2px 8px ${({ theme }) => theme.shadow};
`;

const CompoundHeader = styled.div`
  padding: 24px;
  background: linear-gradient(135deg, ${({ theme }) => theme.primary}20, ${({ theme }) => theme.secondary}20);
  border-bottom: 1px solid ${({ theme }) => theme.border};
`;

const CompoundBody = styled.div`
  padding: 24px;
`;

const CompoundFooter = styled.div`
  padding: 24px;
  background: ${({ theme }) => theme.background};
  border-top: 1px solid ${({ theme }) => theme.border};
  display: flex;
  gap: 12px;
  justify-content: flex-end;
`;

const DemoComponent: React.FC = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h3>This component is wrapped with withLoading HOC</h3>
      <p>Content loaded successfully!</p>
    </div>
  );
};

const LoadingDemo = withLoading(DemoComponent);

const Patterns: React.FC = () => {
  const { theme } = useTheme();
  const [isLoading, setIsLoading] = useState(false);

  const simulateLoading = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <PatternsContainer theme={theme}>
      <Title theme={theme}>Advanced Patterns</Title>
      <Subtitle theme={theme}>
        Demonstrating HOCs, Render Props, and Compound Components
      </Subtitle>

      <Grid>
        <Card
          theme={theme}
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <CardHeader theme={theme}>
            <CardTitle theme={theme}>Render Props Pattern</CardTitle>
            <CardDescription theme={theme}>
              MouseTracker component using render props
            </CardDescription>
          </CardHeader>
          <CardContent theme={theme}>
            <MouseTracker
              render={({ x, y }) => (
                <MousePosition theme={theme}>
                  Mouse position: {x}, {y}
                </MousePosition>
              )}
            />
            <CodeBlock theme={theme}>
              <code>{`<MouseTracker
  render={({ x, y }) => (
    <div>Mouse: {x}, {y}</div>
  )}
/>`}</code>
            </CodeBlock>
          </CardContent>
        </Card>

        <Card
          theme={theme}
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <CardHeader theme={theme}>
            <CardTitle theme={theme}>Toggle with Render Props</CardTitle>
            <CardDescription theme={theme}>
              Reusable toggle logic using render props
            </CardDescription>
          </CardHeader>
          <CardContent theme={theme}>
            <Toggle
              render={(isOn, toggle) => (
                <div>
                  <MousePosition theme={theme}>
                    Status: {isOn ? 'ON' : 'OFF'}
                  </MousePosition>
                  <ToggleButton theme={theme} active={isOn} onClick={toggle}>
                    Click to Toggle
                  </ToggleButton>
                </div>
              )}
            />
            <CodeBlock theme={theme}>
              <code>{`<Toggle
  render={(isOn, toggle) => (
    <>
      <div>Status: {isOn ? 'ON' : 'OFF'}</div>
      <button onClick={toggle}>Toggle</button>
    </>
  )}
/>`}</code>
            </CodeBlock>
          </CardContent>
        </Card>

        <Card
          theme={theme}
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <CardHeader theme={theme}>
            <CardTitle theme={theme}>Higher-Order Component</CardTitle>
            <CardDescription theme={theme}>
              Component wrapped with withLoading HOC
            </CardDescription>
          </CardHeader>
          <CardContent theme={theme}>
            <LoadingDemo isLoading={isLoading} />
            <Button theme={theme} onClick={simulateLoading} style={{ marginTop: '16px', width: '100%' }}>
              Simulate Loading
            </Button>
            <CodeBlock theme={theme}>
              <code>{`const withLoading = (Component) => {
  return ({ isLoading, ...props }) => {
    if (isLoading) return <Spinner />;
    return <Component {...props} />;
  };
};

const Enhanced = withLoading(MyComponent);`}</code>
            </CodeBlock>
          </CardContent>
        </Card>

        <Card
          theme={theme}
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <CardHeader theme={theme}>
            <CardTitle theme={theme}>Compound Components</CardTitle>
            <CardDescription theme={theme}>
              Flexible component composition pattern
            </CardDescription>
          </CardHeader>
          <CardContent theme={theme}>
            <CompoundCard theme={theme}>
              <CompoundHeader theme={theme}>
                <h3 style={{ margin: 0, fontSize: '20px' }}>Compound Card Header</h3>
              </CompoundHeader>
              <CompoundBody theme={theme}>
                <p style={{ margin: 0, lineHeight: 1.6 }}>
                  This demonstrates the compound component pattern where multiple
                  components work together to form a cohesive UI element.
                </p>
              </CompoundBody>
              <CompoundFooter theme={theme}>
                <Button theme={theme} variant="outline" size="sm">Cancel</Button>
                <Button theme={theme} size="sm">Confirm</Button>
              </CompoundFooter>
            </CompoundCard>
            <CodeBlock theme={theme}>
              <code>{`<CompoundCard>
  <CompoundCard.Header>
    <h3>Title</h3>
  </CompoundCard.Header>
  <CompoundCard.Body>
    Content here
  </CompoundCard.Body>
  <CompoundCard.Footer>
    <Button>Action</Button>
  </CompoundCard.Footer>
</CompoundCard>`}</code>
            </CodeBlock>
          </CardContent>
        </Card>
      </Grid>
    </PatternsContainer>
  );
};

export default memo(Patterns);
