import React, { ReactNode } from 'react';

type HighlightProps = {
  children: ReactNode;
  color: string;
};

export const Highlight: React.FC<HighlightProps> = ({ children, color }) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '10px',
      color: '#fff',
      padding: '5px',
      margin: '15px'
    }}
  >
    {children}
  </span>
);
