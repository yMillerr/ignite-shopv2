'use client'

import { ButtonContainer } from '@/styles/components/button'
import { ButtonHTMLAttributes } from 'react'
import Image from 'next/image'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string
  varient?: 'in' | 'out'
  icon?: {
    src: string
    width: number
    hight: number
  }
}

export function Button({
  title,
  onClick,
  varient = 'out',
  icon: Icon,
  disabled,
}: ButtonProps) {
  console.log(Icon)
  return (
    <ButtonContainer varient={varient} onClick={onClick} disabled={disabled}>
      {varient === 'out' ? title : 'Esse produto já foi adicionado'}
      {Icon && <Image src={Icon.src} alt="" width={32} height={32} />}
    </ButtonContainer>
  )
}
