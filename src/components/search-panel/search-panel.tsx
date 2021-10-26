import React, { ChangeEvent, useState } from 'react';
import { useAppDispatch, useTypedSelector } from '../../store';
import { changeName, getPersons, changeCurrentPage } from '../../reducers/reducers';
import './search-panel.scss';

const SearchPanel = (): JSX.Element => {

  const name = useTypedSelector(state => state.characters.name);
  const dispatch = useAppDispatch();

  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // e.preventDefault();
    // inputSearchChange(searchValue);
    dispatch(changeCurrentPage('1'));
    dispatch(getPersons());
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target;
    // setSearchValue(value);
    dispatch(changeName(value));
  };

  return (
    <div className="search-wrapper">
      <form className="form-inline" onSubmit={handleSubmit}>
        <div className="form-group mx-sm-3 mb-2">
          <i className="fas fa-search"></i>
          <input
            type="text"
            value={name}
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