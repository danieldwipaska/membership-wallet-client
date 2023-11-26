import React from 'react';
import { Nav } from '../../components/Nav';
import Header from '../../components/Header';
import Table from '../../components/Table';

export const Members = () => {
  return (
    <div>
      <div className="grid grid-cols-12 gap-0 bg-slate-100">
        <div>
          <Nav />
        </div>
        <div className="col-span-11 py-9 px-12">
          <div>
            <Header title="Members" subtitle="List of Members" />
          </div>
          <div className="mt-6">
            <Table columns={['Name', 'Phone', 'Email', 'Card ID', 'Status', 'Date of Birth', 'Created At', 'Updated At']} />
          </div>
        </div>
      </div>
    </div>
  );
};
