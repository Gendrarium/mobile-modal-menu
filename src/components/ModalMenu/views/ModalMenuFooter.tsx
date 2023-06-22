import { memo } from 'react';

const ModalMenuFooter = memo(() => {
  return (
    <footer className='modal__footer'>
      <a className='modal__link' href='#'>
        Контакты
      </a>
      <a className='modal__link' href='#'>
        Поиск
      </a>
    </footer>
  );
});

export default ModalMenuFooter;
