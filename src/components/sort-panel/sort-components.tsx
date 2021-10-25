import React, { useState } from 'react';

const SortComponent = ({sortValueChange, children}: Props): JSX.Element => {
  // const [nameInput, setNameInput] = useState('name');

  const onSortChange = (e: React.MouseEvent<HTMLElement>) => {
    // const {name} = e.target;
    // setNameInput(name);
    // e.currentTarget.innerHTML
    // const {textContent} = e.target;
    sortValueChange(children);
  };

  return (
    <th scope="col" onClick={onSortChange}>
      {children}
    </th>
  )
}

interface Props {
  sortValueChange: (value: string) => void,
  children: string,
}

export default SortComponent;