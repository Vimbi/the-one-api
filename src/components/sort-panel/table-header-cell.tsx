import React from 'react';
import { useAppDispatch } from '../../redux/store';
import { tryToChangeSort } from '../../redux/slices/characters';
import './table-header-cell.scss';

const TableHeaderCell = ({ children }: { children : string }): JSX.Element => {
  const dispatch = useAppDispatch();

  const handleSortChange = () => {
    dispatch(tryToChangeSort(children.toLowerCase()));
  };

  return (
    <th scope="col" className="table-header-cell" onClick={handleSortChange}>
      {children}
    </th>
  )
}

export default TableHeaderCell;