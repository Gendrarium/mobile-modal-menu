import BurgerIcon from '@/assets/icons/BurgerIcon';
import { useCallback } from 'react';

interface HeaderProps {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ setIsModalOpen }) => {
  const handleButtonClick = useCallback(() => {
    setIsModalOpen(true);
  }, [setIsModalOpen]);

  return (
    <header className='header'>
      <button
        className='header__menu-button'
        type='button'
        onClick={handleButtonClick}>
        <BurgerIcon className='header__burger' />
      </button>
    </header>
  );
};

export default Header;
