import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export const SearchInput = () => {
  return (
    <div>
      <div className="text-black me-2">
        <label htmlFor="search" className="mx-3">
          <FontAwesomeIcon icon={faSearch} size={'lg'} />
        </label>
        <input type="text" id="search" placeholder="Search" className="bg-transparent p-2 w-60 rounded-md border" />
      </div>
    </div>
  );
};
