import CrossIcon from '@/assets/icons/CrossIcon';
import LanguageSelect from '@/components/LanguageSelect/LanguageSelect';
import { memo } from 'react';

interface ModalMenuHeaderProps {
  handleCloseModal: () => void;
}

const ModalMenuHeader: React.FC<ModalMenuHeaderProps> = memo(
  ({ handleCloseModal }) => {
    return (
      <header className='modal__header'>
        <LanguageSelect />
        <button
          className='modal__close-button'
          type='button'
          onClick={handleCloseModal}>
          <CrossIcon
            className='modal__close-icon'
            fill='modal__close-icon-fill'
          />
        </button>
      </header>
    );
  },
);

export default ModalMenuHeader;
