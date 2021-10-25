import React, { ChangeEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import './pagination.scss';

const Pagination = ({pageNumberChange}: Props): JSX.Element =>{

  const [currentPage, setCurrentPage] = useState('1');

  const pagesNumber = useSelector((state: RootState) => state.pagesNumber)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    pageNumberChange(currentPage);
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let {value} = e.target;
    if (+value < 1) {
      value = '1';
    } else if (+value > +pagesNumber) {
      value = pagesNumber;
    }
    setCurrentPage(value);
  };

  return (

    <div className="pagination-wrapper">
      <form className="form-inline" onSubmit={handleSubmit}>
        <div className="form-group mx-sm-3 mb-2 pages-amount__wrapper">
          <input
            type="text"
            value={currentPage}
            onChange={handleChange}
            className="form-control pages-amount" />
          <div className="input-group-append">
            <span className="input-group-text">/</span>
            <span className="input-group-text">{pagesNumber}</span>
          </div>
        </div>
        <button type="submit" className="btn btn-primary mb-2">Go</button>
      </form>
    </div>
  )
}

interface Props {
  pageNumberChange: (value: string) => void
}

export default Pagination;