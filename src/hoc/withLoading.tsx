import type { ComponentType } from 'react';
import styled from 'styled-components';

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
`;

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #6366f1;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

interface WithLoadingProps {
  isLoading: boolean;
}

export function withLoading<P extends object>(Component: ComponentType<P>) {
  return function LoadingComponent(props: P & WithLoadingProps) {
    const { isLoading, ...restProps } = props;

    if (isLoading) {
      return (
        <LoadingContainer>
          <Spinner />
        </LoadingContainer>
      );
    }

    return <Component {...(restProps as P)} />;
  };
}
