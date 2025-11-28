import type { ComponentType } from 'react';
import { useAppSelector } from '../store/hooks';

export function withAuth<P extends object>(Component: ComponentType<P>) {
  return function AuthenticatedComponent(props: P) {
    const { isAuthenticated } = useAppSelector((state) => state.user);

    if (!isAuthenticated) {
      return (
        <div style={{ padding: '40px', textAlign: 'center' }}>
          <h2>Please log in to access this page</h2>
        </div>
      );
    }

    return <Component {...props} />;
  };
}
