import React, { useEffect } from "react";
import { RootState, useTypedSelector, useAppDispatch } from "../../redux/store";
// import { getPerson } from "../../actions/actions";
import { getPerson } from "../../redux/slices/characters";
import Spinner from "../spinner/spinner";
import './person-details.scss';

const PersonDetails = ({ selectedId }: { selectedId :string }): JSX.Element =>{

  const dispatch = useAppDispatch();
  const person = useTypedSelector((state: RootState) => state.characters.person)

  const loading = useTypedSelector((state: RootState) => state.characters.spinnerVisible);


  useEffect(() => {

    dispatch(getPerson(selectedId));

  }, [selectedId]);

  if (loading) return <Spinner />

  return (
    <div className="card">
      <div className="card-header">
        Person details
      </div>
      <div className="card-body">
        <h5 className="card-title">{person.name}</h5>
        <p className="card-text">Birth: {person.birth}</p>
        <p className="card-text">Death: {person.death}</p>
        <p className="card-text">Gender: {person.gender}</p>
        <p className="card-text">Hair: {person.hair}</p>
        <p className="card-text">Height: {person.height}</p>
        <p className="card-text">Race: {person.race}</p>
        <p className="card-text">Realm: {person.realm}</p>
        <p className="card-text">Spouse: {person.spouse}</p>
        <p className="card-text">Id: {person.id}</p>
      </div>
    </div>
  )
}

export default PersonDetails;