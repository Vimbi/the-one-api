/* eslint-disable no-underscore-dangle */
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import Person from "../person/person";
import SortComponent from "../sort-panel/sort-components";
import './persons-list.scss';


const PersonsList = (): JSX.Element => {

  const persons = useSelector((state: RootState) => state.characters.persons)

  const personsList = persons.map((person) =>
    <Person
      key={person._id}
      person={person} />)

  return (
    <div className="table-responsive-xl">
      <table className="table table-striped">
        <tbody>
          <tr>
            <SortComponent>Name</SortComponent>
            {/* <th>Name</th> */}
            <th>Birth</th>
            <th>Death</th>
            <th>Gender</th>
            <th>Hair</th>
            <th>Height</th>
            <th>Race</th>
            <th>Realm</th>
            <th>Spouse</th>
          </tr>
          {personsList}
        </tbody>
      </table>
    </div>
  )
}

export default PersonsList;