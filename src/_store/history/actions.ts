import { action, ActionType } from 'typesafe-actions';

/**
 *
 */
export const historyActions = {
  /**
   * Add history item
   */
  add: (item: React.ReactNode) => {
    return action('ADD', item);
  },

  /**
   * Clear history items
   */
  clear: () => action('CLEAR'),
};

export type historyActionsType = ActionType<typeof historyActions>;
