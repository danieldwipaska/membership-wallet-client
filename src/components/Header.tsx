import React from 'react';
import { HeaderInterface } from '../interfaces/Header';

const Header = ({ title, subtitle }: HeaderInterface) => {
  return (
    <div>
      <p className="text-4xl font-poppins">{title}</p>
      <p className="text-xl opacity-50 font-poppins">{subtitle}</p>
    </div>
  );
};

export default Header;
