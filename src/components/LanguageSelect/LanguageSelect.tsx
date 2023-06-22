import { useCallback, useState } from 'react';

import UsIcon from '@/assets/icons/LanguageSelect/UsIcon';
import NlIcon from '@/assets/icons/LanguageSelect/NlIcon';
import ByIcon from '@/assets/icons/LanguageSelect/ByIcon';
import RuIcon from '@/assets/icons/LanguageSelect/RuIcon';
import KzIcon from '@/assets/icons/LanguageSelect/KzIcon';
import TrIcon from '@/assets/icons/LanguageSelect/TrIcon';
import ArrowIcon from '@/assets/icons/ArrowIcon';
import { IIconProps } from '@/assets/icons/interfaces';
import TickIcon from '@/assets/icons/TickIcon';

interface ILanguage {
  key: string;
  name: string;
  icon: React.FC<IIconProps>;
}

const languages: ILanguage[] = [
  { name: 'United States', key: 'Ua', icon: UsIcon },
  { name: 'Netherlands', key: 'Nl', icon: NlIcon },
  { name: 'Беларусь', key: 'By', icon: ByIcon },
  { name: 'Россия', key: 'Ru', icon: RuIcon },
  { name: 'Казахстан', key: 'Kz', icon: KzIcon },
  { name: 'Türkiye', key: 'Tr', icon: TrIcon },
];

export default function LanguageHandler() {
  const [currentLanguage, setCurrentLanguage] = useState<ILanguage>({
    name: 'Россия',
    key: 'Ru',
    icon: RuIcon,
  });
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const closeLang = useCallback((e: MouseEvent) => {
    if (!e.target) return;

    if (e.target.closest('.lang-select')) return;
    handleClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClose = useCallback((): void => {
    document.removeEventListener('click', closeLang);
    setIsSelectOpen(false);
  }, [closeLang]);

  const handleOpen = useCallback((): void => {
    if (!isSelectOpen) {
      document.addEventListener('click', closeLang);
      setIsSelectOpen(true);
    } else {
      handleClose();
    }
  }, [closeLang, handleClose, isSelectOpen]);

  const handleSelect = useCallback(
    (lang: ILanguage) => {
      setCurrentLanguage(lang);
      handleClose();
    },
    [handleClose],
  );

  return (
    <div className='lang-select'>
      <button
        className={`lang-select__button${
          isSelectOpen ? ' lang-select__button_active' : ''
        }`}
        onClick={handleOpen}>
        <currentLanguage.icon className='lang-select__image lang-select__image_big' />
        <h3 className='lang-select__key'>{currentLanguage.key}</h3>
        <ArrowIcon
          className='lang-select__arrow'
          fill={`lang-select__arrow-fill${
            isSelectOpen ? ' lang-select__arrow-fill_active' : ''
          }`}
        />
      </button>
      <ul
        className={`lang-select__items${
          isSelectOpen ? ' lang-select__items_open' : ''
        }`}>
        <li className='lang-select__item lang-select__item_title'>
          <h3 className='lang-select__title'>Страна</h3>
        </li>
        {languages.map((language) => (
          <li className='lang-select__item' key={language.key}>
            <button
              className='lang-select__item-container'
              onClick={() => handleSelect(language)}>
              <language.icon className='lang-select__image' />
              <span className='lang-select__span'>{language.name}</span>
              {language.key === currentLanguage.key && (
                <TickIcon
                  className='lang-select__tick'
                  fill='lang-select__tick-fill'
                />
              )}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
