// import { ThunkAction } from "redux-thunk";
// import { AnyAction } from "redux";
// import fetch from 'node-fetch';
// import { RootState } from "../store";


// export const showSpinner = (): {
//   type: string;
// } => ({type: 'SHOW_LOADER'});

// export const hideSpinner = (): {
//   type: string;
// } => ({type: 'HIDE_LOADER'});

// export const changePagesNumber = (value: string): {
//   type: string;
//   payload: string;
// } => ({ type: 'CHANGE_PAGES_NUMBER', payload: value});

// // const apiBase ='https://the-one-api.dev/v2';

// const getResource = async  (url: string): Promise<{
//   docs: [],
//   total: number,
//   limit: number,
//   page: number,
//   pages: number
// }> => {
//   const res = await fetch(`${apiBase}${url}`, {
//     headers: {
//       'Accept': 'application/json',
//       'Authorization': 'Bearer tjumV14P3X2YUutBervW'
//     }
//   });

//   if(!res.ok) {
//     throw new Error
//     (`Could not fetch ${url} received ${res.status}`)
//   }
//   return res.json();
// }

// const transformPerson = (personArray: {
//   birth: string;
//   death: string;
//   gender: string;
//   hair: string;
//   height: string;
//   name: string;
//   race: string;
//   realm: string;
//   spouse: string;
//   _id: string;
// }[]): {
//   birth: string,
//   death: string,
//   gender: string,
//   hair: string,
//   height: string,
//   name: string,
//   race: string,
//   realm: string,
//   spouse: string,
//   id: string
// }  => {
//   const {birth,
//     death,
//     gender,
//     hair,
//     height,
//     name,
//     race,
//     realm,
//     spouse,
//     _id: id} = personArray[0];
//   return {birth,
//     death,
//     gender,
//     hair,
//     height,
//     name,
//     race,
//     realm,
//     spouse,
//     id}
// }

// export const getPersons = (
//   name: string,
//   sort: string,
//   currentPage: string,
//   CharactersPerPage: string):
// ThunkAction<void, RootState, unknown, AnyAction> =>
//   async (dispatch): Promise<void> => {
//     dispatch(showSpinner())
//     const res = await getResource
//     (`/character?page=${currentPage}&limit=${CharactersPerPage}&sort=${sort}&name=/${name}/i`);
//     dispatch({ type: 'GET_PERSONS', payload: res.docs })
//     dispatch(changePagesNumber(String(res.pages)))
//     dispatch(hideSpinner())
//   }

// export const getPerson = (id: string): ThunkAction<void, RootState, unknown, AnyAction> =>
//   async (dispatch): Promise<void> => {
//     dispatch(showSpinner())
//     const res = await getResource(`/character/${id}`);
//     dispatch({ type: 'GET_ONE_PERSON', payload: transformPerson(res.docs)});
//     dispatch(hideSpinner())
//   }

