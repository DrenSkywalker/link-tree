import React, {useMemo, createContext, useReducer, useContext} from 'react';
import type {ReactNode} from 'react';
import i18next from 'i18next';

import {themes} from '../imports/constants';

type State = {currentTheme: string; currentLanguage: string};
type Dispatch = (action: Action) => void;

type Action =
  | {type: 'SET_CURRENT_THEME'; payload: string}
  | {type: 'SET_CURRENT_LANGUAGE'; payload: string};

type AppProviderProps = {children: ReactNode};
const AppStateContext = createContext<{state: State; dispatch: Dispatch} | undefined>(undefined);

const initialState = {
  currentTheme: localStorage.getItem('theme') || themes.light,
  currentLanguage: localStorage.getItem('language') || i18next.language,
};

const appReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'SET_CURRENT_THEME': {
      const currentTheme = action.payload;
      return {...state, currentTheme};
    }
    case 'SET_CURRENT_LANGUAGE': {
      const currentLanguage = action.payload;
      return {...state, currentLanguage};
    }
    default: {
      throw new Error(`Unhandled action type`);
    }
  }
};

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
