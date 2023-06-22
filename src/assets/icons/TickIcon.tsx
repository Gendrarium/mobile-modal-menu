import { memo } from 'react';
import type { IIconPropsWithFill } from './interfaces';

const TickIcon: React.FC<IIconPropsWithFill> = memo(({ className, fill }) => {
  return (
    <svg
      width='12'
      height='8'
      viewBox='0 0 12 8'
      fill='none'
      className={className}
      xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='m.65 3.35.7-.7L5 6.29l6-6 .7.71L5 7.7.65 3.36Z'
        fill={fill ? undefined : '#1D7DED'}
        className={fill}
      />
    </svg>
  );
});

export default TickIcon;
