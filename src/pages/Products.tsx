import React, { memo, useState, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { useAppDispatch } from '../store/hooks';
import { setFilter } from '../store/slices/productsSlice';
import { Button } from '../components/common/Button';
import { Card } from '../components/common/Card';
import { useDebounce } from '../hooks/useDebounce';

const ProductsContainer = styled.div`
  padding: 40px;
  max-width: 1600px;
  margin: 0 auto;
  background: ${({ theme }) => theme.background};
  min-height: 100vh;
`;

const Header = styled.div`
  margin-bottom: 40px;
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: 800;
  color: ${({ theme }) => theme.text};
  margin-bottom: 24px;
`;

const Controls = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
`;

const SearchInput = styled.input`
  padding: 12px 20px;
  border-radius: 12px;
  border: 2px solid ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.surface};
  color: ${({ theme }) => theme.text};
  font-size: 16px;
  min-width: 300px;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.primary}20;
  }

  @media (max-width: 768px) {
    min-width: 100%;
  }
`;

const FilterButtons = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
`;

const ProductCard = styled(Card)`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 0;
`;

const ProductImage = styled.div<{ color: string }>`
  height: 200px;
  background: linear-gradient(135deg, ${({ color }) => color}80, ${({ color }) => color}40);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 64px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      45deg,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
    transform: rotate(45deg);
    animation: shimmer 3s infinite;
  }

  @keyframes shimmer {
    0% { transform: translateX(-100%) rotate(45deg); }
    100% { transform: translateX(100%) rotate(45deg); }
  }
`;

const ProductInfo = styled.div`
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ProductName = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
  margin-bottom: 8px;
`;

const ProductCategory = styled.span`
  display: inline-block;
  padding: 4px 12px;
  background: ${({ theme }) => theme.primary}20;
  color: ${({ theme }) => theme.primary};
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 12px;
  width: fit-content;
`;

const ProductDescription = styled.p`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 16px;
  flex: 1;
`;

const ProductPrice = styled.div`
  font-size: 28px;
  font-weight: 900;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 16px;
`;

const Products: React.FC = () => {
  const { theme } = useTheme();
  const dispatch = useAppDispatch();
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilterState] = useState('all');
  const debouncedSearch = useDebounce(searchTerm, 300);

  const mockProducts = useMemo(() => [
    { id: '1', name: 'Premium Headphones', price: 299, description: 'High-quality wireless headphones with noise cancellation', image: '🎧', category: 'Electronics', color: '#6366f1' },
    { id: '2', name: 'Smart Watch', price: 399, description: 'Track your fitness and stay connected on the go', image: '⌚', category: 'Electronics', color: '#8b5cf6' },
    { id: '3', name: 'Laptop Stand', price: 79, description: 'Ergonomic aluminum laptop stand for better posture', image: '💻', category: 'Accessories', color: '#ec4899' },
    { id: '4', name: 'Mechanical Keyboard', price: 159, description: 'Premium mechanical keyboard with RGB lighting', image: '⌨️', category: 'Electronics', color: '#10b981' },
    { id: '5', name: 'Desk Lamp', price: 49, description: 'LED desk lamp with adjustable brightness', image: '💡', category: 'Home', color: '#f59e0b' },
    { id: '6', name: 'Office Chair', price: 499, description: 'Ergonomic office chair with lumbar support', image: '🪑', category: 'Furniture', color: '#3b82f6' },
    { id: '7', name: 'Monitor 4K', price: 699, description: 'Ultra HD 4K monitor with HDR support', image: '🖥️', category: 'Electronics', color: '#ef4444' },
    { id: '8', name: 'Wireless Mouse', price: 69, description: 'Precision wireless mouse with ergonomic design', image: '🖱️', category: 'Accessories', color: '#14b8a6' },
    { id: '9', name: 'USB Hub', price: 39, description: '7-port USB hub with fast charging', image: '🔌', category: 'Accessories', color: '#a855f7' },
  ], []);

  const categories = useMemo(() => ['all', ...Array.from(new Set(mockProducts.map(p => p.category)))], [mockProducts]);

  const filteredProducts = useMemo(() => {
    return mockProducts.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
                          product.description.toLowerCase().includes(debouncedSearch.toLowerCase());
      const matchesFilter = filter === 'all' || product.category === filter;
      return matchesSearch && matchesFilter;
    });
  }, [mockProducts, debouncedSearch, filter]);

  const handleFilterChange = useCallback((category: string) => {
    setFilterState(category);
    dispatch(setFilter(category));
  }, [dispatch]);

  return (
    <ProductsContainer theme={theme}>
      <Header>
        <Title theme={theme}>Products Showcase</Title>
        <Controls>
          <SearchInput
            theme={theme}
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FilterButtons>
            {categories.map(category => (
              <Button
                key={category}
                theme={theme}
                variant={filter === category ? 'primary' : 'outline'}
                size="sm"
                onClick={() => handleFilterChange(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Button>
            ))}
          </FilterButtons>
        </Controls>
      </Header>

      <ProductGrid>
        <AnimatePresence>
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              theme={theme}
              hoverable
              as={motion.div}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <ProductImage color={product.color}>{product.image}</ProductImage>
              <ProductInfo>
                <ProductName theme={theme}>{product.name}</ProductName>
                <ProductCategory theme={theme}>{product.category}</ProductCategory>
                <ProductDescription theme={theme}>{product.description}</ProductDescription>
                <ProductPrice theme={theme}>${product.price}</ProductPrice>
                <Button theme={theme}>Add to Cart</Button>
              </ProductInfo>
            </ProductCard>
          ))}
        </AnimatePresence>
      </ProductGrid>
    </ProductsContainer>
  );
};

export default memo(Products);
