import React from 'react';
import Closeable from '../../components/graphics/cloaseable';

import { TOpenModalData } from './modal.types';
import useModal from './modal.hooks';

const Modal: React.FC = () => {
  const { openModal, closeModal, ...modals } = useModal();

  return (
    <>
      {Object.entries(modals).map(([key, modalData]) => {
        if (!modalData) return null;

        const { heading, title, children } = modalData as TOpenModalData;

        return (
          <div
            key={key}
            className="w-full h-full flex justify-center items-center fixed top-0 left-0 inset-0 bg-black bg-opacity-10 backdrop-filter backdrop-blur-sm"
          >
            <div className="w-full max-w-md p-8 space-y-8 bg-custom-dark rounded-lg box z-50">
              <div className="relative">
                {heading && (
                  <h6 className="text-center text-custom-gray tracking-0.03em font-medium text-14px">
                    {heading}
                  </h6>
                )}

                <button
                  className="absolute -top-4 right-4"
                  onClick={() => closeModal(key)}
                  type="button"
                  aria-label="Close modal"
                >
                  <div className="w-8 h-8 absolute bg-custom-black-bg rounded-full flex justify-center items-center">
                    <Closeable className="w-full h-full" />
                  </div>
                </button>

                {title && (
                  <p className="mt-2 text-center font-semibold text-18px text-white">
                    {title}
                  </p>
                )}
              </div>
              {children}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Modal;
