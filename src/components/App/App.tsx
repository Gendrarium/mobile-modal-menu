import Header from '@/components/Header/Header';
import ModalMenu from '@/components/ModalMenu/ModalMenu';
import { useState } from 'react';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      <Header setIsModalOpen={setIsModalOpen} />
      <ModalMenu isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <p className='desktop'>Чтобы увидеть контент, разрешение экрана должно быть меньше 767</p>
    </>
  );
};

export default App;
