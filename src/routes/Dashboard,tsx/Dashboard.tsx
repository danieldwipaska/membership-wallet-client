import React from 'react';
import { Nav } from '../../components/Nav';

export const Dashboard = () => {
  return (
    <div>
      <div className="grid grid-cols-12 gap-0">
        <div className="h-screen">
          <Nav />
        </div>
        <div className="col-span-4 bg-slate-300 h-screen"></div>
        <div className="col-span-7 bg-slate-200 h-screen"></div>
      </div>
    </div>
  );
};
