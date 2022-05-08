import React, {useMemo, createContext, useReducer, useContext} from 'react';
import type {ReactNode} from 'react';

import {themes} from '../imports/constants';

type State = {currentTheme: string};
type Dispatch = (action: Action) => void;
type AppProviderProps = {children: ReactNode};
type Action = {type: 'SET_CURRENT_THEME'; payload: string};

const AppStateContext = createContext<{state: State; dispatch: Dispatch} | undefined>(undefined);

const appReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'SET_CURRENT_THEME': {
      const currentTheme = action.payload;
      return {currentTheme};
    }
    default: {
      throw new Error(`Unhandled action type`);
    }
  }
};

const initialState = {currentTheme: localStorage.getItem('theme') || themes.light};

const AppProvider = ({children}: AppProviderProps) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const memoizedValue = useMemo(() => ({state, dispatch}), [state, dispatch]);
  return <AppStateContext.Provider value={memoizedValue}>{children}</AppStateContext.Provider>;
};

const useApp = () => {
  const context = useContext(AppStateContext);
  if (context === undefined) {
    throw new Error('useApp must be used within a AppProvider');
  }

  return context;
};

export {AppProvider, useApp};
