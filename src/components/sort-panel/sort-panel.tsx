import React, { ChangeEvent, useState } from 'react';
import './sort-panel.scss';

const SortPanel = ({sortValueChange}: Props): JSX.Element =>{
  const [nameInput, setNameInput] = useState('name');

  const onSortChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {name} = e.target;
    setNameInput(name);
    const {value} = e.target;
    sortValueChange(value);
  };

  return (
    <div className="input__sort-wrapper">
      <h5>Sort by:</h5>
      <div onChange={onSortChange}>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            id="name" type="radio"
            name="name"
            value="name:asc"
            checked={nameInput === "name"}
            onChange={()=>{}}
            required></input>
          <label className="form-check-label" htmlFor="name">Name</label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            id="gender"
            type="radio"
            name="gender"
            checked={nameInput === "gender"}
            onChange={()=>{}}
            value="gender:asc"
            required></input>
          <label className="form-check-label" htmlFor="gender">Gender</label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            id="race"
            type="radio"
            name="race"
            checked={nameInput === "race"}
            onChange={()=>{}}
            value="race:asc"
            required></input>
          <label className="form-check-label" htmlFor="race">Race</label>
        </div>
      </div>
    </div>
  )
}

interface Props {
  sortValueChange: (value: string) => void
}

export default SortPanel;