import React, { ChangeEvent } from 'react';
import { useAppDispatch, useTypedSelector } from '../../redux/store';
import { changeName, getPersons, changeCurrentPage } from '../../redux/slices/characters';
import './search-panel.scss';

const SearchPanel = (): JSX.Element => {

  const name = useTypedSelector(state => state.characters.name);
  const dispatch = useAppDispatch();

  const handleSubmit = () => {
    dispatch(changeCurrentPage('1'));
    dispatch(getPersons());
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target;
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

export default SearchPanel;