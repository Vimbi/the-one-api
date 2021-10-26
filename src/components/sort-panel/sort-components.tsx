import React, { useState, useEffect } from 'react';
import { useAppDispatch, useTypedSelector } from '../../store';
import { charactersSlice, getPersons, tryToChangeSort } from '../../reducers/reducers';

const SortComponent = ({ children }: ISortComponentProps): JSX.Element => {
  // const [nameInput, setNameInput] = useState('name');
  const dispatch = useAppDispatch();
  const sort = useTypedSelector(state => state.characters.sort);

  const handleSortChange = (e: React.MouseEvent<HTMLElement>) => {
    // const {name} = e.target;
    // setNameInput(name);
    // e.currentTarget.innerHTML
    // const {textContent} = e.target;
    // sortValueChange(children);
    dispatch(tryToChangeSort(children));
  };

  // useEffect(() => {
  //   dispatch(getPersons());
  // }, [sort])

  return (
    <th scope="col" onClick={handleSortChange}>
      {children}
    </th>
  )
}

interface ISortComponentProps {
  children: string,
}

export default SortComponent;