import repositoriesReducer from './repsitory-reducer';
import { combineReducers } from 'redux';

const reducers = combineReducers({
  repositories: repositoriesReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
//Create a reducer function that internally calls functions to return a type that looks like the return of the reducers function
