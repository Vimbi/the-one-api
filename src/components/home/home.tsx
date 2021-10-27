import './home.scss';
import React, { useEffect} from 'react';
import SearchPanel from '../search-panel/search-panel';
import PersonsList from '../persons-list/persons-list';
import CharactersAmount from '../characters-amount/characters-amount';
import Pagination from '../pagination/pagination';
import { RootState, useTypedSelector, useAppDispatch } from '../../store';
import Spinner from '../spinner/spinner';
import { getPersons } from '../../reducers/reducers';

const Home = (): JSX.Element => {

  const dispatch = useAppDispatch();
  const { charactersPerPage, sort, spinnerVisible } = useTypedSelector((state: RootState) => state.characters);

  useEffect(() => {
    dispatch(getPersons());
  }, [ charactersPerPage, sort ]);

  return (
    <div className="home">
      <SearchPanel />
      {spinnerVisible ? <Spinner /> : <PersonsList />}
      <CharactersAmount />
      <Pagination />
    </div>
  );
}

export default Home;