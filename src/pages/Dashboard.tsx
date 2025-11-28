import React, { memo, useMemo } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { useAppSelector } from '../store/hooks';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/common/Card';

const DashboardContainer = styled.div`
  padding: 40px;
  max-width: 1600px;
  margin: 0 auto;
  background: ${({ theme }) => theme.background};
  min-height: 100vh;
`;

const PageHeader = styled.div`
  margin-bottom: 40px;
`;

const PageTitle = styled.h1`
  font-size: 48px;
  font-weight: 800;
  color: ${({ theme }) => theme.text};
  margin-bottom: 8px;
`;

const PageSubtitle = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.textSecondary};
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
  margin-bottom: 40px;
`;

const StatCard = styled(Card)`
  background: linear-gradient(135deg, ${({ theme }) => theme.primary}15, ${({ theme }) => theme.secondary}15);
  border: 2px solid ${({ theme }) => theme.primary}40;
`;

const StatValue = styled.div`
  font-size: 48px;
  font-weight: 900;
  background: linear-gradient(135deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.secondary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 8px;
`;

const StatLabel = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.textSecondary};
  font-weight: 600;
`;

const ChartsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ChartCard = styled(Card)`
  min-height: 400px;
`;

const ChartPlaceholder = styled.div`
  height: 300px;
  background: linear-gradient(135deg, ${({ theme }) => theme.primary}10, ${({ theme }) => theme.secondary}10);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.textSecondary};
  font-size: 18px;
  font-weight: 600;
`;

const Dashboard: React.FC = () => {
  const { theme } = useTheme();
  const { currentUser } = useAppSelector((state) => state.user);
  const { items: products } = useAppSelector((state) => state.products);

  const stats = useMemo(() => [
    { label: 'Total Users', value: '2,543' },
    { label: 'Products', value: products.length || '0' },
    { label: 'Revenue', value: '$45.2K' },
    { label: 'Growth', value: '+12.5%' },
  ], [products.length]);

  return (
    <DashboardContainer theme={theme}>
      <PageHeader>
        <PageTitle theme={theme}>
          Welcome back, {currentUser?.name || 'User'}!
        </PageTitle>
        <PageSubtitle theme={theme}>
          Here's what's happening with your projects today.
        </PageSubtitle>
      </PageHeader>

      <StatsGrid>
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            theme={theme}
            as={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <StatValue theme={theme}>{stat.value}</StatValue>
            <StatLabel theme={theme}>{stat.label}</StatLabel>
          </StatCard>
        ))}
      </StatsGrid>

      <ChartsGrid>
        <ChartCard
          theme={theme}
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <CardHeader theme={theme}>
            <CardTitle theme={theme}>Revenue Overview</CardTitle>
            <CardDescription theme={theme}>Monthly revenue trends</CardDescription>
          </CardHeader>
          <CardContent theme={theme}>
            <ChartPlaceholder theme={theme}>
              Revenue Chart (Chart.js / Recharts can be integrated here)
            </ChartPlaceholder>
          </CardContent>
        </ChartCard>

        <ChartCard
          theme={theme}
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <CardHeader theme={theme}>
            <CardTitle theme={theme}>User Analytics</CardTitle>
            <CardDescription theme={theme}>Active users over time</CardDescription>
          </CardHeader>
          <CardContent theme={theme}>
            <ChartPlaceholder theme={theme}>
              User Analytics Chart
            </ChartPlaceholder>
          </CardContent>
        </ChartCard>
      </ChartsGrid>
    </DashboardContainer>
  );
};

export default memo(Dashboard);
