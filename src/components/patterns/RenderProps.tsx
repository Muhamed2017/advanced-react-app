import React, { useState, type ReactNode } from 'react';

interface MousePosition {
  x: number;
  y: number;
}

interface MouseTrackerProps {
  render: (position: MousePosition) => ReactNode;
}

export const MouseTracker: React.FC<MouseTrackerProps> = ({ render }) => {
  const [position, setPosition] = useState<MousePosition>({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    setPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      style={{ width: '100%', height: '100%', minHeight: '300px' }}
    >
      {render(position)}
    </div>
  );
};

interface ToggleProps {
  render: (isOn: boolean, toggle: () => void) => ReactNode;
}

export const Toggle: React.FC<ToggleProps> = ({ render }) => {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => setIsOn(!isOn);

  return <>{render(isOn, toggle)}</>;
};
