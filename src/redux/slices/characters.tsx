import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import { RootState } from '../store';
import { Person } from '../../types/person';

const initialState = {
  name: '',
  spinnerVisible: false,
  currentPage: '1',
  charactersPerPage: '10',
  sort: "name:asc",
  totalPages: '1',
  persons: [
    {
      birth: "TA 2818",
      death: "TA 2898",
      gender: "Female",
      hair: "blonde",
      height: "",
      name: "Adaldrida (Bolger) Brandybuck",
      race: "Hobbit",
      realm: "",
      spouse: "Marmadoc Brandybuck",
      wikiUrl: "http://lotr.wikia.com//wiki/Adaldrida_(Bolger)_Brandybuck",
      _id: "5cd99d4bde30eff6ebccfc62"
    },
    {
      birth: "TA 2820",
      death: "TA 2880",
      gender: "Male",
      hair: "black",
      height: "",
      name: "Marmadoc Brandybuck",
      race: "Hobbit",
      realm: "",
      spouse: "Adaldrida (Bolger) Brandybuck",
      wikiUrl: "http://lotr.wikia.com//wiki/Adaldrida_(Bolger)_Brandybuck",
      _id: "5cd99d4bde30eff6ebccfc63"
    },
    {
      birth: "TA 3000",
      death: "TA 3010",
      gender: "Female",
      hair: "red",
      height: "",
      name: "Elrond",
      race: "Elf",
      realm: "",
      spouse: "",
      wikiUrl: "http://lotr.wikia.com//wiki/Adaldrida_(Bolger)_Brandybuck",
      _id: "5cd99d4bde30eff6ebccfc64"
    },],
  person:
    {
      birth: "TA 2818",
      death: "",
      gender: "Female",
      hair: "",
      height: "",
      name: "Adaldrida (Bolger) Brandybuck",
      race: "Hobbit",
      realm: "",
      spouse: "Marmadoc Brandybuck",
      wikiUrl: "http://lotr.wikia.com//wiki/Adaldrida_(Bolger)_Brandybuck",
      id: "5cd99d4bde30eff6ebccfc62"
    },
};

export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    changeName(state, action) {
      state.name = action.payload;
    },
    changeSpinnerVisible(state) {
      state.spinnerVisible = !state.spinnerVisible;
    },
    changeCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    changeCharactersPerPage(state, action) {
      state.charactersPerPage = action.payload;
    },
    changeSort(state, action) {
      state.sort = action.payload;
    },
    changeTotalPages(state, action) {
      state.totalPages = action.payload;
    },
    changePersons(state, action) {
      state.persons = action.payload;
    },
    changePerson(state, action) {
      state.person = action.payload;
    }
  }
})

export const tryToChangeSort = createAsyncThunk(
  'changeSort',
  async (sort: string, { getState, dispatch }) => {
    const state = getState() as RootState;
    if(state.characters.sort === `${sort}:asc`) {
      dispatch(charactersSlice.actions.changeSort(`${sort}:desc`));
    } else {
      dispatch(charactersSlice.actions.changeSort(`${sort}:asc`));
    }
  }
)

const apiBase ='https://the-one-api.dev/v2';

const getResource = async (url: string): Promise<{
  docs: [],
  total: number,
  limit: number,
  page: number,
  pages: number
}> => {
  const res = await fetch(`${apiBase}${url}`, {
    headers: {
      'Accept': 'application/json',
      'Authorization': 'Bearer tjumV14P3X2YUutBervW'
    }
  });

  if(!res.ok) {
    throw new Error
    (`Could not fetch ${url} received ${res.status}`)
  }
  return res.json();
}

export const getPersons = createAsyncThunk(
  'getPersons',
  async (args, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const { name, currentPage, charactersPerPage, sort} = state.characters;
    thunkAPI.dispatch(charactersSlice.actions.changeSpinnerVisible());
    const res = await getResource
    (`/character?page=${currentPage}&limit=${charactersPerPage}&sort=${sort}&name=/${name}/i`);
    thunkAPI.dispatch(charactersSlice.actions.changePersons(res.docs));
    thunkAPI.dispatch(charactersSlice.actions.changeTotalPages(String(res.pages)));
    thunkAPI.dispatch(charactersSlice.actions.changeSpinnerVisible());
  }
)

const transformPerson = (personArray: Person[]) => {
  const {birth,
    death,
    gender,
    hair,
    height,
    name,
    race,
    realm,
    spouse,
    _id: id} = personArray[0];
  return {birth,
    death,
    gender,
    hair,
    height,
    name,
    race,
    realm,
    spouse,
    id}
}

export const getPerson = createAsyncThunk(
  'getPersons',
  async (id: string, thunkAPI) => {
    thunkAPI.dispatch(charactersSlice.actions.changeSpinnerVisible());
    const res = await getResource(`/character/${id}`);
    thunkAPI.dispatch(charactersSlice.actions.changePerson(transformPerson(res.docs)));
    thunkAPI.dispatch(charactersSlice.actions.changeSpinnerVisible());
  }
);

export const {
  changeName,
  changeSpinnerVisible,
  changeCurrentPage,
  changeCharactersPerPage,
  changeSort,
  changeTotalPages,
  changePersons,
} = charactersSlice.actions;

// const getPerson = (
//   state = initialState.person,
//   action: PayloadAction<{
//     birth: string;
//     death: string;
//     gender: string;
//     hair: string;
//     height: string;
//     name: string;
//     race: string;
//     realm: string;
//     spouse: string;
//     wikiUrl: string;
//     id: string;
//   }>
// ): {
//   birth: string;
//   death: string;
//   gender: string;
//   hair: string;
//   height: string;
//   name: string;
//   race: string;
//   realm: string;
//   spouse: string;
//   wikiUrl: string;
//   id: string;
// } => {
//   switch (action.type) {
//     case 'GET_ONE_PERSON':
//       return action.payload
//     default:
//       return state;
//   }
// }