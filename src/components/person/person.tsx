/* eslint-disable @typescript-eslint/naming-convention */
import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import './person.scss';

const Person = ({person, history}: Props): JSX.Element => {

  const {birth, death, gender, hair, height, name, race, realm, spouse, _id} = person;

  const onHandleClick = () => {
    history.push(`/details/${_id}`)
  }

  return (
    <tr className="person-row" onClick={onHandleClick}>
      <th >{name}</th>
      <td>{birth}</td>
      <td>{death}</td>
      <td>{gender}</td>
      <td>{hair}</td>
      <td>{height}</td>
      <td>{race}</td>
      <td>{realm}</td>
      <td>{spouse}</td>
    </tr>
  )
}

interface Props extends RouteComponentProps {
  person: {
    birth: string,
    death: string,
    gender: string,
    hair: string,
    height: string,
    name: string,
    race: string,
    realm: string,
    spouse: string,
    _id: string
  }
}

export default withRouter(Person);