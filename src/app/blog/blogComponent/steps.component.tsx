import React from 'react';

const StepsComponent = ({ children }: { children: React.ReactNode }) => {
  return <div className="my-4 space-y-2">{children}</div>;
};

export default StepsComponent;
