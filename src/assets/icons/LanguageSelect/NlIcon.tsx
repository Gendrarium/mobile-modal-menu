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
      <path d='M12 0H0v4h12V0Z' fill='#F5222D' />
      <path d='M12 8H0v4h12V8Z' fill='#2F54EB' />
    </svg>
  );
});

export default UsIcon;
