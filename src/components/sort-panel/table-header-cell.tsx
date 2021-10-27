import React from 'react';
import { useAppDispatch } from '../../store';
import { tryToChangeSort } from '../../reducers/reducers';
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