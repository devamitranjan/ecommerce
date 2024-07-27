import { useModalContext } from './modal.context';

const useModal = () => {
  const { state, dispatch } = useModalContext();

  const openModal = (
    key: string,
    data?: { children?: React.ReactNode; heading?: string; title?: string }
  ) => {
    dispatch({ type: 'OPEN_MODAL', payload: { key, data } });
  };

  const closeModal = (key: string) => {
    dispatch({ type: 'CLOSE_MODAL', payload: { key } });
  };

  return { openModal, closeModal, ...state };
};

export default useModal;
