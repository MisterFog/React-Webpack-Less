import { historyActionsType } from './actions';
import { StateType } from 'typesafe-actions';

/**
 * в чате только последняя кнопка "Подробнее" будет активна
 */
const btnMoreDetails = () => {
  const btn = document.getElementsByClassName('btn-green more_details');
  if (btn.length > 0) {
    for (let i = 0; i < btn.length; i++) {
      btn[i].setAttribute('disabled', 'disabled');
    }
  }
};

/**
 * Initial state
 */
const INITIAL_HISTORY_STATE: React.ReactNode[] = [];

/**
 * Root reducer
 *
 * @param state prev state
 * @param action current action
 */
export function historyReducer(history = INITIAL_HISTORY_STATE, action: historyActionsType) {
  switch (action.type) {
    case 'ADD':
      // console.log('historyReducer: ', action.payload);
      btnMoreDetails();
      return [
        ...history.filter((item: any) => item.props.children?.type?.length !== 0),
        action.payload,
      ];
    case 'CLEAR':
      return [];
    default:
      return history;
  }
}

export type historyReducerType = StateType<typeof historyReducer>;
