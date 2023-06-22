import ArrowIcon from '@/assets/icons/ArrowIcon';
import { useCallback, useState } from 'react';
import ModalMenuHeader from './views/ModalMenuHeader';
import ModalMenuFooter from './views/ModalMenuFooter';

interface ModalMenuProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IMenu {
  key: string;
  childs?: IMenu[];
  description?: string;
}

const menu: IMenu[] = [
  {
    key: 'Services',
    childs: [
      {
        key: 'Облачные вычисления',
        childs: [
          {
            key: 'Cloud consulting',
            description:
              'Relational database services for MySQL, PostgreSQL, and SQL server.',
          },
          {
            key: 'Cloud infrastructure analytics',
            description:
              'Health-specific solutions to enhance the patient experience.',
          },
          {
            key: 'Hybrid Cloud',
            description:
              'Data storage, AI, and analytics solutions for government agencies.',
          },
          {
            key: 'Hybrid Cloud',
            description:
              'Data storage, AI, and analytics solutions for government agencies.',
          },
          {
            key: 'Multicloud',
            description:
              'Relational database services for MySQL, PostgreSQL, and SQL server.',
          },
        ],
      },
      { key: 'Выделенные серверы' },
      { key: 'Платформенные сервисы' },
      { key: 'Информационная безопасность' },
    ],
  },
  { key: 'Managed IT', childs: [] },
  { key: 'Telecom Solutions', childs: [] },
  { key: 'About Us', childs: [] },
];

const ModalMenu: React.FC<ModalMenuProps> = ({
  isModalOpen,
  setIsModalOpen,
}) => {
  const [location, setLocation] = useState<IMenu>({ key: '' });
  const [prevLocations, setPrevLocations] = useState<IMenu[]>([]);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, [setIsModalOpen]);

  const handleSetLocation = useCallback((loc: IMenu) => {
    setLocation((prev) => {
      setPrevLocations((p) => {
        console.log(prev, p);

        return [...p, prev];
      });
      return loc;
    });
  }, []);

  const handleBack = useCallback(() => {
    const newPrev = [...prevLocations];
    const lastElement = newPrev.pop();
    if (lastElement) {
      setLocation(lastElement);
    }
    setPrevLocations(newPrev);
  }, [prevLocations]);

  return (
    <div className={`modal${isModalOpen ? ' modal_visible' : ''}`}>
      <ModalMenuHeader handleCloseModal={handleCloseModal} />
      <main
        className={`modal__main${
          location.key !== '' ? ' modal__main_in-menu' : ''
        }${prevLocations.length > 1 ? ' modal__main_overflow' : ''}`}>
        {location.key === '' ? (
          menu.map((i) => (
            <button
              key={i.key}
              className='modal__link'
              onClick={() => {
                handleSetLocation(i);
              }}>
              {i.key}
              <ArrowIcon className='modal__arrow' fill='modal__arrow-fill' />
            </button>
          ))
        ) : (
          <>
            <button
              onClick={handleBack}
              className='modal__link modal__link_back'>
              <ArrowIcon
                className='modal__arrow modal__arrow_back'
                fill='modal__arrow-fill'
              />
              <span className='modal__link-span'>{location.key}</span>
            </button>
            {prevLocations.length < 2 ? (
              location.childs &&
              location.childs.map((i) => (
                <button
                  key={i.key}
                  className='modal__link modal__link_medium'
                  onClick={() => {
                    handleSetLocation(i);
                  }}>
                  <span className='modal__link-span'>{i.key}</span>
                  <ArrowIcon
                    className='modal__arrow'
                    fill='modal__arrow-fill'
                  />
                </button>
              ))
            ) : (
              <div className='modal__menu-container'>
                {location.childs &&
                  location.childs.map((i) => (
                    <a
                      key={i.key}
                      className='modal__link modal__link_small'
                      href='#'>
                      <span className='modal__link-span'>{i.key}</span>
                      {i.description && (
                        <span className='modal__link-description'>
                          {i.description}
                        </span>
                      )}
                    </a>
                  ))}
              </div>
            )}
          </>
        )}
      </main>
      {location.key === '' && <ModalMenuFooter />}
    </div>
  );
};

export default ModalMenu;
