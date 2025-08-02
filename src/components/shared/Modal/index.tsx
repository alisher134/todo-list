import type { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import CloseIcon from 'assets/icons/close_icon.svg?react';

import clsx from 'clsx';

type Props = {
  className?: string;
  children: ReactNode;
  onClose: () => void;
};

const Modal = ({
  className, children, onClose,
}: Props) => {
  const modalElement = document.getElementById('modal');

  return createPortal(
    <>
      <div className={clsx('overlay', className)} />
      <div className="modal">
        <div className="modal-header">
          <button className="modal-button" onClick={onClose}>
            <CloseIcon className="modal-icon" />
          </button>
        </div>
        {children}
      </div>
    </>,
    modalElement,
  );
};

export default Modal;
