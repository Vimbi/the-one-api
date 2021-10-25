import React, { ChangeEvent, useState } from 'react';
import './search-panel.scss';

const SearchPanel = ({inputSearchChange}: Props): JSX.Element =>{

  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    inputSearchChange(searchValue);
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target;
    setSearchValue(value);
  };

  return (
    <div className="search-wrapper">
      <form className="form-inline" onSubmit={handleSubmit}>
        <div className="form-group mx-sm-3 mb-2">
          <i className="fas fa-search"></i>
          <input
            type="text"
            value={searchValue}
            onChange={handleChange}
            className="form-control search-input"
            placeholder="search" />
        </div>
        <button type="submit" className="btn btn-primary mb-2">Search</button>
      </form>
    </div>
  )
}

interface Props {
  inputSearchChange: (value: string) => void
}

export default SearchPanel;