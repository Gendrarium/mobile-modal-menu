import { memo } from 'react';
import type { IIconPropsWithFill } from './interfaces';

const ArrowIcon: React.FC<IIconPropsWithFill> = memo(({ className, fill }) => {
  return (
    <svg
      width='8'
      height='14'
      viewBox='0 0 8 14'
      fill='none'
      className={className}
      xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='m1.4.6-.8.8L6.3 7 .6 12.6l.8.8L7.7 7 1.4.6Z'
        className={fill}
        fill={fill ? undefined : '#1D7DED'}
      />
    </svg>
  );
});

export default ArrowIcon;
