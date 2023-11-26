import React from 'react';
import { SearchInput } from './SearchInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDotCircle, faFileExport } from '@fortawesome/free-solid-svg-icons';
import { TableColumn } from '../interfaces/TableColumn';

const Table = ({ columns }: TableColumn) => {
  return (
    <div>
      <div className="mx-4 my-5">
        <div className="grid grid-cols-2 gap-0">
          <div className="py-2">
            <SearchInput />
          </div>
          <div className="justify-self-end text-white/90">
            <button className="rounded-lg bg-black/80 hover:bg-black/60 duration-300 py-3 px-4">
              <span className="text-lg mx-2">Export</span>
              <FontAwesomeIcon icon={faFileExport} size={'lg'} />
            </button>
          </div>
        </div>
      </div>
      <table className="table-auto">
        <thead className="bg-slate-100">
          <tr>
            {columns.map((column) => {
              return <th className="px-5 py-2 text-start">{column}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          <tr className="border-t-2 border-t-black/25">
            <td className="px-5 py-2">Daniel Dwipaskawijaya Kamasi</td>
            <td className="px-5 py-2">085172160300</td>
            <td className="px-5 py-2">danielkamasi@outlook.com</td>
            <td className="px-5 py-2">000036715382</td>
            <td className="px-5 py-2">
              <span className="whitespace-nowrap bg-green-300 text-green-900 px-3 py-2 rounded-md">
                <FontAwesomeIcon icon={faDotCircle} size={'sm'} />
                <span className="ml-2">Active</span>
              </span>
            </td>
            <td className="px-5 py-2">Wamena, 17 April 1995</td>
            <td className="px-5 py-2">2023-11-24</td>
            <td className="px-5 py-2">2023-11-24</td>
          </tr>
          <tr className="border-t-2 border-t-black/25">
            <td className="px-5 py-2">James Walter</td>
            <td className="px-5 py-2">081961753725</td>
            <td className="px-5 py-2">jameswalter@outlook.com</td>
            <td className="px-5 py-2">000063528462</td>
            <td className="px-5 py-2">
              <span className="whitespace-nowrap bg-green-300 text-green-900 px-3 py-2 rounded-md">
                <FontAwesomeIcon icon={faDotCircle} size={'sm'} />
                <span className="ml-2">Active</span>
              </span>
            </td>
            <td className="px-5 py-2">Malang, 20 November 1987</td>
            <td className="px-5 py-2">2023-11-24</td>
            <td className="px-5 py-2">2023-11-24</td>
          </tr>
          <tr className="border-t-2 border-t-black/25">
            <td className="px-5 py-2">Tristan Romerio</td>
            <td className="px-5 py-2">085283628369</td>
            <td className="px-5 py-2">tristan@outlook.com</td>
            <td className="px-5 py-2">000054697262</td>
            <td className="px-5 py-2">
              <span className="whitespace-nowrap bg-yellow-300 text-yellow-900 px-3 py-2 rounded-md">
                <FontAwesomeIcon icon={faDotCircle} size={'sm'} />
                <span className="ml-2">inactive</span>
              </span>
            </td>
            <td className="px-5 py-2">Surabaya, 25 Januari 1990</td>
            <td className="px-5 py-2">2023-11-24</td>
            <td className="px-5 py-2">2023-11-24</td>
          </tr>
          <tr className="border-t-2 border-t-black/25">
            <td className="px-5 py-2">Kamo Kamunohashi</td>
            <td className="px-5 py-2">081263549037</td>
            <td className="px-5 py-2">kamokamonohashi@gmail.com</td>
            <td className="px-5 py-2">000053418304</td>
            <td className="px-5 py-2">
              <span className="whitespace-nowrap bg-green-300 text-green-900 px-3 py-2 rounded-md">
                <FontAwesomeIcon icon={faDotCircle} size={'sm'} />
                <span className="ml-2">Active</span>
              </span>
            </td>
            <td className="px-5 py-2">Malang, 20 November 1987</td>
            <td className="px-5 py-2">2023-11-24</td>
            <td className="px-5 py-2">2023-11-24</td>
          </tr>
          <tr className="border-t-2 border-t-black/25">
            <td className="px-5 py-2">Kamo Kamunohashi</td>
            <td className="px-5 py-2">081263549037</td>
            <td className="px-5 py-2">kamokamonohashi@gmail.com</td>
            <td className="px-5 py-2">000053418304</td>
            <td className="px-5 py-2">
              <span className="whitespace-nowrap bg-green-300 text-green-900 px-3 py-2 rounded-md">
                <FontAwesomeIcon icon={faDotCircle} size={'sm'} />
                <span className="ml-2">Active</span>
              </span>
            </td>
            <td className="px-5 py-2">Malang, 20 November 1987</td>
            <td className="px-5 py-2">2023-11-24</td>
            <td className="px-5 py-2">2023-11-24</td>
          </tr>
          <tr className="border-t-2 border-t-black/25">
            <td className="px-5 py-2">Kamo Kamunohashi</td>
            <td className="px-5 py-2">081263549037</td>
            <td className="px-5 py-2">kamokamonohashi@gmail.com</td>
            <td className="px-5 py-2">000053418304</td>
            <td className="px-5 py-2">
              <span className="whitespace-nowrap bg-green-300 text-green-900 px-3 py-2 rounded-md">
                <FontAwesomeIcon icon={faDotCircle} size={'sm'} />
                <span className="ml-2">Active</span>
              </span>
            </td>
            <td className="px-5 py-2">Malang, 20 November 1987</td>
            <td className="px-5 py-2">2023-11-24</td>
            <td className="px-5 py-2">2023-11-24</td>
          </tr>
          <tr className="border-t-2 border-t-black/25">
            <td className="px-5 py-2">Kamo Kamunohashi</td>
            <td className="px-5 py-2">081263549037</td>
            <td className="px-5 py-2">kamokamonohashi@gmail.com</td>
            <td className="px-5 py-2">000053418304</td>
            <td className="px-5 py-2">
              <span className="whitespace-nowrap bg-green-300 text-green-900 px-3 py-2 rounded-md">
                <FontAwesomeIcon icon={faDotCircle} size={'sm'} />
                <span className="ml-2">Active</span>
              </span>
            </td>
            <td className="px-5 py-2">Malang, 20 November 1987</td>
            <td className="px-5 py-2">2023-11-24</td>
            <td className="px-5 py-2">2023-11-24</td>
          </tr>
          <tr className="border-t-2 border-t-black/25">
            <td className="px-5 py-2">Kamo Kamunohashi</td>
            <td className="px-5 py-2">081263549037</td>
            <td className="px-5 py-2">kamokamonohashi@gmail.com</td>
            <td className="px-5 py-2">000053418304</td>
            <td className="px-5 py-2">
              <span className="whitespace-nowrap bg-red-300 text-red-900 px-3 py-2 rounded-md">
                <FontAwesomeIcon icon={faDotCircle} size={'sm'} />
                <span className="ml-2">Blocked</span>
              </span>
            </td>
            <td className="px-5 py-2">Malang, 20 November 1987</td>
            <td className="px-5 py-2">2023-11-24</td>
            <td className="px-5 py-2">2023-11-24</td>
          </tr>
          <tr className="border-t-2 border-t-black/25">
            <td className="px-5 py-2">Kamo Kamunohashi</td>
            <td className="px-5 py-2">081263549037</td>
            <td className="px-5 py-2">kamokamonohashi@gmail.com</td>
            <td className="px-5 py-2">000053418304</td>
            <td className="px-5 py-2">
              <span className="whitespace-nowrap bg-green-300 text-green-900 px-3 py-2 rounded-md">
                <FontAwesomeIcon icon={faDotCircle} size={'sm'} />
                <span className="ml-2">Active</span>
              </span>
            </td>
            <td className="px-5 py-2">Malang, 20 November 1987</td>
            <td className="px-5 py-2">2023-11-24</td>
            <td className="px-5 py-2">2023-11-24</td>
          </tr>
          <tr className="border-t-2 border-t-black/25">
            <td className="px-5 py-2">Kamo Kamunohashi</td>
            <td className="px-5 py-2">081263549037</td>
            <td className="px-5 py-2">kamokamonohashi@gmail.com</td>
            <td className="px-5 py-2">000053418304</td>
            <td className="px-5 py-2">
              <span className="whitespace-nowrap bg-green-300 text-green-900 px-3 py-2 rounded-md">
                <FontAwesomeIcon icon={faDotCircle} size={'sm'} />
                <span className="ml-2">Active</span>
              </span>
            </td>
            <td className="px-5 py-2">Malang, 20 November 1987</td>
            <td className="px-5 py-2">2023-11-24</td>
            <td className="px-5 py-2">2023-11-24</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
