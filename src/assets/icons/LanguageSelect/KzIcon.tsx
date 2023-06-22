import { memo } from 'react';
import { IIconProps } from '../interfaces';

const UsIcon: React.FC<IIconProps> = memo(({ className }) => {
  return (
    <svg
      width='12'
      height='12'
      fill='none'
      viewBox='0 0 12 12'
      className={className}
      xmlns='http://www.w3.org/2000/svg'>
      <path fill='#fff' d='M0 0h12v12H0z' />
      <path d='M12 0H0v12h12V0Z' fill='#00AFCA' />
      <path
        d='M9.6 6.8a4 4 0 0 1-7 .2l.9-.6a3 3 0 0 0 5 0l1 .4Z'
        fill='#FADB14'
      />
      <circle cx='6' cy='5' r='2' fill='#FADB14' />
    </svg>
  );
});

export default UsIcon;
