/* eslint-disable no-underscore-dangle */
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import Person from "../person/person";
import TableHeaderCell from "../sort-panel/table-header-cell";
import './persons-list.scss';


const PersonsList = (): JSX.Element => {

  const persons = useSelector((state: RootState) => state.characters.persons)

  const personsList = persons.map((person) =>
    <Person
      key={person._id}
      person={person} />)

  return (
    <div className="table-responsive-xl">
      <table className="table table-hover">
        <thead>
          <tr>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Birth</TableHeaderCell>
            <TableHeaderCell>Death</TableHeaderCell>
            <TableHeaderCell>Gender</TableHeaderCell>
            <TableHeaderCell>Hair</TableHeaderCell>
            <TableHeaderCell>Height</TableHeaderCell>
            <TableHeaderCell>Race</TableHeaderCell>
            <TableHeaderCell>Realm</TableHeaderCell>
            <TableHeaderCell>Spouse</TableHeaderCell>
          </tr>
        </thead>
        <tbody>
          {personsList}
        </tbody>
      </table>
    </div>
  )
}

export default PersonsList;