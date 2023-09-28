// } catch (err) {
//   if (err instanceof Error) {
//     dispatch({
//       type: ActionType.SEARCH_REPOSITORIES_ERROR,
//       payload: err.message,
//     });
//   }
// }

import axios from 'axios';
import { ActionType } from '../action-types';
import { Action } from '../actions';
import { Dispatch } from 'redux';

export const searchRepositories = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.SEARCHREPOSITORIES });

    try {
      const { data } = await axios.get(
        `https://registry.npmjs.org/-/v1/search`,
        {
          params: {
            text: term,
          },
        }
      );

      const names = data.objects.map((result: any) => result.package.name);

      dispatch({
        type: ActionType.SEARCHREPOSITORIESSUCCESS,
        payload: names,
      });
    } catch (err) {
      if (err instanceof Error)
        dispatch({
          type: ActionType.SEARCHREPOSITORIESERROR,
          payload: err.message,
        });
    }
  };
};
