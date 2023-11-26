import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalculator, faClockRotateLeft, faGear, faIdCard, faPeopleGroup, faTableColumns } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { faCircleUser, faCreditCard } from '@fortawesome/free-regular-svg-icons';

export const Nav = () => {
  return (
    <div>
      <nav className="bg-black h-screen text-white fixed px-3">
        <div className="grid grid-rows-6 grid-flow-col gap-4 py-5">
          <div className="p-4 mx-auto text-white rounded-lg text-3xl">LOGO</div>
          <NavLink to="/dashboard" className="p-4 mx-auto text-white hover:scale-125 duration-200 rounded-lg">
            <FontAwesomeIcon icon={faTableColumns} size={'2x'} />
          </NavLink>
          <NavLink to="#" className="p-4 mx-auto text-white opacity-50 hover:scale-125 duration-200 rounded-lg">
            <FontAwesomeIcon icon={faCalculator} size={'2x'} />
          </NavLink>
          <NavLink to="#" className="p-4 mx-auto text-white opacity-50 hover:scale-125 duration-200 rounded-lg">
            <FontAwesomeIcon icon={faClockRotateLeft} size={'2x'} />
          </NavLink>
          <NavLink to="/members" className="p-4 mx-auto text-white opacity-50 hover:scale-125 duration-200 rounded-lg">
            <FontAwesomeIcon icon={faPeopleGroup} size={'2x'} />
          </NavLink>
          <NavLink to="#" className="p-4 mx-auto text-white opacity-50 hover:scale-125 duration-200 rounded-lg">
            <FontAwesomeIcon icon={faCreditCard} size={'2x'} />
          </NavLink>
        </div>
        <div className="grid grid-rows-2 grid-flow-col gap-4 mt-20">
          <NavLink to="#" className="p-4 mx-auto text-white opacity-50 hover:scale-125 duration-200 rounded-lg">
            <FontAwesomeIcon icon={faGear} size={'2x'} />
          </NavLink>
          <NavLink to="#" className="p-4 mx-auto text-white opacity-50 hover:scale-125 duration-200 rounded-lg">
            <FontAwesomeIcon icon={faCircleUser} size={'2x'} />
          </NavLink>
        </div>
      </nav>
    </div>
  );
};
