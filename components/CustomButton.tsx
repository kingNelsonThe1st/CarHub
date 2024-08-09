"use client";

import { CustomButtonProps } from '@/props';
import Image from 'next/image';

const CustomButton = ({title, containerStyles, handleClick, btnType, textStyles, rightIcon, isDisabled }: CustomButtonProps) => {
  return (
    <button
        disabled={false}
        type={'button'}
        className={`custom-btn ${containerStyles}`}
        onClick={handleClick}
    >
        <span className={`flex-1 ${textStyles}`}>{title}</span>
        {rightIcon && (
          <div className="relative w-6 h-6">
            <Image src={rightIcon} alt='righticon' fill className='object-contain' />
          </div>
        )}
    </button>
  )
}

export default CustomButton
