import React, { createContext, useContext, useReducer } from 'react';
import { TAction, TModalState, TOpenModalData } from './modal.types';

const initialState: TModalState = {};

const ModalContext = createContext<{
  state: TModalState;
  dispatch: React.Dispatch<TAction>;
}>({
  state: initialState,
  dispatch: () => null
});

const modalReducer = (state: TModalState, action: TAction): TModalState => {
  let newState: TModalState;
  switch (action.type) {
    case 'OPEN_MODAL':
      return {
        ...state,
        [action.payload.key]: action.payload.data as TOpenModalData
      };
    case 'CLOSE_MODAL':
      newState = { ...state };
      delete newState[action.payload.key];
      return newState;
    default:
      return state;
  }
};

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [state, dispatch] = useReducer(modalReducer, initialState);
  const data = React.useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return <ModalContext.Provider value={data}>{children}</ModalContext.Provider>;
};

export const useModalContext = () => useContext(ModalContext);
