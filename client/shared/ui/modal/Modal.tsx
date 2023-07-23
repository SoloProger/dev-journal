import React from 'react';

interface ModalProps {
  open: (value: boolean) => void;
  children: React.JSX.Element
  title?: string;
}

export function Modal({ open, title, children }: ModalProps) {
  return (
    <section className='darkBG'>
      <div className='centered'>
        <div className='modal'>
          <div className='modalHeader'>
            <h2 className='heading'>{title ? title : 'Модальное окно' }</h2>
          </div>
          <button className='closeBtn' onClick={() => open(false)}>X</button>
          <div className='modalContent'>{children}</div>
        </div>
      </div>
    </section>
  );
}