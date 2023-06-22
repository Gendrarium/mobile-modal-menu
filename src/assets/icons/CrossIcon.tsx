import { memo } from 'react';
import type { IIconPropsWithFill } from './interfaces';

const CrossIcon: React.FC<IIconPropsWithFill> = memo(({ className, fill }) => {
  return (
    <svg
      viewBox='0 0 20 20'
      width='20'
      height='20'
      fill='none'
      className={className}
      xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M8.94 10 .47 1.53 1.53.47 10 8.94 18.47.47l1.06 1.06L11.06 10l8.47 8.47-1.06 1.06L10 11.06l-8.47 8.47-1.06-1.06L8.94 10Z'
        className={fill}
        fill={fill ? undefined : '#151617'}
      />
    </svg>
  );
});

export default CrossIcon;
