import { memo } from 'react';
import { IIconProps } from '../interfaces';

const UsIcon: React.FC<IIconProps> = memo(({ className }) => {
  return (
    <svg
      width='18'
      height='18'
      viewBox='0 0 18 18'
      fill='none'
      className={className}
      xmlns='http://www.w3.org/2000/svg'>
      <path d='M18 0H0v18h18V0Z' fill='#ECF1F5' />
      <path d='M18 6H0v6h18V6Z' fill='#2F54EB' />
      <path d='M18 12H0v6h18v-6Z' fill='#F5222D' />
    </svg>
  );
});

export default UsIcon;
