import { memo } from 'react';
import type { IIconPropsWithStroke } from './interfaces';

const BurgerIcon: React.FC<IIconPropsWithStroke> = memo(
  ({ className, stroke }) => {
    return (
      <svg
        viewBox='0 0 534 400'
        width='53'
        height='40'
        className={className}
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M34 367h466M34 200h466M34 33h466'
          stroke={stroke ? undefined : '#151617'}
          strokeWidth='66.7'
          strokeLinecap='round'
          strokeLinejoin='round'
          className={stroke}
        />
      </svg>
    );
  },
);

export default BurgerIcon;
