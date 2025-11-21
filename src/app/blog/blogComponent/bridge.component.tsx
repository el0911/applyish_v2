import React from 'react';

const BridgeComponent = ({ children }: { children: React.ReactNode }) => {
  return <div className="my-4 p-4 border-l-4 border-purple-500 bg-purple-100 text-purple-800">{children}</div>;
};

export default BridgeComponent;
