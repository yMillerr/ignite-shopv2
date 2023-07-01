'use client'
import { useEffect, useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { ImageContainer, SucessContainer } from '@/styles/pages/sucess'

import logoImg from '../../assets/logo.png'

import { useSearchParams } from 'next/navigation'
import { sucessActions, SessionInfosProps } from './actions'

import { Spinner } from '@/components/Spinner'

export default function Sucess() {
  const [sessionInfos, setSessionInfos] = useState({} as SessionInfosProps)
  const [loading, setLoading] = useState<boolean>(true)

  const sessionId = useSearchParams().get('session_id')

  async function getSessionInfos() {
    try {
      if (!sessionId) {
        return (window.location.href = '/')
      }

      await new Promise((resolve) => setTimeout(resolve, 4000))

      const response = await sucessActions(sessionId)

      if (!response) {
        return alert('Não foi possível carregar a página de sucesso!')
      }

      setSessionInfos(response)
      setLoading(false)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getSessionInfos()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {loading ? (
        <>
          <Spinner />
        </>
      ) : (
        <SucessContainer>
          <Image src={logoImg} alt="" width={120} height={52} />

          <ImageContainer>
            {sessionInfos.productsImages.map((img) => {
              return (
                <div key={img}>
                  <Image src={img} width={130} height={130} alt="" />
                </div>
              )
            })}
          </ImageContainer>

          <h2>Compra efetuada!</h2>

          <p>
            Uhuul <strong>{sessionInfos.customerName}</strong>, sua compra de{' '}
            <span>{sessionInfos.productsImages.length}</span> camisetas já está
            a caminho da sua casa.{' '}
          </p>

          <Link href="/">Voltar ao catálogo</Link>
        </SucessContainer>
      )}
    </>
  )
}
