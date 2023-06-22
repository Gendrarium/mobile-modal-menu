import { memo } from 'react';
import { IIconProps } from '../interfaces';

const UsIcon: React.FC<IIconProps> = memo(({ className }) => {
  return (
    <svg
      width='12'
      height='12'
      viewBox='0 0 12 12'
      fill='none'
      className={className}
      xmlns='http://www.w3.org/2000/svg'>
      <path d='M12 0H0v12h12V0Z' fill='#F1F8FE' />
      <path d='M12-1H0v2h12v-2ZM12 3H0v2h12V3Z' fill='#F5222D' />
      <path d='M7 0H0v5h7V0Z' fill='#2F54EB' />
      <path d='M12 7H0v2h12V7ZM12 11H0v2h12v-2Z' fill='#F5222D' />
      <circle cx='5.5' cy='1.5' r='.5' fill='#F1F8FE' />
      <circle cx='3.5' cy='1.5' r='.5' fill='#F1F8FE' />
      <circle cx='1.5' cy='1.5' r='.5' fill='#F1F8FE' />
      <circle cx='5.5' cy='3.5' r='.5' fill='#F1F8FE' />
      <circle cx='3.5' cy='3.5' r='.5' fill='#F1F8FE' />
      <circle cx='1.5' cy='3.5' r='.5' fill='#F1F8FE' />
    </svg>
  );
});

export default UsIcon;
