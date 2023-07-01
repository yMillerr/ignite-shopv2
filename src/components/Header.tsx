'use client'

import Image from 'next/image'
import logoImg from '../assets/logo.png'

import { HeaderContainer } from '@/styles/components/header'

import Link from 'next/link'
import { Cart } from './Cart'

export function Header() {
  return (
    <HeaderContainer>
      <Link href="/">
        <Image src={logoImg} alt="" />
      </Link>

      <Cart />
    </HeaderContainer>
  )
}
