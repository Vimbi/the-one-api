import React, { ChangeEvent } from 'react';
import { useAppDispatch, useTypedSelector } from '../../store';
import { changeCharactersPerPage } from '../../reducers/reducers';
import './characters-amount.scss';

const CharactersAmount = (): JSX.Element =>{

  const charactersPerPage = useTypedSelector(state => state.characters.charactersPerPage);
  const dispatch = useAppDispatch();

  const onAmountChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const {value} = e.target;
    dispatch(changeCharactersPerPage(value));
  };

  return (
    <div className="characters-amount__wrapper">
      <div className="form-group">
        <select className="custom-select" name="select" onChange={onAmountChange} value={charactersPerPage}
          required>
          <option value="">Characters per page</option>
          <option value="10">10 Characters per page</option>
          <option value="20">20 Characters per page</option>
          <option value="30">30 Characters per page</option>
        </select>
      </div>
    </div>
  )
}

export default CharactersAmount;