import React, { ChangeEvent } from 'react';
import './characters-amount.scss';

const CharactersAmount = ({charactersAmountChange, charactersAmount}: Props): JSX.Element =>{

  const onAmountChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const {value} = e.target;
    charactersAmountChange(value);
  };

  return (
    <div className="characters-amount__wrapper">
      <div className="form-group">
        <select className="custom-select" name="select" onChange={onAmountChange} value={charactersAmount}
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

interface Props {
  charactersAmountChange: (value: string) => void,
  charactersAmount: string
}

export default CharactersAmount;