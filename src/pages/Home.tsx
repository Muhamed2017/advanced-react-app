import React, { memo } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { Button } from '../components/common/Button';
import { Card } from '../components/common/Card';

const HomeContainer = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.background};
`;

const Hero = styled(motion.section)`
  padding: 120px 40px;
  text-align: center;
  background: linear-gradient(135deg, ${({ theme }) => theme.primary}22 0%, ${({ theme }) => theme.secondary}22 100%);
  border-bottom: 1px solid ${({ theme }) => theme.border};
`;

const HeroTitle = styled(motion.h1)`
  font-size: 72px;
  font-weight: 900;
  background: linear-gradient(135deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.secondary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    font-size: 48px;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 24px;
  color: ${({ theme }) => theme.textSecondary};
  margin-bottom: 40px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
`;

const FeaturesSection = styled.section`
  padding: 80px 40px;
  max-width: 1400px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 48px;
  font-weight: 800;
  text-align: center;
  margin-bottom: 60px;
  color: ${({ theme }) => theme.text};
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
`;

const FeatureCard = styled(Card)`
  text-align: center;
  padding: 40px;
`;

const FeatureIcon = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.secondary});
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px;
  font-size: 40px;
`;

const FeatureTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.text};
`;

const FeatureDescription = styled.p`
  color: ${({ theme }) => theme.textSecondary};
  line-height: 1.6;
`;

const Home: React.FC = () => {
  const { theme } = useTheme();

  const features = [
    { icon: '🚀', title: 'Performance Optimized', description: 'Built with React.memo, lazy loading, and virtualization for blazing fast performance.' },
    { icon: '🎨', title: 'Beautiful UI', description: 'Stunning design with Styled Components and Framer Motion animations.' },
    { icon: '🔧', title: 'Advanced Patterns', description: 'HOCs, Render Props, and Compound Components for flexible architecture.' },
    { icon: '📦', title: 'State Management', description: 'Redux Toolkit and Context API for scalable state management.' },
    { icon: '🧪', title: 'Fully Tested', description: 'Comprehensive test coverage with Vitest and React Testing Library.' },
    { icon: '⚡', title: 'TypeScript', description: 'Type-safe codebase for better developer experience and fewer bugs.' },
  ];

  return (
    <HomeContainer theme={theme}>
      <Hero
        theme={theme}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <HeroTitle
          theme={theme}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Advanced React App
        </HeroTitle>
        <HeroSubtitle
          theme={theme}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          A production-ready React application showcasing advanced patterns, state management, and performance optimization techniques.
        </HeroSubtitle>
        <ButtonGroup
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button theme={theme} size="lg">Get Started</Button>
          <Button theme={theme} variant="outline" size="lg">Learn More</Button>
        </ButtonGroup>
      </Hero>

      <FeaturesSection>
        <SectionTitle theme={theme}>Features</SectionTitle>
        <FeaturesGrid>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              theme={theme}
              hoverable
              as={motion.div}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <FeatureIcon theme={theme}>{feature.icon}</FeatureIcon>
              <FeatureTitle theme={theme}>{feature.title}</FeatureTitle>
              <FeatureDescription theme={theme}>{feature.description}</FeatureDescription>
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </FeaturesSection>
    </HomeContainer>
  );
};

export default memo(Home);
