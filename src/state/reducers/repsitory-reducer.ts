import { Action } from '../actions';
import { ActionType } from '../action-types';

interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const initialState: RepositoriesState = {
  loading: false,
  error: null,
  data: [],
};

const repositoriesReducer = (
  state: RepositoriesState = initialState,
  action: Action
): RepositoriesState => {
  switch (action.type) {
    case ActionType.SEARCHREPOSITORIES:
      return { loading: true, error: null, data: [] };
    case ActionType.SEARCHREPOSITORIESSUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.SEARCHREPOSITORIESERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default repositoriesReducer;
