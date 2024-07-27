export type TOpenModalData = {
  children?: React.ReactNode;
  heading?: string;
  title?: string;
};

export type TModalState = {
  [key: string]: TOpenModalData;
};

export type TAction = {
  type: 'OPEN_MODAL' | 'CLOSE_MODAL';
  payload: {
    key: string;
    data?: TOpenModalData;
  };
};
