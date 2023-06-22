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
      <path fill='#fff' d='M0 0h12v12H0z' />
      <path d='M12 0H0v12h12V0Z' fill='#F5222D' />
      <path
        d='M8 6.9c.5 0 1-.4 1-1 0-.5-.5-.9-1-.9a1 1 0 0 0-1 1c0 .5.4.9 1 .9Z'
        fill='#F1F8FE'
      />
      <path
        d='M6.5 3.5A2.4 2.4 0 1 0 8 7.8a2.8 2.8 0 1 1 0-3.9c-.4-.3-.9-.4-1.4-.4Z'
        fill='#F1F8FE'
      />
    </svg>
  );
});

export default UsIcon;
