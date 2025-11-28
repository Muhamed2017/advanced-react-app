import { describe, it, expect } from 'vitest';
import userReducer, { setUser, logout, setLoading } from './userSlice';

describe('userSlice', () => {
  const initialState = {
    currentUser: null,
    isAuthenticated: false,
    loading: false,
  };

  it('should return the initial state', () => {
    expect(userReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should handle setUser', () => {
    const user = {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
    };

    const actual = userReducer(initialState, setUser(user));
    expect(actual.currentUser).toEqual(user);
    expect(actual.isAuthenticated).toBe(true);
    expect(actual.loading).toBe(false);
  });

  it('should handle logout', () => {
    const stateWithUser = {
      currentUser: {
        id: '1',
        name: 'John Doe',
        email: 'john@example.com',
      },
      isAuthenticated: true,
      loading: false,
    };

    const actual = userReducer(stateWithUser, logout());
    expect(actual.currentUser).toBeNull();
    expect(actual.isAuthenticated).toBe(false);
  });

  it('should handle setLoading', () => {
    const actual = userReducer(initialState, setLoading(true));
    expect(actual.loading).toBe(true);
  });
});
