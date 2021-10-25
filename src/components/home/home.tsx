import './home.scss';
import React, { useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchPanel from '../search-panel/search-panel';
import PersonsList from '../persons-list/persons-list';
import SortPanel from '../sort-panel/sort-panel';
import CharactersAmount from '../characters-amount/characters-amount';
import Pagination from '../pagination/pagination';
import { getPersons } from '../../actions/actions';
import { RootState } from '../../store';
import Spinner from '../spinner/spinner';


const Home = (): JSX.Element => {

  const dispatch = useDispatch();
  const loading = useSelector((state: RootState) => state.loading);

  const [searchValueParent, setSearchValueParent] = useState('');
  const [sortValue, setSortValue] = useState('name:asc');
  const [charactersAmount, setCharactersAmount] = useState('10');
  const [currentPageParent, setCurrentPageParent] = useState('1');

  useEffect(() => {

    dispatch(getPersons(searchValueParent, sortValue, currentPageParent, charactersAmount));

  }, [searchValueParent, sortValue, currentPageParent, charactersAmount]);

  const sortValueChange = (value: string) => {
    setSortValue(sortValue === `${value}:asc` ? `${value}:desc` : `${value}:asc`);
  };

  const charactersAmountChange = (value: string) => {
    setCharactersAmount(value);
  };

  const inputSearchChange = (value: string) => {
    setSearchValueParent(value);
  }

  const pageNumberChange = (value: string) => {
    setCurrentPageParent(value);
  }

  return (
    <div className="home">
      <SearchPanel inputSearchChange={inputSearchChange}  />
      <SortPanel sortValueChange={sortValueChange} />
      {loading ? <Spinner /> : <PersonsList />}
      <CharactersAmount charactersAmountChange={charactersAmountChange} charactersAmount={charactersAmount} />
      <Pagination pageNumberChange={pageNumberChange} />
    </div>
  );
}

export default Home;